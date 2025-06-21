// /app/map/page.tsx

import { Suspense } from "react";
import Three from "./Three";

export default function ThreePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Three />
        </Suspense>
    );
}
