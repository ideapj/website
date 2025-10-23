import { cn } from "@/utils";
import { MoonStar, SunDim } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode((pre) => !pre);
  };

  useEffect(() => {
    const lightRadio =
      (document.querySelector(
        'input[type="radio"][name="theme"][id="light"]'
      ) as HTMLInputElement) || null;
    const darkRadio =
      (document.querySelector(
        'input[type="radio"][name="theme"][id="dark"]'
      ) as HTMLInputElement) || null;

    if (typeof lightRadio == "object" && typeof darkRadio == "object") {
      lightRadio.checked = !isDarkMode;
      darkRadio.checked = isDarkMode;
      if (isDarkMode) {
        localStorage.setItem("user-theme", "dark");
      } else {
        localStorage.setItem("user-theme", "light");
      }
    }
  }, [isDarkMode]);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const systemTheme = prefersDark ? "dark" : "light";
    const userTheme = localStorage.getItem("user-theme");

    if (userTheme) {
      const value = JSON.stringify(userTheme);
      setIsDarkMode(value == "dark");
    } else {
      if (systemTheme) {
        setIsDarkMode(systemTheme == "dark");
      }
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggleMode}
      className={cn(
        "rounded-full w-max h-max",
        "border border-(--color-foreground)",
        "flex relative items-center",
        "gap-[2px] cursor-pointer px-[5px] py-[2px]"
      )}
    >
      <div className="w-[20px] h-[20px] flex-center overflow-hidden box-border">
        <SunDim size={25} />
      </div>
      <div className="w-[20px] h-[20px] flex-center overflow-hidden box-border">
        <MoonStar className="translate-x-0" size={13} />
      </div>
      <div
        className={cn(
          "w-[24px] h-[24px] rounded-full",
          "absolute z-[2] inset-0 bg-primary shadow",
          "border border-(--color-background)",
          "default-transition",
          isDarkMode ? "transalte-x-0" : "translate-x-[calc(100%+4px)]"
        )}
      ></div>
    </button>
  );
}
