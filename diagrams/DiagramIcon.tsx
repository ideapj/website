import ImageComp from "@/components/ImageComp";
import useClickOutside from "@/hooks/useClickOutside";
import { cn } from "@/utils";
import { useState } from "react";

type IProps = {
  src: string;
  alt?: string;
};
export default function DiagramIcon({ src, alt }: IProps) {
  const [selected, setSelected] = useState(false);
  const ref = useClickOutside({
    onClick: () => setSelected(false),
  });
  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className={cn(
          "w-full aspect-square relative",
          "overflow-hidden group cursor-pointer",
          "z-[2]",
          selected && "bg-(--color-foreground) rounded-lg"
        )}
        onClick={() => setSelected(true)}
      >
        <ImageComp
          className="scale-[0.9] group-hover:scale-[1] rounded-lg"
          src={src}
          alt={alt}
        />
      </button>
    </div>
  );
}
