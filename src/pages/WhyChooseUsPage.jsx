import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import SlidingText from "../components/SlidingText";
import Footer from "../components/Footer";
import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import heroDesktop from "../../Jasons Tree/assets/images/why choose_hero.jpg";
import heroMobile from "../../Jasons Tree/assets/images/why choose_hero.jpg";
import serviceSvg1 from "../../Jasons Tree/assets/svg/serviceSvg1.svg";
import serviceSvg2 from "../../Jasons Tree/assets/svg/serviceSvg2.svg";
import serviceSvg3 from "../../Jasons Tree/assets/svg/serviceSvg3.svg";
import fw4 from "../../Jasons Tree/assets/images/fw-4.png";
import fw6 from "../../Jasons Tree/assets/images/fw-6.png";
import mwp3 from "../../Jasons Tree/assets/images/mwp-3.png";
import whyChooseImage1 from "../../Jasons Tree/assets/images/whyChooseImage-1.png";
import whyChoseImage2 from "../../Jasons Tree/assets/images/whyChoseimage-2.png";
import side45 from "../../Jasons Tree/assets/images/side 45.jpg";

const items = [
  {
    title: "24/7 Emergency Response",
    body: "Rapid crews for storm damage, hazardous limbs, and urgent commercial needs. Emergency Tree Service LA teams dispatch immediately with lift and crane support.",
    svg: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Free Estimates",
    body: "Same-day site visits and transparent scopes for residential and commercial clients. No hidden fees, no surprises—just clear pricing.",
    svg: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Commercial Tree Specialists",
    body: "Shopping centers, retail plazas, HOAs, and corporate campuses handled with precision. Commercial Tree Services Los Angeles property teams rely on.",
    svg: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Fully Licensed & Insured",
    body: "California State License, bonded, insured, and safety-led crews on every job. Complete coverage for your property and peace of mind.",
    svg: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Experienced Crew",
    body: "Decades of combined climbing, rigging, and crane coordination experience. Tree Trimming LA and Tree Removal Los Angeles experts you can trust.",
    svg: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
  },
  {
    title: "15+ Expert Tree Services",
    body: "Tree trimming LA, palm tree trimming Los Angeles, removals, stump grinding, planting, and more. Complete tree care solutions.",
    svg: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
    ),
  },
];

