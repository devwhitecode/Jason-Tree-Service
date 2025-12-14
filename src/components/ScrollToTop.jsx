import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      className="scroll-to-top"
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;

