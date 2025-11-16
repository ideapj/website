import { cn } from "@/utils";
import Link from "next/link";
import PageSearch from "./PageSearch";
import { useRouter } from "next/router";
import ThemeSwitcher from "./ThemeSwitcher";
import GithubIcon from "@/icons/GithubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";

type IMenuItem = {
  id: string;
  label: string;
  url: string;
};

const menus: IMenuItem[] = [
  {
    id: "docs",
    url: "/docs",
    label: "Docs",
  },
  {
    id: "recipe",
    url: "/recipe",
    label: "Recipe",
  },
  // {
  //   id: "guide",
  //   url: "/guide",
  //   label: "Guide",
  // },
  // {
  //   id: "blogs",
  //   url: "/blogs",
  //   label: "Blogs",
  // },
];

const MenuItem: React.FC<IMenuItem> = ({ id, url, label }) => {
  const path = useRouter().pathname;
  const isActive = (() => {
    const arr = path.split("/");
    return arr.includes(id);
  })();

  return (
    <li
      className={cn(
        "flex flex-col default-transition",
        "h-[30px] justify-between",
        isActive ? "text-color font-bold" : "text-color-75"
      )}
    >
      <Link href={url}>{label}</Link>
      {isActive && (
        <div className="w-full h-[2px] bg-primary rounded-full"></div>
      )}
    </li>
  );
};

const HeaderComp: React.FC = () => {
  return (
    <>
      <header
        className={cn(
          "w-screen h-[75px] fixed top-0 bg-(--color-background)",
          "px-[65px] grid grid-cols-3 items-center",
          "border-b border-b-white/10 z-30"
        )}
      >
        <Link className="grid-cols-1" href="/">
          <h1 className={cn(
            "text-color opacity-100",
            "font-bold default-transition",
            "text-4xl font-jersey",
            "hover:opacity-80",
            "text-shadow"
          )}>
            Idea P<span className="text-primary">J</span>
          </h1>
        </Link>
        <ul
          className={cn(
            "b1-b flex-center gap-[25px]",
            "-translate-x-[10px] text-color-75"
          )}
        >
          {menus.map((item) => (
            <MenuItem {...item} key={item.id} />
          ))}
        </ul>
        <div className="w-full flex justify-end items-center gap-2">
          <ThemeSwitcher />
          <div className="flex-x px-2 items-center gap-2 ">
            <GithubIcon size={25} />
            <LinkedInIcon size={30} className="translate-y-0"/>
          </div>
          <PageSearch />
        </div>
      </header>
      <div className="w-screen h-[75px]"></div>
    </>
  );
};

export default HeaderComp;
