import { cn } from "@/utils";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardCommandKey } from "react-icons/md";
import { useApp } from "./AppRoot";
import { createPortal } from "react-dom";
import Link from "next/link";
import { searchData } from "@/data/search.data";
import { CgFileDocument } from "react-icons/cg";

interface ISearchModalProps {
  showSearch: boolean;
  setShowSearch: (val: boolean) => void;
}

const SearchModal: React.FC<ISearchModalProps> = ({
  showSearch,
  setShowSearch,
}) => {
  const { mounted } = useApp();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(searchData);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setShowSearch(false);
      }
    };

    if (showSearch) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setShowSearch, showSearch]);

  // Filter logic
  useEffect(() => {
    if (!query.trim()) {
      setFiltered(searchData);
    } else {
      const lower = query.toLowerCase();
      const result = searchData.filter((item) =>
        item.label.toLowerCase().includes(lower)
      );
      setFiltered(result);
    }
  }, [query]);

  useEffect(() => {
    if (showSearch) {
        inputRef.current?.focus();
    }
  }, [showSearch]);

  return (
    <>
      {mounted &&
        createPortal(
          <div
            className={cn(
              "fixed-screen flex justify-center z-50",
              showSearch
                ? "bg-white/10 pointer-events-auto"
                : "bg-black/0 pointer-events-none"
            )}
            onClick={() => setShowSearch(false)}
          >
            <div
              className={cn(
                "w-[500px] min-h-[60px] bg-[#222]",
                "rounded text-white/75 border-5 border-muted",
                "default-transition h-max translate-y-[20vh] shadow-lg",
                showSearch ? "scale-[1] opacity-100" : "scale-[0.5] opacity-0"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center pr-5 box-border">
                <input
                  ref={inputRef}
                  className={cn(
                    "p-5 w-[90%] outline-none placeholder:text-[#FF5C00]/50",
                    "text-white/75"
                  )}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="What are you searching for?"
                />
                <button
                  type="button"
                  className={cn(
                    "text-xs bg-[#FF5C00] text-black",
                    "w-[10%] h-[1.5rem] flex-center rounded",
                    "cursor-pointer font-bold"
                  )}
                  onClick={() => setShowSearch(false)}
                >
                  ESC
                </button>
              </div>
              <div className="w-full h-[0.5px] bg-white/50"></div>
              <ul className={cn(
                "flex-y w-full gap-0 p-3 s1-b text-white/70",
                "cursor-pointer"
              )}>
                {!query && (
                  <p
                    className={cn(
                      "w-full py-2 px-2",
                      "rounded cursor-pointer text-white/50",
                      "animate-pulse"
                    )}
                  >
                    Wating to be search ...
                  </p>
                )}
                {query?.length > 0 &&
                  filtered.map((item) => (
                    <li
                      className={cn(
                        "w-full py-2 px-2 hover:bg-[#FF5C00]/50",
                        "rounded cursor-pointer text-white/50",
                        "default-transition hover:text-gray-300"
                      )}
                      key={item.id}
                      onClick={() => setShowSearch(false)}
                    >
                      <Link className="flex gap-2 items-center" href={item.url}>
                        <CgFileDocument />
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

const PageSearch: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setShowSearch(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <>
      <button
        type="button"
        className={cn(
          "flex justify-between items-center",
          "w-[200px] h-[45px] px-5 rounded",
          "s1 cursor-pointer",
          "bg-[#212121] text-white",
          "default-transition group",
          "hover:outline-none hover:ring-1 hover:ring-[#FF5C00]/50"
        )}
        onClick={() => setShowSearch((pre) => !pre)}
      >
        Search
        <div
          className={cn(
            "flex px-3 py-[0.2rem] items-center",
            "group-hover:bg-primary default-transition",
            "text-sm gap-1 bg-[#111] text-gray-300"
          )}
        >
          <MdKeyboardCommandKey />K
        </div>
      </button>
      <SearchModal showSearch={showSearch} setShowSearch={setShowSearch} />
    </>
  );
};

export default PageSearch;
