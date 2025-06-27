// /app/event/page.tsx
"use client";
import Image from 'next/image';
import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { festivalItems } from "@/utils/festival";
import { FestivalDetail, festivalDetail } from '@/utils/festivaldetail';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { normalizeSearchString } from "@/utils/normalizeKana";
import { LucideIcon, Drum, Sun, Moon, Soup } from "lucide-react";
import "./event.css"
import { Button } from '../ui/button';

// 固定の属性候補（フィルター表示用）
const fixedAttributes: { icon: LucideIcon; title: string }[] = [
    { icon: Sun, title: "全日制" },
    { icon: Soup, title: "調理食販" },
    { icon: Drum, title: "ステージ" },
    { icon: Moon, title: "定時制" },
];

const EventPage: React.FC = () => {

    //いやーマジでミスった。今更直せないけどidは外に出すべきだったわクッソ使いづらい。
    const detailMap = useMemo(() => {
        const map: { [key: string]: FestivalDetail } = {};
        for (const detail of festivalDetail) {
            map[detail.id.toString()] = detail;
        }
        return map;
    }, []);

    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    // 検索とフィルターの状態管理
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedAttributes, setSelectedAttributes] = useState<LucideIcon[]>([]);

    // 固定属性リストを利用するので、iconTypes は fixedAttributes から取得
    const iconTypes = fixedAttributes.map((attr) => attr.icon);
    const pass = "ねお"
    const neo_name = "根尾 昂"
    const neo_eng = "NEO AKIRA"
    const neo_read = "ねお あきら"

    // クエリパラメータに基づく初期フィルター設定（必要に応じて）
    useEffect(() => {
        if (id) {
            const matchedAttribute = fixedAttributes.find(
                (attr) => attr.title.toLowerCase() === id.toLowerCase()
            );
            if (matchedAttribute) {
                setSelectedAttributes([matchedAttribute.icon]);
            }
        }
    }, [id]);

    // ハンドラー
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const toggleIconFilter = (icon: LucideIcon) => {
        setSelectedAttributes((prev) =>
            prev.includes(icon)
                ? prev.filter((i) => i !== icon)
                : [...prev, icon]
        );
    };

    // 正規化した検索文字列
    const normalizedSearchTerm = useMemo(
        () => normalizeSearchString(searchTerm),
        [searchTerm]
    );

    // フィルタリング：選択されたすべての属性が item.attributes に含まれるかを判定（AND 判定）
    const filteredItems = useMemo(() => {
        return festivalItems.filter((item) => {
            // タイトルと読みは既存の normalizeSearchString でチェック
            const itemSearchString = normalizeSearchString(item.title, item.reading);
            // class は既に正規化済みなのでそのままチェック
            const matchesTitleOrReading = itemSearchString.includes(normalizedSearchTerm);
            const matchesClass = (item.class ?? "").includes(normalizedSearchTerm);
            const matchesSearch = matchesTitleOrReading || matchesClass;

            const matchesAttribute =
                selectedAttributes.length === 0 ||
                selectedAttributes.every((attr) => item.attributes.includes(attr));

            return matchesSearch && matchesAttribute;
        });
    }, [normalizedSearchTerm, selectedAttributes]);

    // 各属性に対応する固定のカテゴリ名を返す
    const getCategoryTitle = (icon: LucideIcon) => {
        const found = fixedAttributes.find((attr) => attr.icon === icon);
        return found ? found.title : "カテゴリ";
    };

    return (
        <main className="eventcontent">
            {/* ヘッダー */}
            <div className="toppers">
                <picture>
                    <source
                        media="(min-width:1024px)"
                        srcSet="/header/header-pc.png"
                    />
                    <source
                        media="(min-width:660px)"
                        srcSet="/header/header-pd.png"
                    />
                    <Image
                        className="header-leave"
                        src="/header/header-sp.png"
                        alt=""
                        width={3000}
                        height={2000}
                        priority
                    />
                </picture>
                <header className="h-header">
                    <h1 className="h-title">EVENT</h1>
                </header>
            </div>

            {/* メインコンテンツ */}
            <section className="e-content">
                <div className="e-search">
                    <label htmlFor="search" className="sr-only">
                        イベント検索
                    </label>
                    <input
                        id="search"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="イベントを検索..."
                        className="e-searchbox"
                    />
                    {searchTerm && (
                        <button className="e-clear" onClick={() => setSearchTerm('')}>
                            ×
                        </button>
                    )}
                </div>

                <div className="e-iconbox">
                    {iconTypes.map((IconComponent, index) => (
                        <button
                            key={index}
                            onClick={() => toggleIconFilter(IconComponent)}
                            className={`e-iconnomal ${selectedAttributes.includes(IconComponent)
                                ? "e-iconclick"
                                : "e-iconunclick"
                                }`}
                            title={`フィルター: ${getCategoryTitle(IconComponent)}`}
                            aria-label={`フィルター: ${getCategoryTitle(IconComponent)}`}
                        >
                            <div className="e-icontitle">
                                {getCategoryTitle(IconComponent)}
                            </div>
                        </button>
                    ))}
                </div>

                {/* イベントリスト */}
                <div className="e-eventbox">
                    <div className="e-eventbox-f">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, index) => (
                                <div className="container" key={index}>
                                    <div className="card">
                                        <div className="card-all">
                                            <div className="pic">
                                                <Image
                                                    className="piceve"
                                                    src={item?.img ? `/eventimg/${item.img}` : "/event/event.png"}
                                                    alt="画像を読み込めませんでした"
                                                    width={1000}
                                                    height={1000}
                                                    priority
                                                />
                                            </div>
                                            <div className='dot'>
                                                <div className="side-r"></div>
                                                <div className="side-l"></div>
                                                <ul className='ul'>
                                                    {Array.from({ length: 50 }).map((_, index) => (
                                                        <li key={index} className='li'></li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="card-right">
                                                <div className="card-item-box">
                                                    <h2>{item.title}</h2>
                                                </div>
                                                <div className="pop_button_area">
                                                    <Drawer>
                                                        <DrawerTrigger asChild>
                                                            <button className='pop_button_sec'>詳細</button>
                                                        </DrawerTrigger>
                                                        <DrawerContent>
                                                            <DrawerHeader>
                                                                <DrawerTitle>{item.title}</DrawerTitle>
                                                            </DrawerHeader>
                                                            <div className='event_detail'>{detailMap[item.id.toString()]?.detail ?? "詳細情報がありません"}</div>
                                                            <DrawerFooter>
                                                                <DrawerClose asChild>
                                                                    <Button variant="outline">閉じる</Button>
                                                                </DrawerClose>
                                                            </DrawerFooter>
                                                        </DrawerContent>
                                                    </Drawer>
                                                    <a href={`/map?id=${encodeURIComponent(item.title)}`}><button className='pop_button_sec'>マップ</button></a>

                                                </div>

                                                <div className="card-about">
                                                    <p>開催団体 : {item.class}</p>
                                                    <p>場所 : {item.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <>
                                {searchTerm === pass ? (
                                    <div className="all_neo">
                                        <div className="neo_all_cover">
                                            <div className="neo_l">
                                                <div className="neo_title_name">
                                                    {neo_name}
                                                </div>
                                                <div className="neo_title_eng">
                                                    {neo_eng}
                                                </div>
                                                <div className="neo_title_read">
                                                    {neo_read}
                                                </div>
                                            </div>
                                            <div className="neo_r">
                                                <Image
                                                    className="neo_pic"
                                                    src="/event/neoakira.jpg"
                                                    alt="画像を読み込めませんでした"
                                                    width={1000}
                                                    height={1000}
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='nothing'>
                                        <div className="leftnot">
                                            <div className="leftnotbox">
                                                <Image
                                                    className="piceve"
                                                    src="/welcome/logo.png"
                                                    alt="画像を読み込めませんでした"
                                                    width={1000}
                                                    height={1000}
                                                    priority
                                                />
                                            </div>
                                        </div>
                                        <div className='rightnot'>
                                            <div className="rightnotbox">該当項目はありません</div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EventPage;
