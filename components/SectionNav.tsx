import { ISectionTitle } from "@/types/common";
import { cn } from "@/utils";
import { useLenis } from "lenis/react";

import { useEffect, useState } from "react";

type IProps = {
  menus: ISectionTitle[]
}

const SectionNav: React.FC<IProps> = ({menus}) => {
  const [active, setActive] = useState<string>("installation");

  const lenis = useLenis();
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el && lenis) {
      lenis.scrollTo(el, { offset: -100 });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      let closestSection = "";
      let minOffset = Number.POSITIVE_INFINITY;
      for (const id of (menus.map(item => item.id))) {
        const el = document.getElementById(id);
        
        console.log({el, id})
        if (el) {
          const branches = document.getElementById("working-on-feature");
          console.log({branches})
          const rect = el.getBoundingClientRect();
          const offset = Math.abs(rect.top); // Distance from top of viewport
          if (offset < minOffset) {
            minOffset = offset;
            closestSection = id; // Keep the one closest to top
          }
        }
      }
      console.log({closestSection})
      setActive(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // call on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menus]);
  const navItem = (id: string, label: string) => (
    <button
      type="button"
      onClick={() => handleScrollTo(id)}
      key={id}
      className={cn(
        "s1 text-color-75 default-transition section-nav-item",
        "text-left cursor-pointer",
        active == id ? "text-color font-bold" : ""
      )}
    >
      {label}
    </button>
  );
  return (
    <aside className={cn("w-[300px] min-h-screen h-max relative")}>
      <div className="flex flex-col mt-[75px] fixed ">
        <h1 className="b1-b text-color-75">On this page</h1>
        <nav className="relative flex flex-col gap-4 mt-5">
          {
            menus.map(item => navItem(item.id, item.title))
          }
        </nav>
      </div>
    </aside>
  );
};

export default SectionNav;
