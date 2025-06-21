// /app/map/page.tsx

import { Suspense } from "react";
import Three from "./Three";
import Footer from "@/components/footer/footer";

export default function ThreePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Three />
            <Footer></Footer>
        </Suspense>
    );
}
