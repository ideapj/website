// not the LinkList in DSA, this comp is for bullet list for links

import { cn } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type IProp = {
  list: {
    id: string | number;
    url: string;
    name: string;
  }[];
};

const LinkList: React.FC<IProp> = ({ list }) => {
  return (
    <ul className="flex flex-col gap-3 mt-5">
      {list.map((item) => (
        <li key={item.id}>
          <Link
            className={cn(
              "flex gap-2 text-secondary",
              "group items-center text-sm"
            )}
            href={item.url}
            target="_blank"
          >
            <ArrowRightIcon
              size={18}
              className={cn(
                "translate-x-[-5px] text-primary",
                "default-transition group-hover:translate-x-0"
              )}
            />
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
