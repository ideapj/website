import { ISectionTitle } from "@/types/common";
import { cn } from "@/utils";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosCheckmark, IoMdCopy } from "react-icons/io";

export type TitleProps = Omit<ISectionTitle, "id"> & {
  id?: string;
  beardcrumb?: {
    label: string;
    link: string;
  }[];
  variant?: "section" | "title";
};

type IProps = TitleProps;

const TitleComp: React.FC<IProps> = ({
  title,
  id,
  variant = "section",
  beardcrumb,
}) => {
  const [copied, setCopied] = useState(false);
  const Title = variant == "section" ? "h2" : "h1";
  const handleCopy = () => {
    const tag = variant == "section" ? `#${id}` : "";
    navigator.clipboard.writeText(`${window.location.href}${tag}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };
  return (
    <div className="flex-y gap-3 text-color">
      <div className="flex gap-2 w-max max-w-screen items-center">
        <Title
          className={cn(
            "font-jersey ",
            variant == "title" ? "text-6xl" : "text-4xl",
            "w-max scroll-mt-[100px]"
          )}
          id={id}
        >
          {title}
        </Title>
        <button
          type="button"
          className={cn(
            "text-xl cursor-pointer text-color-75",
            "w-[20px] h-[20px] relative"
          )}
          onClick={handleCopy}
        >
          <div className="absolute top-0 left-0 translate-y-[-5px]">
            {copied ? <IoIosCheckmark /> : <IoMdCopy />}
          </div>
        </button>
      </div>

      {beardcrumb && beardcrumb?.length > 0 && (
        <div className="flex-x gap-2 text-white/60 items-center">
          {beardcrumb.map((item, index) => (
            <React.Fragment key={index}>
              <Link href={item.link}>
                <h6 className="w-max underline underline-offset-2">
                  {item.label}
                </h6>
              </Link>
              <div className="w-[5px] h-full flex-center">
                <div className="w-[1.7px] h-[16px] bg-white/60 rotate-[17deg]"></div>
              </div>
              <h6 className="w-max">{title}</h6>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default TitleComp;
