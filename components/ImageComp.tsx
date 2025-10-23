import { cn } from "@/utils";
import Image from "next/image";

type IProps = {
  src: string;
  className?: string;
  alt?: string;
  draggable?: boolean;
};

const ImageComp: React.FC<IProps> = ({ src, className, alt = "image", draggable = false}) => {
  return (
    <Image
      src={src}
      className={cn(
        "select-none pointer-events-none",
        className
      )}
      alt={alt}
      fill
      style={{ objectFit: "cover", userSelect: "none" }}
      priority
      draggable={draggable}
    />
  );
};

export default ImageComp;
