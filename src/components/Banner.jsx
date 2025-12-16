import { useEffect, useRef, useState } from "react";
import bannerLeaf from "../../Jasons Tree/assets/images/bannerleafimage.png";
import bannerImage from "../../Jasons Tree/assets/images/banner-1.png";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const bannerRef = useRef(null);
  const imageRef = useRef(null);

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
      { threshold: 0.2 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const rect = imageRef.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
      const offset = Math.max(0, Math.min(100, scrollProgress * 50));
      
      setScrollOffset(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative section4 w-full pt-[80px] pb-[80px] mt-12 sm:pt-[80px] sm:pb-[80px] sm:mt-7 flex items-center justify-center"
    >
      <img
        className={`absolute -top-16 -left-1 z-[9990] sm:w-[12%] w-[30%] cursor-pointer ${
          isVisible
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-12 scale-75"
        }`}
        style={{
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translate(15px, -12px) rotate(12deg) scale(1.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
        }}
        src={bannerLeaf}
        alt=""
      />
      <div
        className={`relative bg-[#356020] w-[93%] pt-8 pb-0 sm:py-16 flex flex-col sm:flex-row text-center pl-5 rounded-2xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div
          className={`w-fit h-fit flex flex-col gap-5 items-center transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <h1 className="text-white text-xl sm:text-4xl Akria">
            24/7 Emergency <br />
            Response Available
          </h1>
          <p className="text-white AvantLight text-sm px-5 sm:px-0">
            Immediate dispatch for fallen trees, storm damage, and hazards.
          </p>
          <a
            href="tel:+18055353739"
            className="py-2 w-fit bg-[#6DC642] AvantBold text-white px-6 rounded-b-2xl rounded-tl-2xl hover:bg-white hover:text-[#356020] hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all ease-out duration-300 cursor-pointer relative overflow-hidden group inline-block"
          >
            <span className="relative z-10">Call (805) 535-3739</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </a>
        </div>
        <img
          ref={imageRef}
          className="sm:absolute w-full sm:w-[35%] -right-5 -bottom-[45px] pt-5 sm:pt-0 transition-all duration-700 ease-out"
          src={bannerImage}
          alt=""
          style={{
            transform: `translateY(-${scrollOffset * 0.3}px) scale(${
              isVisible ? 1 : 0.85
            }) translateX(${isVisible ? 0 : 50}px)`,
            opacity: isVisible ? 1 : 0,
            transitionDelay: isVisible ? "400ms" : "0ms",
          }}
        />
      </div>
    </div>
  );
};

export default Banner;

