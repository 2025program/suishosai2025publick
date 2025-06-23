"use client"

import React from "react";
import "./attention.css"
import Image from 'next/image';

export default function attention() {
    return (
        <div>
            {/**ヘッダー */}
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
                    <h1 className="h-title">ATTENTION</h1>
                </header>
            </div>
            <div className="at-pc-box">
                <div className="at_main">
                    <div className="yoyaku">
                        <h1 className="pt">《予約について》</h1>
                        <p>来場される人数を事前に把握して準備を進めるため、また生徒の安全面を考慮しまして、保護者の皆さまを含むすべての方に事前予約をしていただきますので、よろしくお願い申し上げます。</p>
                        <p>予約方法：本校ホームページより神奈川県の電子申請システムe-kanagawaを用いて事前予約をしていただきます。詳細は本校ホームページにてご確認ください。</p>
                    </div>
                    <div className="payment">
                        <h1>《注意事項》</h1>
                        <h2 className="pt">〈お支払いについて〉</h2>
                        <p> 模擬店等での販売は電子決済で行います。使用可能な電子マネーブランドは下の添付画像をご覧ください。掲載されているブランド以外での支払いはできません。
                            対応したカードまたはスマートフォンなどの端末をご持参ください。なお校内で現金をチャージ（入金）することができません。
                            また、本校近隣にはコンビニ・ＡＴＭがありません。充分にチャージしてからご来場ください。※食堂は現金にて販売いたします。
                        </p>
                        {/**電子マネーの画像を置く */}
                        <Image className="el-money"
                            src="/cash.png"
                            alt="対応電子マネー一覧"
                            width={3000}
                            height={1000}
                        />
                        <h2 className="pt">〈諸注意〉</h2>
                        <p>1 本校は一足制ですので、上履きのご用意は必要ありません。ただし革靴、ハイヒールではグラウンドに入れませんのでご注意ください。</p>
                        <p>2 校内は全面禁煙です。</p>
                        <p>3 自家用車でのご来校はご遠慮ください。校内及び周辺の道路は全面駐車禁止です。昨年度は三ツ沢公園の駐車場利用について管理事務所より注意の電話がありました。公共交通機関を利用しての来場にご協力お願い申し上げます。また、混雑が予想されるため、バス停「三ッ沢総合グランド入口」も併せてご利用ください。</p>

                    </div>
                    <div className="guide">
                        <h1>《お困りの時は》</h1>
                        <p>2棟1階生徒会室までお越しいただくか、巡回中の翠翔祭総務部またはSP部に声をかけてください。</p>
                        {/**総務Tと法被の画像を置く */}
                        <div className="clothes">
                            <div>
                                <p>総務T</p>
                                <Image
                                    src="/attention/soumu_t.jpg"
                                    alt="総務の人が来ている服"
                                    width={3000}
                                    height={1000}
                                />
                            </div>
                            <div>
                                <p>SPはっぴ</p>
                                <Image
                                    src="/attention/sp_t.jpg"
                                    alt="巡回中のSPが羽織ってる服"
                                    width={3000}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
