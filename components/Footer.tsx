import { cn } from "@/utils";
import Link from "next/link";

const FooterComp: React.FC = () => {
  return (
    <div
      className={cn(
        "w-screen min-h-[30vh] flex-center",
        "border-t-[1px] border-t-white/10",
      )}
    >
      <footer className={cn("grid grid-cols-2", "w-screen px-[75px]")}>
        <div className="flex flex-col gap-2 text-color">
          <h5 className="h2-primary ">About Us</h5>
          <p className="b1">
            IdeaPJ is an MIT-licensed open source project <br/> maintained by  Ye Thiha.
          </p>
          <p className="s1 mt-5">
            &copy; {(new Date).getFullYear()} copyright MIT by Idea PJ
          </p>
        </div>
        <div className="flex flex-col gap-2 s1 text-color-75">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </footer>
    </div>
  );
};

export default FooterComp;
