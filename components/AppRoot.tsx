// AppRoot.tsx
import FontRoot from "@/FontRoot";
import ReactLenis, { LenisRef } from "lenis/react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
// import type Lenis from "lenis"; // optional, otherwise use `any`

type AppRootProps = {
  children: ReactNode | ReactNode[];
};

type IContextProps = {
  mounted: boolean;
  scrollLocked: boolean;
  setScrollLocked: (locked: boolean) => void;
};

const AppContext = createContext<IContextProps | undefined>(undefined);

const AppRoot: React.FC<AppRootProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock/unlock Lenis scroll
  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    console.log({lenis})
    if (!lenis) return;
    if (scrollLocked) lenis.stop();
    else lenis.start();
  }, [scrollLocked]);

  // Fallback: lock native scroll as well
  useEffect(() => {
    if (!mounted) return;
    if (scrollLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [scrollLocked, mounted]);

  return (
    <ReactLenis root ref={lenisRef}>
      <AppContext.Provider
        value={{
          mounted,
          scrollLocked,
          setScrollLocked,
        }}
      >
        <FontRoot>{children}</FontRoot>
      </AppContext.Provider>
    </ReactLenis>
  );
};

export const useApp = () => {
  const props = useContext(AppContext);
  if (!props) throw new Error("useApp must be used within an AppProvider");
  return props;
};

export default AppRoot;
