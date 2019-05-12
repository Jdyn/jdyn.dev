import { useState, useEffect } from "react";

function getWindowDimensions() {
  const pane = window
  if (pane) {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  return {}
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window && window.addEventListener("resize", handleResize);
    return () => window && window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
