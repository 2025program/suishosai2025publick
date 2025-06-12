// AnimatedHamburger.tsx
import React from "react"
import { cn } from "@/lib/utils"
import "./humberger.css"

interface AnimatedHamburgerProps {
    isOpen: boolean
    className?: string
}

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({ isOpen, className }) => {
    return (
        <div className={cn("hamburger", className)}>
            <span />
            <span />
            <span />
        </div>
    )
}
