import { cn } from "@/utils";
import Link from "next/link";


const pages = [
  {
    label: "Introduction",
    url: "/docs"
  },
  {
    label: "Getting Started",
    url: "/docs/getting-started"
  },
  {
    label: "Git",
    url: "/docs/git"
  },
]


type IPageLink = {
  label: string;
  url: string;
}


const SideNavItem:React.FC<IPageLink> = ({ label, url }) => {
  return (
    <li className="w-full 0">
      <Link href={url} className={cn(
        "flex items-center gap-[13px] group",
        "text-color-75",
        "default-transition",
    )}>
        <span className={cn(
            "s1-primary default-transition",
            "group-hover:translate-x-[5px]"
        )}>{">"}</span>
        <span className={cn(
            "s1-m translate-y-[1px]",
        )}>{label}</span>
      </Link>
    </li>
  );
}

const SideNav: React.FC = () => {
  return (
    <aside className={cn("w-[200px] min-h-screen h-max ")}>
      <ul className="flex flex-col gap-[20px] mt-[75px] fixed ">
        {
          pages.map(item => (
            <SideNavItem {...item} key={item.url} />
          ))
        }
        
      </ul>
    </aside>
  );
};

export default SideNav;
