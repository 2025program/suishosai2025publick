import "./topselect.css"
import Image from 'next/image';

export default function TopSelect() {
    return (
        <>
            <div className="topsearch">
                <div className="topsearch_event">
                    <a href="/event" className="_search_top">
                        <span className="search_button__inner">
                            <span className="btn-slide-t">
                                <span className="index-wrapper">
                                    <span className="index index3">time</span>
                                    <span className="index index2">map</span>
                                    <span className="index index1">event</span>
                                </span>

                                <div className="btn-backer-blue"></div>
                            </span>
                            <span className="top_search_text">イベント検索</span>
                            <Image
                                className="top__icon"
                                src="/topsearch/search.svg"
                                alt=""
                                width={1000}
                                height={1000}
                                priority
                            />
                        </span>
                        <span className="search_effect" data-rounded="rounded-lg"></span>
                    </a>
                </div>

                <div className="bottom_search">
                    <div className="bottom_grid">
                        <a href="/map" className="_search">
                            <span className="search_button__inner">
                                <span className="btn-slide">
                                    <span className="index-wrapper">
                                        <span className="index index3">time</span>
                                        <span className="index index1">event</span>
                                        <span className="index index2">map</span>
                                    </span>
                                    <div className="btn-backer-yellow"></div>
                                </span>
                                <span className="top_search_text_b">校内マップ</span>
                                <Image
                                    className="top__icon"
                                    src="/topsearch/map.svg"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    priority
                                />
                            </span>
                            <span className="search_effect" data-rounded="rounded-lg"></span>
                        </a>
                        <a href="/timetable" className="_search">
                            <span className="search_button__inner">
                                <span className="btn-slide">
                                    <span className="index-wrapper">
                                        <span className="index index1">event</span>
                                        <span className="index index2">map</span>
                                        <span className="index index3">time</span>
                                    </span>

                                    <div className="btn-backer-red"></div>
                                </span>
                                <span className="top_search_text_b">タイムテーブル</span>
                                <Image
                                    className="top__icon"
                                    src="/topsearch/calendar.svg"
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    priority
                                />
                            </span>
                            <span className="search_effect" data-rounded="rounded-lg"></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}