import { cn } from "@/utils";

type IProps = {
  className?: string;
};
export default function ConnectorX({ className }: IProps) {
  return (
    <div className={cn("relative h-[2px]", "col-span-2 my-auto", className)}>
      <div className="absolute inset-0 h-[2px] dotted-connection animate-dotted"></div>
    </div>
  );
}
