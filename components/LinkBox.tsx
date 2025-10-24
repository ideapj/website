import { cn } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type IProps = {
  text: string;
  url: string;
  icon?: ReactNode;
};

const LinkBox: React.FC<IProps> = ({ url, text, icon }) => {
  return (
    <Link
      href={url}
      className={cn(
        "w-full  max-w-2xl flex justify-between font-jersey",
        "bg-muted p-4 rounded-md box-border",
        " overflow-x-auto relative group items-center",
        "hover:bg-gray-light default-transition"
      )}
    >
      <div className="flex items-center gap-2">
        {icon && <div className="w-[30px] h-[30px] overflow-hidden flex-center">{icon}</div>}
        <h6 className="w-max b2-primary text-xl text-white/75 h-max">{text}</h6>
      </div>
      <ArrowRightIcon
        size={18}
        className={cn(
          "b1-primary translate-x-[-5px] text-primary",
          "default-transition group-hover:translate-x-0"
        )}
      />
    </Link>
  );
};

export default LinkBox;
