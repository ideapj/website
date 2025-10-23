import SEOHeaders from "@/components/SEOHeaders";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { cn } from "@/utils";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SEOHeaders />
      <div className="w-screen h-screen flex justify-center items-center relative">
        <div className="absolute top-5 right-5">
          <ThemeSwitcher/>
        </div>
        <div className="flex gap-16 items-center">
          <div className={cn(
            "w-[200px] aspect-square relative",
            "bg-gradient-to-br from-primary backdrop-blur-lg",
            "to-[#F7632D] shadow-lg flex-center overflow-hidden",
            "rounded-lg"
          )}>
            <h3 className="font-jersey text-[10rem] text-white text-shadow-lg">PJ</h3>
          </div>
          <div className="max-w-[200px] flex flex-col gap-5 text">
            <p>
              Build production ready app that follows the <br />{" "}
              <span className="text-primary font-bold">
                industry standards
              </span>{" "}
              .
            </p>
            <div className={cn(
              "relative w-[120px] h-[35px] flex-center group",
              "bg-white rounded-full"
            )}>
              <Link
                className={cn(
                  "text-sm w-max text-center bg-black",
                  "border border-white rounded-full text-white",
                  "w-full h-full flex-center default-transition",
                  "group-hover:translate-x-[-1px] group-hover:translate-y-[-1px]"
                )}
                href="/docs"
              >
                View Docs
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
