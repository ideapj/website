import { useEffect, useRef } from "react";

type IProps = {
  onClick: () => void;
};

const useClickOutside = ({ onClick }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // Detect clicks outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return ref;
};

export default useClickOutside;
