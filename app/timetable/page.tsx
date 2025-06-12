import { DevOnly } from "@/components/DevOnly";
import Image from "next/image";
import "./timetable.css";

export default function Timetable() {

    return (
        <DevOnly>
            <div className="timetable">
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
                        <h1 className="h-title">TIMETABLE</h1>
                    </header>
                </div>
            </div>
        </DevOnly>
    );
}
