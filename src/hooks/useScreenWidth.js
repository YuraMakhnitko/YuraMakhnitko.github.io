import { useEffect, useState } from "react";

export const useScreenWidth = () => {
  const [windowWidth, setWindowWidth] = useState({ width: undefined });
  useEffect(() => {
    const resizeHandle = () => {
      setWindowWidth({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", resizeHandle);

    resizeHandle();

    return () => window.removeEventListener("resize", resizeHandle);
  }, []);
  return windowWidth;
};
