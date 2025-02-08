import { Camera, Home, Search, type LucideIcon } from "lucide-react";

export type Navigation = {
  icon: LucideIcon;
  link: string;
  hiddenOnMobile?: boolean;
};

export const homeNavigations: Navigation[] = [
  {
    icon: Home,
    link: "/",
  },
  {
    icon: Search,
    link: "#",
  },
  {
    icon: Camera,
    link: "#",
  },
];
