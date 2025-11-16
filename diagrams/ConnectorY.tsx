import { cn } from "@/utils";

type IProps = {
  className?: string;
};
export default function ConnectorY({className}: IProps) {
  return (
    <div className={cn(
        "h-[50px]",
        className
    )}>
      <div className="relative w-[2px] h-full mx-auto">
        <div className="absolute inset-0 dotted-connection-vertical animate-dotted-vertical"></div>
      </div>
    </div>
  );
}
