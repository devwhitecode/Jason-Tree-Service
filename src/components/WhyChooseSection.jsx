import { useEffect, useRef, useState } from "react";
import lastLeaf from "../../Jasons Tree/assets/images/lastLeafHeroPage.png";
import leafTwo from "../../Jasons Tree/assets/images/leaf-2.png";
import whyLeaf1 from "../../Jasons Tree/assets/images/whyChoseleaf-3.png";
import whyLeaf2 from "../../Jasons Tree/assets/images/whychoseleaf-4.png";
import leafIcon from "../../Jasons Tree/assets/svg/mobildeMenuLeafsvg.svg";

const WhyChooseSection = ({ heading, highlighted, bodyDesktop, bodyMobile, imageMain, imageOverlay, bulletItems }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full min-h-screen pt-16 sm:pt-[120px] pb-0 relative">
      <img
        src={lastLeaf}
        alt=""
        className={`w-28 sm:w-44 absolute top-[0%] sm:top-[-22%] right-0 transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-x-0 rotate-0"
            : "opacity-0 translate-x-12 rotate-45"
        }`}
      />
      <img
        src={leafTwo}
        alt=""
        className={`w-28 absolute top-[38%] left-0 transition-all duration-1000 delay-200 ease-out ${
          isVisible
            ? "opacity-100 translate-x-0 rotate-0"
            : "opacity-0 -translate-x-12 -rotate-45"
        }`}
      />
      <div className="w-full justify-between gap-8 flex relative max-sm:flex-col">
        <div className="w-full sm:w-1/2 min-h-[80dvh] flex flex-col gap-5 py-6 px-4 sm:pl-20">
          <h2
            className={`text-2xl sm:text-4xl Akria max-sm:text-center transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {heading} <span className="text-[#6DC642]">{highlighted}</span>
          </h2>
          <p
            className={`AvantLight leading-6 text-sm hidden sm:block transition-all duration-1000 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {bodyDesktop}
          </p>
          <p
            className={`AvantLight leading-6 text-sm text-center sm:hidden transition-all duration-1000 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {bodyMobile}
          </p>
          {bulletItems && (
            <div className="flex flex-col justify-start items-center sm:items-start gap-3">
              {bulletItems.map((item, index) => (
                <p
                  key={item}
                  className={`flex justify-start text-lg sm:text-base items-center AvantBold gap-2 transition-all duration-1000 ease-out hover:translate-x-2 hover:text-[#6DC642] ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms",
                  }}
                >
                  <img src={leafIcon} alt="" className="w-5 transition-transform duration-300 hover:rotate-12" />
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="w-full sm:w-1/2 min-h-full relative">
          <img
            src={whyLeaf1}
            alt=""
            className={`w-28 absolute bottom-[15%] left-[-6%] transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 rotate-0"
                : "opacity-0 translate-y-12 rotate-45"
            }`}
          />
          <img
            src={whyLeaf2}
            alt=""
            className={`w-28 absolute bottom-[5%] left-[-6%] transition-all duration-1000 delay-400 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 rotate-0"
                : "opacity-0 translate-y-12 -rotate-45"
            }`}
          />
          <div
            className={`absolute w-full h-[90%] transform -translate-y-1/2 top-1/2 right-0 rounded-tl-full rounded-bl-full bg-[#356020] z-[-1] transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          />
          <div
            className={`w-[45%] sm:w-[60%] h-[50%] sm:h-[60dvh] relative ml-32 sm:ml-28 z-[10] transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-12 scale-90"
            }`}
          >
            <img src={imageMain} alt="" className="w-full h-full object-fill transition-transform duration-500 hover:scale-105" />
            <div
              className={`w-[60%] sm:w-[60%] h-[70%] absolute bottom-[-20%] left-[-24%] rounded-2xl overflow-hidden transition-all duration-1000 delay-400 ease-out hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 -translate-x-8 translate-y-8"
              }`}
            >
              <img src={imageOverlay} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;

