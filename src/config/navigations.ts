import type { LucideIcon } from "lucide-react";

export type Navigation = {
  icon: LucideIcon;
  link: string;
  hiddenOnMobile?: boolean;
};


export const homeNavigations = {}