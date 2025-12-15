const SlidingText = ({ text = "Professional Tree Service • Expert Care • 24/7 Emergency Response • Licensed & Insured" }) => {
  return (
    <div className="w-full bg-[#6DC642] py-4 overflow-hidden">
      <div className="sliding-text-wrapper flex whitespace-nowrap">
        <div className="sliding-text-content flex items-center gap-8 animate-slide">
          <span className="AvantBold text-white text-lg sm:text-xl">
            {text}
          </span>
          <span className="AvantBold text-white text-lg sm:text-xl">
            {text}
          </span>
          <span className="AvantBold text-white text-lg sm:text-xl">
            {text}
          </span>
          <span className="AvantBold text-white text-lg sm:text-xl">
            {text}
          </span>
        </div>
        <div className="sliding-text-content flex items-center gap-8 animate-slide">
          <span className="AvantBold text-white text-lg sm:text-xl">
            {text}
          </span>
          <span className="AvantBold text-white text-lg sm:text-xl">
            {text}
          </span>
          <span className="AvantBold text-white text-lg sm:text-xl">
            {text}
          </span>
          <span className="AvantBold text-white text-lg sm:text-xl">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SlidingText;

