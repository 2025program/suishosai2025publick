import "./form.css"
import Image from 'next/image';

export default function Form() {

    return (
        <>
            <div className="form">
                <div className="form_back">
                    <Image
                        className="form_topper"
                        src="/about/form.png"
                        alt=""
                        width={2000}
                        height={1000}
                        priority
                    />
                </div>
                <div className="form_content">
                    <div className="formabout">
                        <h2>《概要》</h2>
                        <p>各部門でのグランプリを決めます。</p>
                        <p>生徒と来場者の皆さんに投票を行ってもらい、各部門で最も票を得た団体がグランプリ獲得です。</p>
                        <h3 className="bumon">〈部門紹介〉</h3>
                        <div className="bumonbox">
                            <div className="bumonsboxl">
                                <h4 className="bumons">企画部門</h4>
                                <a href="https://docs.google.com/forms/d/1Vq-yNeBQz2Zk48sxJPOndMgG4LbK6rU-FZ6e3sV8Izo/edit?usp=drivesdk" className="relative inline-block text-lg group">
                                    <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                        <span className="absolute inset-0 w-full h-full px-5 py-2 rounded-lg bg-gray-50"></span>
                                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                        <span className="relative">投票</span>
                                    </span>
                                    <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                </a>
                            </div>
                            <div className="bumonsbox">
                                <h4 className="bumons">調理食販部門</h4>
                                <a href="https://docs.google.com/forms/d/1KXE1577SNQ5Bpc9YA87fDQfD28HfViVTo0uArde2VGk/edit?usp=drivesdk" className="relative inline-block text-lg group">
                                    <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                        <span className="absolute inset-0 w-full h-full px-5 py-2 rounded-lg bg-gray-50"></span>
                                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                        <span className="relative">投票</span>
                                    </span>
                                    <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                </a>
                            </div>
                            <div className="bumonsboxr">
                                <h4 className="bumons">ステージ部門</h4>
                                <a href="https://docs.google.com/forms/d/1scpgu1SGEyP_c6XRBVb_u_5e_IZ1V1DWPFbt1OsJO1I/edit?usp=drivesdk" className="relative inline-block text-lg group">
                                    <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                        <span className="absolute inset-0 w-full h-full px-5 py-2 rounded-lg bg-gray-50"></span>
                                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                        <span className="relative">投票</span>
                                    </span>
                                    <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="formhow">
                        <h2>《投票方法》</h2>
                        <p>上記の投票フォームから投票お願いします。</p>
                        <p>校内にあるパンフレットからも投票可能です。</p>
                        <p>1人1回、各部門1団体投票してください。ただし、自分が所属する団体には投票できません。</p>
                    </div>

                    <div className="form_back">
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
            </div>
        </>
    );
}
