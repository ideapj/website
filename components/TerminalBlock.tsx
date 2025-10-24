import { cn } from "@/utils";
import React, { ReactNode, useState } from "react";
import { IoIosCheckmark, IoMdCopy } from "react-icons/io";

type ICMD = {
  copy: string;
  code: ReactNode | ReactNode[];
  comment?: string;
};

type IProps = {
  cmd: ICMD | ICMD[];
};

const Prompt: React.FC<ICMD> = ({ code, copy, comment }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = (copy: string) => {
    navigator.clipboard.writeText(copy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };
  return (
    <pre className="px-4 py-2 rounded-md b1 overflow-x-auto relative">
      {comment && (
        <>
          <div className="s1 text-gray-500 mb-3">
            {"//"}&nbsp;{comment}
          </div>
          
        </>
      )}
      <code>{code}</code>
      <button
        type="button"
        className="absolute right-4 text-xl cursor-pointer"
        onClick={() => handleCopy(copy)}
      >
        {copied ? <IoIosCheckmark /> : <IoMdCopy />}
      </button>
    </pre>
  );
};

const TerminalBlock: React.FC<IProps> = ({ cmd }) => {
  return (
    <div
      className={cn(
        "bg-muted text-white p-4 rounded-lg",
        "w-full max-w-2xl relative",
      )}
    >
      <div className={cn(
        "flex items-center gap-2 mb-2",
        "border-b border-b-gray-500",
        "pb-5"
      )}>
        <span className="text-gray-400">{">"}</span>
        <span className="text-gray-300 font-jersey text-xl">Terminal</span>
      </div>
      <div className="flex flex-col gap-5 text-sm">
        {Array.isArray(cmd) ? (
          <>
            {cmd.map((item, index) => (
              <Prompt {...item} key={index} />
            ))}
          </>
        ) : (
          <Prompt {...cmd} />
        )}
      </div>
    </div>
  );
};

export default TerminalBlock;
