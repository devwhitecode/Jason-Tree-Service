import { useEffect, useRef, useState } from "react";
import serviceSvg1 from "../../Jasons Tree/assets/svg/serviceSvg1.svg";
import serviceSvg2 from "../../Jasons Tree/assets/svg/serviceSvg2.svg";
import serviceSvg3 from "../../Jasons Tree/assets/svg/serviceSvg3.svg";
import serviceLeaf1 from "../../Jasons Tree/assets/images/serviceleaf-1.png";
import serviceLeaf2 from "../../Jasons Tree/assets/images/serviceleaf-2.png";
import serviceCard1 from "../../Jasons Tree/assets/images/servicecardimage-1.png";
import serviceCard2 from "../../Jasons Tree/assets/images/servicecard-image-2.png";
import serviceCard3 from "../../Jasons Tree/assets/images/servicecard-image-3.png";

const coreServices = [
  {
    number: "01.",
    title: "Tree Care & Maintenance",
    description:
      "Professional trimming, pruning, and shaping to keep your trees healthy, safe, and beautifully maintained.",
    image: serviceCard1,
    icon: serviceSvg1,
  },
  {
    number: "02.",
    title: "Removal, Clearing & Cleanups",
    description:
      "Safe tree removals, stump grinding, and complete cleanups for residential and commercial properties.",
    image: serviceCard2,
    icon: serviceSvg2,
  },
  {
    number: "03.",
    title: "Special & Commercial Services",
    description:
      "Advanced palm care, fire-safety cleanups, and full commercial maintenance for retail centers and complexes.",
    image: serviceCard3,
    icon: serviceSvg3,
  },
];

const CoreServices = () => {
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
    <div ref={sectionRef} className="section_3 w-full overflow-hidden pt-0">
      <div className="relative w-full flex flex-col gap-3 justify-center items-center pb-10 sm:pb-28 text-center">
        <img
          className={`absolute w-[20%] sm:w-[12%] top-16 sm:top-10 sm:-top-7 -left-5 sm:left-36 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 -translate-x-12 -rotate-45"
          }`}
          src={serviceLeaf1}
          alt=""
        />
        <h1
          className={`Akria text-2xl sm:text-4xl font-[#0F0F0F] transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          Our <span className="text-[#6DC642]">Core Services</span>
        </h1>
        <p
          className={`AvantLight font-semibold font-sm sm:font-base transition-all duration-1000 delay-100 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          We offer over
          <strong className="AvantBold text-sm text-[#0F0F0F]"> 30 specialized tree services,</strong>
          grouped for easy understanding:
        </p>
      </div>

      <div className="relative flex flex-col sm:flex-row gap-16 sm:gap-8 justify-center items-center sm:items-start w-full">
        <img
          className={`absolute -right-1 -top-10 w-[10%] transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 translate-x-12 rotate-45"
          }`}
          src={serviceLeaf2}
          alt=""
        />
        {coreServices.map((service, index) => (
          <div
            key={service.number}
            className={`card gap-4 h-full w-[85%] sm:w-[28%] bg-white relative flex flex-col transition-all duration-1000 ease-out hover:scale-105 hover:shadow-2xl ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
            style={{
              transitionDelay: isVisible ? `${200 + index * 150}ms` : "0ms",
            }}
          >
            <div className="absolute bg-[#6DC642] w-10 h-10 rounded-full -top-1 -left-1 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <img className="w-[80%] h-[70%]" src={service.icon} alt="" />
            </div>
            <img
              className="w-full h-full object-cover mb-3 transition-transform duration-500 hover:scale-105"
              src={service.image}
              alt=""
            />
            <h1 className="text-2xl sm:text-4xl AvantBold font-semibold text-[#0F0F0F]">
              {service.number}
            </h1>
            <h1 className="text-2xl AvantBold text-[#0F0F0F]">{service.title}</h1>
            <p className="AvantLight leading-6 font-bold text-sm text-[#0F0F0F]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreServices;

