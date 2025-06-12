// /app/map/page.tsx
import { DevOnly } from "@/components/DevOnly";

import { Suspense } from "react";
import Three from "./Three";

export default function ThreePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DevOnly>
                <Three />
            </DevOnly>
        </Suspense>
    );
}
