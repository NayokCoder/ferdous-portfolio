"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GiStripedSun } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-6 h-6" />;
  }

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className=" border border-border hover:bg-accent hover:text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg" aria-label="Toggle theme">
      {theme === "light" ? <FaMoon className="w-5 h-5 text-foreground" /> : <GiStripedSun className="w-5 h-5 text-foreground" />}
    </button>
  );
}
