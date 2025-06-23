"use client"

import "./about.css"
import Image from 'next/image';
import { useEffect, useRef } from 'react';
export default function About() {
    // 背景画像ラッパーに ref を貼る
    const leafRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!leafRef.current) return;
            const offset = window.scrollY * 0.3;
            leafRef.current.style.transform =
                `translate(-50%, calc(-65% + ${offset}px))`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div>
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
                    <h1 className="h-title">ABOUT</h1>
                </header>
            </div>
            <div className="about-pc-box">
                <div className="about-main">

                    <div className="background-about-img" ref={leafRef}>

                    </div>

                    <div className="about-suiran">
                        <h1>《翠翔祭について》</h1>
                        <p>翠翔祭とは毎年6月末に行われる神奈川県立横浜翠嵐高校の文化祭です。
                            コロナの年度は一般公開できなかったものの、去年から一般公開を再開し、約1万人の方々に来場いただきました。
                            来場お待ちしております。</p>
                    </div>
                    <div className="about-theme">
                        <h1>《テーマ：Neoについて》</h1>
                        <p>Neoはギリシャ語で「新しい」「復活の」などの意味を持つ言葉です。
                            コロナ以前からの伝統を受けつつ、時代に合わせて変化させて新しい翠翔祭を作ろうという思いが込められています。</p>
                    </div>
                    <div className="about-top-member">
                        <h1>《翠翔祭実行委員会紹介》</h1>
                        <h3>2025年度全日制翠翔祭実行委員長</h3>
                        <h3>池田晴彦</h3>
                        <p>皆さんこんにちは！2025年度、翠翔祭実行委員長の池田晴彦です。
                            今年の文化祭は「Neo」を掲げ、生徒一人ひとりが全力で準備に取り組んできました。
                            ご来場いただく皆さまに、私たちの熱意と笑顔が伝わるような素晴らしい文化祭になることを願っています。
                            勉強だけでない翠嵐高校を最後までお楽しみください！</p>
                        <h3>2025年度定時制翠翔祭実行委員長</h3>
                        <h3>夏見希海</h3>
                        <p>2025年度も無事文化祭を迎えることができたこと、とても嬉しく思います。
                            今年度の翠翔祭テーマである『Neo』には翠嵐生の未来や希望も詰まっていると私は思います。
                            昨年度とはまたひと味違う翠翔祭を是非皆さん楽しんでください！
                        </p>
                        <h2>〈総務部紹介〉</h2>
                        <p>翠翔祭の運営の中心となる総務部のメンバーを紹介します。</p>
                        <h3>-実行委員長-</h3>
                        <p>池田晴彦</p>
                        <h3>-副委員長兼会計長-</h3>
                        <p>山口理緒</p>
                        <h3>-会場長-</h3>
                        <p>深堀絢心</p>
                        <h3>-調理食販部統括責任者-</h3>
                        <p>東城英寿</p>
                        <h3>-プログラム部統括責任者-</h3>
                        <p>水谷駿佑</p>
                        <h3>-アーチ・広報部統括責任者-</h3>
                        <p>浅井心遙</p>
                        <h3>-SP部統括責任者-</h3>
                        <p>𠮷岡太郎</p>
                        <h3>-後夜祭・ステージ部統括責任者-</h3>
                        <p>富永恵未</p>
                    </div>
                    <div className="about-site">
                        <h2>〈サイト開発担当〉</h2>
                        <p>ホームページの作成に携わった主なメンバーを紹介します。</p>
                        <h3>-サイト監修-</h3>
                        <p>水谷駿佑</p>
                        <h3>-システム・設計-</h3>
                        <p>長谷川稜介</p>
                        <h3>-ロゴ制作-</h3>
                        <p>菊池真帆</p>

                        <p>協力してくださった皆さん、ありがとうございました</p>
                    </div>
                    <div className="member-picture">
                        <Image
                            src="/member.jpg"
                            alt="総務ず"
                            width={3000}
                            height={1000}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
