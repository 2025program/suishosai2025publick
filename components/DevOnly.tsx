// components/DevOnly.tsx
"use client";
import React, { useEffect, useState, ReactNode } from "react";
import Nowedit from "@/components/nowedit/nowedit";

interface DevOnlyProps {
    children: ReactNode;
}

export function DevOnly({ children }: DevOnlyProps) {
    const [isDeveloper, setIsDeveloper] = useState(false);

    useEffect(() => {
        async function fetchDeveloper() {
            const res = await fetch("/api/dev-mode");
            if (res.ok) {
                const data = await res.json();
                setIsDeveloper(data.isDevMode);
            } else {
                setIsDeveloper(false);
            }
        }
        fetchDeveloper();
    }, []);

    if (!isDeveloper) {
        return <Nowedit />;
    }

    return <>{children}</>;
}
