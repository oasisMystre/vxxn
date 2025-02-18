import clsx from "clsx";

import { Link, useLocation } from "react-router-dom";
import { homeNavigations, type Navigation } from "../../config/navigations";
import { useMemo } from "react";

type NavigationProps = {
  className?: string;
};

export default function Navigation({ className }: NavigationProps) {
  return (
    <header className={clsx(className, "flex items-center justify-center")}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent blur-2xl" />
      {homeNavigations.map((navigation, index) => (
        <NavigationItem
          key={index}
          {...navigation}
        />
      ))}
    </header>
  );
}

const NavigationItem = function ({ link, icon }: Navigation) {
  const Icon = icon;
  const location = useLocation();
  const isActive = useMemo(() => link === location.pathname, [location, link]);
  return (
    <Link
      to={link}
      className={clsx(
        "px-4 py-2 z-100",
        isActive ? "text-white" : "text-white/60"
      )}
    >
      <Icon />
    </Link>
  );
};
