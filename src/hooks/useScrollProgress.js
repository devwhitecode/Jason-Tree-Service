import { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    let frameId;
    const updateProgress = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      const nextProgress = Math.min(1, Math.max(0, window.scrollY / documentHeight));
      setProgress(nextProgress);
    };

    const handleScroll = () => {
      if (frameId !== undefined) {
        return;
      }
      frameId = window.requestAnimationFrame(() => {
        updateProgress();
        frameId = undefined;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return progress;
};

export default useScrollProgress;

