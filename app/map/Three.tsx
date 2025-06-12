// /app/map/three/page.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./Map.module.css";
import { normalizeSearchString } from "@/utils/normalizeKana";
import { FestivalItem, festivalItems } from "@/utils/festival";
import Image from "next/image";

// 基準解像度（最大サイズ：1290×967px、アスペクト比 4:3）
const BASE_WIDTH = 1290;
const BASE_HEIGHT = 967; // 1290 * 0.75 ≒ 967


/**
 * カスタムフック：指定要素のサイズ（幅・高さ）を取得する
 */
function useContainerDimensions(ref: React.RefObject<HTMLElement>) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    useEffect(() => {
        if (!ref.current) return;
        const updateDimensions = () => {
            const rect = ref.current!.getBoundingClientRect();
            setDimensions({ width: rect.width, height: rect.height });
        };
        updateDimensions();
        const resizeObserver = new ResizeObserver(() => updateDimensions());
        resizeObserver.observe(ref.current);
        return () => {
            resizeObserver.disconnect();
        };
    }, [ref]);
    return dimensions;
}

/**
 * ピン表示コンポーネント  
 * ・festivalItems の座標は BASE_WIDTH×BASE_HEIGHT を基準としたピクセル値で指定  
 * ・現在のマップサイズとの比率でピンの位置・サイズを計算します
 */
interface PinProps {
    item: FestivalItem;
    isSelected: boolean;
    containerWidth: number;
    containerHeight: number;
}

const Pin: React.FC<PinProps> = ({
    item,
    isSelected,
    containerWidth,
    containerHeight,
}) => {
    if (!isSelected) return null;
    const scaleFactor = containerWidth / BASE_WIDTH;
    const baseIconSize = 100;
    const baseHitBoxSize = 40;
    const iconSize = Math.round(baseIconSize * scaleFactor);
    const hitBoxSize = Math.round(baseHitBoxSize * scaleFactor);
    const leftPx = item.x! * scaleFactor;
    const topPx = item.y! * scaleFactor;

    return (
        <div
            className={styles.pinWrapper}
            style={{
                left: `${leftPx}px`,
                top: `${topPx}px`,
                width: hitBoxSize,
                height: hitBoxSize,
                marginLeft: `-${hitBoxSize / 2}px`,
                marginTop: `-${hitBoxSize / 2}px`,
            }}
        >
            <div
                className={styles.pinContent}
                style={{
                    transform: "rotateY(-30deg)",
                    pointerEvents: "none",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                }}
            >
                <div
                    className={styles.iconWrapper}
                    style={{
                        width: iconSize,
                        height: iconSize,
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Image
                        src="/mappin.png"
                        alt="Map Pin"
                        width={iconSize}
                        height={iconSize}
                        priority
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    );
};

const floors = [1, 2, 3, 4];

export default function Three() {
    const searchParams = useSearchParams();

    const [activeFloor, setActiveFloor] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedItem, setSelectedItem] = useState<FestivalItem | null>(null);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

    const normalizedSearchQuery = normalizeSearchString(searchQuery);
    const suggestions = searchQuery
        ? festivalItems.filter((item) =>
            normalizeSearchString(item.title, item.reading).includes(
                normalizedSearchQuery
            )
        )
        : [];

    // URLのクエリパラメータ "id" をチェックし、あれば対象のイベントを選択し、検索ボックスに反映
    useEffect(() => {
        const id = searchParams.get("id");
        if (id) {
            const decodedId = decodeURIComponent(id);
            const foundEvent = festivalItems.find(
                (item) => item.title === decodedId
            );
            if (foundEvent) {
                setSelectedItem(foundEvent);
                setActiveFloor(foundEvent.floor!);
                setSearchQuery(foundEvent.title); // 検索ボックスに反映
            }
        }
    }, [searchParams]);

    // マップコンテナの ref（CSS で各ブレークポイントごとに固定ピクセル指定）
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const { width: mapWidth, height: mapHeight } = useContainerDimensions(
        mapContainerRef
    );

    return (
        <div className={styles.outerContainer}>
            {/**トップ画像 */}
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
                    <h1 className="h-title">MAP</h1>
                </header>
            </div>

            {/* サーチボックス */}
            <div className={styles.header}>
                <input
                    type="text"
                    placeholder="イベント検索"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowSuggestions(true);
                    }}
                    className={styles.searchInput}
                />
                {showSuggestions && suggestions.length > 0 && (
                    <div className={styles.suggestionList}>
                        {suggestions.map((item, index) => (
                            <div
                                key={index}
                                className={styles.suggestionItem}
                                onClick={() => {
                                    setSelectedItem(item);
                                    setActiveFloor(item.floor!);
                                    setSearchQuery(item.title);
                                    setShowSuggestions(false);
                                }}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* 階層選択ボタン（ヘッダー内配置） */}
            <div className={styles.floorSelector}>
                <div className={styles.buttonContainer}>
                    <div
                        className={styles.slider}
                        style={{
                            left: `${(activeFloor - 1) * (100 / floors.length)}%`,
                            width: `${100 / floors.length}%`,
                        }}
                    ></div>
                    {floors.map((floor) => (
                        <button
                            key={floor}
                            onClick={() => setActiveFloor(floor)}
                            className={
                                floor === activeFloor
                                    ? `${styles.button} ${styles.activeButton}`
                                    : styles.button
                            }
                        >
                            {floor}階
                        </button>
                    ))}
                </div>
            </div>

            {/* マップ説明 */}
            <div className={styles.mapex}>
                <div className={styles.exfloor}>
                    <div className={styles.exname}>階段</div>
                    <div className={styles.excolor1}></div>
                </div>
                <div className={styles.exfloor}>
                    <div className={styles.exname}>男子トイレ</div>
                    <div className={styles.excolor2}></div>
                </div>
                <div className={styles.exfloor}>
                    <div className={styles.exname}>女子トイレ</div>
                    <div className={styles.excolor3}></div>
                </div>
                <div className={styles.exfloor}>
                    <div className={styles.exname}>多目的トイレ</div>
                    <div className={styles.excolor4}></div>
                </div>
            </div>

            {/* マップ表示部分 */}
            <div className={styles.mapWrapper}>
                {/* mapContainer は各ブレークポイントで固定ピクセルサイズに設定 */}
                <div className={styles.mapContainer} ref={mapContainerRef}>
                    <div className={styles.innerContainer}>
                        {floors
                            .filter((floor) => floor <= activeFloor)
                            .map((floor) => (
                                <div
                                    key={floor}
                                    className={styles.floor}
                                    style={{
                                        transform: `scale(${1 - (activeFloor - floor) * 0.1})`,
                                        zIndex: floor,
                                        opacity: floor === activeFloor ? 1 : 0.1,
                                        transition: "transform 0.3s ease, opacity 0.3s ease",
                                        position: "absolute",
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    <Image
                                        src={`/maps/map-floor${floor}.svg`}
                                        alt={`${floor}階`}
                                        fill
                                        className={styles.mapImage}
                                    />
                                    {selectedItem && selectedItem.floor === floor && (
                                        <Pin
                                            item={selectedItem}
                                            isSelected={true}
                                            containerWidth={mapWidth}
                                            containerHeight={mapHeight}
                                        />
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