const WhyChooseUsPage = () => {
  const { onNavigate } = useOutletContext();
  const [scrollY, setScrollY] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Smooth parallax effect for images
      imageRefs.current.forEach((img, index) => {
        if (img) {
          const rect = img.getBoundingClientRect();
          const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
          
          if (scrollProgress > 0 && scrollProgress < 1.5) {
            const translateY = (scrollProgress - 0.5) * 30;
            img.style.transform = `translateY(${translateY}px) scale(${1 + scrollProgress * 0.02})`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="main text-[#0F0F0F] w-full overflow-hidden"
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <section className="w-full h-[70vh] sm:h-[90vh] relative z-[99]">
        <div className="w-full h-full relative overflow-hidden">
          <div className="w-full h-full relative bg-gray-100">
            <img
              src={heroDesktop}
              alt=""
              className="w-full h-full object-cover object-center hidden sm:block"
              style={{ objectPosition: "center center" }}
            />
            <img
              src={heroMobile}
              alt=""
              className="w-full h-[110%] object-cover object-top sm:hidden absolute top-0 left-0"
              style={{ objectPosition: "center top" }}
            />
            <div className="absolute inset-0 bg-white/60" />
            
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 sm:px-8 z-[50]">
              <h1
                className="relative text-center text-2xl sm:text-[36px] Akria text-[#0F0F0F] hero-heading"
                style={{ lineHeight: "1.2" }}
              >
                <span className="block sm:inline hero-text-line" style={{ animationDelay: '0.2s' }}>Trusted Tree Care</span>
                <br className="hidden sm:block" />
                <span className="text-[#358D0A] block sm:inline hero-text-line" style={{ animationDelay: '0.4s' }}>
                  Licensed & Insured <br className="sm:hidden" />
                  Professionals
                </span>
                <br className="hidden sm:block" />
                <span className="block sm:inline hero-text-line" style={{ animationDelay: '0.6s' }}>Los Angeles &</span>
                <br className="hidden sm:block" />
                <span className="block sm:inline hero-text-line" style={{ animationDelay: '0.8s' }}>Orange County</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <SlidingText text="24/7 Emergency Response • Free Estimates • Licensed & Insured • Commercial Tree Specialists • Palm Tree Trimming Los Angeles" />

      <section className="relative px-5 sm:px-16 pt-20 pb-12 sm:pb-20 overflow-hidden group">
        <img
          src={mwp3}
          alt=""
          aria-hidden="true"
          className="leaf-float hidden sm:block absolute top-[5%] right-[3%] w-16 sm:w-20 opacity-100 filter brightness-110 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 pointer-events-none"
        />
        <img
          src={mwp3}
          alt=""
          aria-hidden="true"
          className="leaf-float hidden sm:block absolute top-[5%] left-[3%] w-16 sm:w-20 opacity-100 filter brightness-110 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 pointer-events-none"
        />
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-10 sm:mb-14">
            <div className="w-14 h-14 rounded-full bg-[#6DC642] flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h2 className="Akria text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
              What makes us the trusted choice across Los Angeles & Orange County
            </h2>
            <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7 max-w-2xl">
              From Tree Trimming LA neighborhoods to large-scale Commercial Tree Services Los Angeles, we deliver technical expertise with approachable, family-level service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item, index) => (
              <article
                key={item.title}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/70 backdrop-blur-sm border border-gray-200/60 shadow-lg flex flex-col items-center text-center gap-4 h-full text-[#0F0F0F] transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-[#6DC642]/50 hover:bg-white/90 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl">
                  <div className="text-white transition-transform duration-300 group-hover:scale-110">
                    {item.svg}
                  </div>
                </div>
                <h3 className="Akria text-lg sm:text-xl leading-tight">{item.title}</h3>
                <p className="AvantLight text-sm sm:text-base leading-7 text-[#2C2C2C] flex-grow">{item.body}</p>
                <button 
                  onClick={() => onNavigate?.("contact")}
                  className="mt-2 px-5 py-2.5 bg-[#6DC642] text-white text-sm AvantBold rounded-xl hover:bg-[#5AB032] transition-all duration-300 hover:scale-105 hover:shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
                >
                  Learn More
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 sm:px-16 pt-0 pb-12 sm:pb-20 overflow-hidden">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <div className="relative order-2 lg:order-1 group h-full">
            <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 h-full">
              <img 
                ref={(el) => (imageRefs.current[0] = el)}
                src={side45} 
                alt="Professional crew on commercial site" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-105" 
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{ willChange: 'transform', imageRendering: 'smooth' }}
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-5 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#6DC642] flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[#6DC642] AvantBold uppercase text-sm">Proven Track Record</p>
            </div>
            
            <h2 className="Akria text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Trusted by homeowners and commercial property managers alike
            </h2>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-10 h-10 rounded-xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
                  <strong className="AvantBold">Retail & Shopping Centers:</strong> Traffic-safe setups, after-hours scheduling, and guest-friendly crews for high-traffic properties.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-10 h-10 rounded-xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
                  <strong className="AvantBold">Residential Properties:</strong> Careful pruning, respectful cleanup, and neighbor-friendly approaches that preserve curb appeal.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-10 h-10 rounded-xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
                  <strong className="AvantBold">HOAs & Complexes:</strong> Scheduled maintenance, clear scope documentation, and tenant-considerate work zones.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-10 h-10 rounded-xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
                  <strong className="AvantBold">Emergency Response:</strong> Palm Tree Trimming Los Angeles resorts need or storm cleanup—we dispatch rapidly with full equipment.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-10 h-10 rounded-xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
                  <strong className="AvantBold">Licensed & Insured:</strong> Fully bonded, California State licensed, and comprehensively insured for complete protection and peace of mind on every project.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new Event("highlightContactForm"));
                  onNavigate?.("contact");
                }}
                className="px-6 py-3 text-sm sm:text-base AvantBold rounded-2xl rounded-tr-none bg-[#6DC642] text-white transition-all duration-300 hover:bg-[#5AB032] hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
              >
                Get Free Estimate
              </button>
              <a
                href="tel:+18055353739"
                className="px-6 py-3 text-sm sm:text-base AvantBold rounded-2xl rounded-tr-none border border-gray-200 text-[#0F0F0F] bg-white/20 transition-all duration-300 hover:border-[#6DC642] hover:-translate-y-1 hover:scale-105 text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 sm:px-16 pt-0 pb-12 sm:pb-20 overflow-hidden">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#6DC642] flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
              </div>
              <p className="text-[#6DC642] AvantBold uppercase text-sm">Family-Owned Excellence</p>
            </div>
            
            <h2 className="Akria text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Every property gets family-level care
            </h2>
            
            <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
              As a family-owned business, we know how important clear communication, punctual arrivals, and neighbor-friendly setups are. We're not a franchise—you'll work directly with experienced leads who own the outcome.
            </p>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6DC642]" />
                <p className="AvantLight text-base text-[#2C2C2C]">Direct communication with crew leads</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6DC642]" />
                <p className="AvantLight text-base text-[#2C2C2C]">Personal accountability on every job</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6DC642]" />
                <p className="AvantLight text-base text-[#2C2C2C]">Neighbor-friendly and respectful approach</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#6DC642]" />
                <p className="AvantLight text-base text-[#2C2C2C]">Long-term relationships built on trust</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new Event("highlightContactForm"));
                  onNavigate?.("contact");
                }}
                className="px-6 py-3 text-sm sm:text-base AvantBold rounded-2xl rounded-tr-none bg-[#6DC642] text-white transition-all duration-300 hover:bg-[#5AB032] hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
              >
                Get Free Estimate
              </button>
              <a
                href="tel:+18055353739"
                className="px-6 py-3 text-sm sm:text-base AvantBold rounded-2xl rounded-tr-none border border-gray-200 text-[#0F0F0F] bg-white/20 transition-all duration-300 hover:border-[#6DC642] hover:-translate-y-1 hover:scale-105 text-center"
              >
                Call Now
              </a>
            </div>
          </div>
          
          <div className="relative group h-full">
            <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 h-full">
              <img 
                ref={(el) => (imageRefs.current[1] = el)}
                src={whyChoseImage2} 
                alt="Family-owned tree service crew at work" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1 group-hover:brightness-105" 
                loading="lazy"
                decoding="async"
                style={{ willChange: 'transform', imageRendering: 'smooth' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <Footer onNavigate={onNavigate} />
      </section>
    </div>
  );
};

export default WhyChooseUsPage;
