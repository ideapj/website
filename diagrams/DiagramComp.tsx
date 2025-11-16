import { useApp } from "@/components/AppRoot";
import ImageComp from "@/components/ImageComp";
import useClickOutside from "@/hooks/useClickOutside";
import { cn } from "@/utils";
import { MousePointerClick } from "lucide-react";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type IProps = {
  scopeIcon?: string;
  label?: string;
  children: ReactNode | ReactNode[];
};

type Point = { x: number; y: number };

const MIN_SCALE = 0.5;
const MAX_SCALE = 2.5;
const ZOOM_FACTOR = 0.0015;

export default function DiagramComp({ scopeIcon, label, children }: IProps) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const draggingFrom = useRef<Point | null>(null);
  const [focus, setFocus] = useState(false);
  const { mounted } = useApp();

  const { setScrollLocked } = useApp();

  // Click-outside to blur focus
  const ref = useClickOutside({
    onClick: () => setFocus(false),
  });

  // When focus changes, lock/unlock Lenis scroll
  useEffect(() => {
    setScrollLocked(focus);
  }, [focus, setScrollLocked]);

  const clampScale = (value: number) =>
    Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!focus) return; // don't touch global scroll if not focused

    e.preventDefault();
    const delta = -e.deltaY * ZOOM_FACTOR;
    setScale((prev) => clampScale(prev + delta));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!focus) return; // only pan in focus
    e.preventDefault();
    draggingFrom.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!draggingFrom.current || !focus) return;

    const dx = e.clientX - draggingFrom.current.x;
    const dy = e.clientY - draggingFrom.current.y;

    draggingFrom.current = { x: e.clientX, y: e.clientY };
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
  };

  const stopDragging = () => {
    draggingFrom.current = null;
  };

  const handleDoubleClick = () => {
    if (!focus) return;
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <>
      <div className="w-full h-max p-5 relative overflow-hidden">
        {scopeIcon && (
          <div className="absolute w-[50px] inset-0 z-[2] pointer-events-none">
            <div className="w-full aspect-square relative rounded-lg overflow-hidden">
              <ImageComp src={scopeIcon} alt="amplify" />
            </div>
          </div>
        )}

        <div
          ref={ref}
          className={cn(
            "flex w-full min-h-[300px] border",
            "h-max rounded-lg relative overflow-hidden",
            "grid-bg",
            focus
              ? "border-(--color-foreground) drop-shadow"
              : "border-(--color-foreground)/30"
          )}
          onClick={() => setFocus(true)}
        >
          {label && (
            <div
              className={cn(
                "absolute min-w-[100px]",
                "w-max h-max text-white",
                "px-5 py-2 text-xs select-none",
                "bg-muted bottom-0 right-0 z-[2]"
              )}
            >
              {label}
            </div>
          )}

          {/* Pan & zoom viewport */}
          <div
            className={cn("relative w-full h-full", "cursor-grab select-none")}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onDoubleClick={handleDoubleClick}
          >
            <div
              className={cn("absolute inset-0 grid grid-cols-12", "p-10")}
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                transformOrigin: "center center",
                transition: draggingFrom.current
                  ? "none"
                  : "transform 0.05s linear",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
      {mounted &&
        createPortal(
          <div
            className={cn(
              "fixed-screen flex justify-end items-end z-[200]",
              "pointer-events-none"
            )}
          >
            <div
              className={cn(
                "w-60 h-60 bg-primary",
                "text-(--foreground) font-bold p-6",
                "clip-right-triangle",
                "flex justify-end items-end",
                "default-transition",
                focus ? "translate-0 scale-[1]" : "translate-60 scale-0"
              )}
            >
              <div className="flex-y w-max items-center gap-3 pb-2 pl-3">
                <MousePointerClick
                  size={35}
                  className="fill-(--color-foreground) stroke-(--color-background)"
                />
                <h6 className="text-xs">Click Out Side to Scroll</h6>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
