// utils/categoryMapping.ts

import { Drum, Sun, Moon, Soup, LucideIcon } from "lucide-react";

export type Category = "野外ステージ" | "全日制クラス" | "定時制クラス" | "食品販売";

export const categoryIconMap: Record<string, LucideIcon> = {
    "野外ステージ": Drum,      // 野外ステージ
    "全日制クラス": Sun,     // 全日制クラス
    "定時制クラス": Moon,    // 定時制クラス
    "食品販売": Soup,         // 食品販売
};
