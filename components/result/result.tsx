import "./result.css"
import Image from "next/image"
import React from "react"

export default function Gresult() {
    return (
        <div className="result">
            <div className="result_back">
                <Image
                    className="result_topper"
                    src="/about/form.png"
                    alt=""
                    width={2000}
                    height={1000}
                    priority
                />
            </div>
            <div className="result_content">
                <h2>《概要》</h2>
                <p>各部門でのグランプリを決めます。</p>
                <p>生徒と来場者の皆さんに投票を行ってもらい、各部門で最も票を得た団体がグランプリ獲得です。</p>
                <h2>《結果発表》</h2>
                <div className="result_normal">
                    <h3>企画部門</h3>
                    <p>1位:</p>
                    <p>2位:</p>
                    <p>3位:</p>
                </div>
                <div className="result_food">
                    <h3>調理食販部門</h3>
                    <p>1位:</p>
                    <p>2位:</p>
                    <p>3位:</p>
                </div>
                <div className="result_stage">
                    <h3>ステージ部門</h3>
                    <p>1位:</p>
                    <p>2位:</p>
                    <p>3位:</p>
                </div>
            </div>

            <div className="result_back">
                <Image
                    className="form_topper"
                    src="/about/raijousha.png"
                    alt=""
                    width={2000}
                    height={1000}
                    priority
                />
            </div>
            <div className="anc">
                <p>翠翔祭に関するアンケートです。次年度以降のためにご回答をよろしくお願いします。</p>
                <p>回答期限：7/1（月）まで</p>
                <p>※在校生は回答しないでください</p>
                <a href="https://forms.gle/iUrw2htZqmvdJGj99" className="relative inline-block text-lg group mt-4">
                    <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-2 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">アンケートに回答</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
            </div>
        </div>
    )
}