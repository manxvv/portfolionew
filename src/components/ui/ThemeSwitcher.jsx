"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex z-50 items-center space-x-4">
      <p>Current Theme: {theme}</p>
      <button
        onClick={() => setTheme("light")}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        Dark
      </button>
      <button
        onClick={() => setTheme("system")}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        System
      </button>
    </div>
  );
}