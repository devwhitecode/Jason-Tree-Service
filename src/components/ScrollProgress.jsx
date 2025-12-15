import useScrollProgress from "../hooks/useScrollProgress";

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-1 z-[999] overflow-hidden pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-[#6DC642] transition-all duration-300 ease-out origin-left"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};

export default ScrollProgress;

