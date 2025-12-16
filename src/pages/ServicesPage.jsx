import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedWork from "../components/FeaturedWork";
import ClientReviews from "../components/ClientReviews";
import Footer from "../components/Footer";
import SlidingText from "../components/SlidingText";
import ContactForm from "../components/ContactForm";

import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import serviceHero from "../../Jasons Tree/assets/images/services_hero.jpg";
import heroMobile from "../../Jasons Tree/assets/images/services_hero.jpg";
import serviceWhyImage from "../../Jasons Tree/assets/images/servicecardimage-1.png";
import serviceWhyOverlay from "../../Jasons Tree/assets/images/servicecard-image-2.png";
import serviceLeaf from "../../Jasons Tree/assets/images/servicepageleaf-1.png";
import serviceLeaf1 from "../../Jasons Tree/assets/images/serviceleaf-1.png";
import serviceLeaf2 from "../../Jasons Tree/assets/images/serviceleaf-2.png";
import lastLeaf from "../../Jasons Tree/assets/images/lastLeafHeroPage.png";
import leafTwo from "../../Jasons Tree/assets/images/leaf-2.png";
import leafIcon from "../../Jasons Tree/assets/svg/mobildeMenuLeafsvg.svg";
import tc1 from "../../Jasons Tree/assets/images/tc-1.png";
import tc2 from "../../Jasons Tree/assets/images/tc-2.png";
import tc3 from "../../Jasons Tree/assets/images/tc-3.png";
import tc4 from "../../Jasons Tree/assets/images/tc-4.png";
import tc5 from "../../Jasons Tree/assets/images/tc-5.png";
import newM1 from "../../Jasons Tree/assets/images/newM-1.png";
import newM2 from "../../Jasons Tree/assets/images/newM-2.png";
import newM3 from "../../Jasons Tree/assets/images/newM-3.png";
import newM4 from "../../Jasons Tree/assets/images/newM-4.png";
import serviceSvg1 from "../../Jasons Tree/assets/svg/serviceSvg1.svg";
import serviceSvg2 from "../../Jasons Tree/assets/svg/serviceSvg2.svg";
import serviceSvg3 from "../../Jasons Tree/assets/svg/serviceSvg3.svg";

const serviceCategories = [
  {
    number: "01.",
    title: "Tree Care & Maintenance",
    icon: serviceSvg1,
    accent: tc1,
    accentSmall: serviceWhyOverlay,
    description:
      "Healthy trees reduce risk and boost curb appeal. Perfect for homes, shopping centers, and retail properties.",
    bullets: [
      "Tree Trimming",
      "Tree Pruning",
      "Tree Shaping / Topping",
      "Tree Health & Maintenance",
      "Crown Reduction",
      "Crown Thinning",
      "Hedge Trimming",
      "Deadwood Removal",
      "Tree Planting",
    ],
  },
  {
    number: "02.",
    title: "Removal, Clearing & Cleanups",
    icon: serviceSvg2,
    accent: tc3,
    accentSmall: tc4,
    description:
      "Safe, controlled removals with spotless debris hauling for residential blocks and commercial complexes.",
    bullets: [
      "Tree Removal",
      "Stump Removal",
      "Stump Grinding",
      "Lot / Land Clearing",
      "Brush Removal",
      "Storm Damage Cleanup",
      "Yard Cleanup",
      "Hauling & Debris Removal",
    ],
  },
  {
    number: "03.",
    title: "Special & Commercial Services",
    icon: serviceSvg3,
    accent: tc5,
    accentSmall: newM1,
    description:
      "Built for commercial timelines and specialty palms. We keep shopping centers and campuses tenant-ready.",
    bullets: [
      "Palm Tree Trimming",
      "Palm Tree Skinning",
      "Fire Protection Cleanups",
      "24/7 Emergency Tree Services",
      "Emergency Tree Removal",
      "Commercial Tree Maintenance",
      "Shopping Center Tree Services",
      "Tree Trimming LA crews on-call",
    ],
  },
];

const additionalImages = [newM2, newM3, newM4];

const ServicesPage = () => {
  const { onNavigate } = useOutletContext();
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [serviceVisibility, setServiceVisibility] = useState({});
  const introRef = useRef(null);
  const serviceRefs = useRef({});

  useEffect(() => {
    const introObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntroVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (introRef.current) {
      introObserver.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        introObserver.unobserve(introRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const serviceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const serviceId = entry.target.getAttribute('data-service-id');
          if (entry.isIntersecting) {
            setServiceVisibility(prev => ({ ...prev, [serviceId]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    Object.values(serviceRefs.current).forEach((ref) => {
      if (ref) {
        serviceObserver.observe(ref);
      }
    });

    return () => {
      Object.values(serviceRefs.current).forEach((ref) => {
        if (ref) {
          serviceObserver.unobserve(ref);
        }
      });
    };
  }, []);

  const handleGetEstimate = () => {
    window.dispatchEvent(new Event("highlightContactForm"));
  };

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
              src={serviceHero}
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
                <span className="block sm:inline hero-text-line" style={{ animationDelay: '0.2s' }}>Professional</span>
                <br className="hidden sm:block" />
                <span className="text-[#358D0A] block sm:inline hero-text-line" style={{ animationDelay: '0.4s' }}>
                  Tree Services <br className="sm:hidden" />
                  <span className="hidden sm:inline">across </span>
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

      <SlidingText text="Los Angeles County Tree Service  •  Commercial Tree Services Los Angeles  •  Palm Tree Trimming Los Angeles  •  24/7 Emergency Tree Service LA" />

      <section ref={introRef} className="relative px-5 sm:px-16 py-16 sm:py-24 overflow-hidden">
        <img
          src={lastLeaf}
          alt=""
          className={`hidden sm:block w-28 sm:w-44 absolute top-[5%] right-0 z-[9990] cursor-pointer touch-none ${
            isIntroVisible
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 translate-x-12 rotate-45"
          }`}
          style={{
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translate(-15px, -15px) rotate(-12deg) scale(1.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
          }}
        />
        <img
          src={leafTwo}
          alt=""
          className={`w-28 absolute top-[60%] left-0 z-[9990] cursor-pointer touch-none ${
            isIntroVisible
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 -translate-x-12 -rotate-45"
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
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <p
              className={`AvantBold uppercase text-sm text-[#6DC642] transition-all duration-1000 ease-out ${
                isIntroVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              Commercial & Residential
            </p>
            <h2
              className={`Akria text-3xl sm:text-4xl leading-tight transition-all duration-1000 delay-100 ease-out ${
                isIntroVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              Complete tree care for homes, shopping centers, and corporate campuses
            </h2>
            <p
              className={`AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7 transition-all duration-1000 delay-200 ease-out ${
                isIntroVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              We schedule around guests, tenants, and deliveries. Expect clear communication, contained work zones, and immaculate cleanups on every Tree Trimming LA, removal, or palm project.
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              {["Licensed & Insured", "24/7 Emergency", "Commercial Specialists"].map((badge, idx) => (
                <span
                  key={badge}
                  className={`px-4 py-2 rounded-full text-sm AvantBold transition-all duration-700 ease-out ${
                    idx === 0
                      ? "bg-[#0F0F0F]/90 text-white"
                      : idx === 1
                      ? "bg-[#6DC642]/10 text-[#356020] border border-[#6DC642]/40"
                      : "text-[#0F0F0F] border border-gray-200 bg-white/20"
                  } ${
                    isIntroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: isIntroVisible ? `${300 + idx * 100}ms` : "0ms",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 delay-200 ease-out ${
                isIntroVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-12 scale-90"
              }`}
            >
              <img src={serviceWhyImage} alt="Crew trimming trees" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>
            <div
              className={`absolute -bottom-10 -left-8 w-40 sm:w-56 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 delay-400 ease-out hover:scale-105 ${
                isIntroVisible
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 -translate-x-8 translate-y-8"
              }`}
            >
              <img src={serviceWhyOverlay} alt="Team with equipment" className="w-full h-full object-cover" />
            </div>
            <img
              src={serviceLeaf}
              alt=""
              className={`absolute -top-10 right-0 w-20 sm:w-28 cursor-pointer transition-all duration-700 delay-300 ease-out ${
                isIntroVisible
                  ? "opacity-90 translate-y-0 rotate-0"
                  : "opacity-0 -translate-y-12 rotate-45"
              }`}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-10px, -10px) rotate(-10deg) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
              }}
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-16 text-center pb-10">
          <h2 className="Akria text-2xl sm:text-4xl mb-3">
            Our <span className="text-[#6DC642]">Specialized Services</span>
          </h2>
          <p className="AvantLight text-base sm:text-lg text-[#2C2C2C]">
            Professional tree care solutions for residential and commercial properties
          </p>
        </div>

        {serviceCategories.map((category, idx) => (
          <section
            key={category.number}
            ref={(el) => (serviceRefs.current[category.number] = el)}
            data-service-id={category.number}
            className="relative px-5 sm:px-16 py-12 sm:py-16 overflow-hidden"
          >
            <img
              src={serviceLeaf1}
              alt=""
              className={`absolute ${idx % 2 === 0 ? 'top-[15%] right-[5%]' : 'top-[20%] left-[5%]'} w-16 sm:w-24 opacity-10 pointer-events-none transition-all duration-700 ${
                serviceVisibility[category.number]
                  ? "opacity-10 rotate-0"
                  : "opacity-0 rotate-45"
              }`}
            />
            <div className={`max-w-6xl mx-auto grid grid-cols-1 ${idx % 2 === 0 ? 'sm:grid-cols-2' : 'sm:grid-cols-2'} gap-8 sm:gap-12 items-start`}>
              <div className={`flex flex-col gap-4 ${idx % 2 === 1 ? 'sm:order-2' : ''}`}>
                <div
                  className={`flex items-center gap-3 transition-all duration-700 ease-out ${
                    serviceVisibility[category.number] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#6DC642] flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-125 hover:rotate-[360deg]">
                    <img src={category.icon} alt="" className="w-6 h-6" />
                  </div>
                  <p className="AvantBold uppercase text-sm text-[#6DC642]">
                    {category.title}
                  </p>
                </div>
                <h3
                  className={`Akria text-2xl sm:text-4xl leading-tight transition-all duration-700 delay-100 ease-out ${
                    serviceVisibility[category.number] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                >
                  <span className="text-[#6DC642]">{category.number}</span> {category.title}
                </h3>
                <p
                  className={`AvantLight text-base sm:text-lg leading-7 text-[#2C2C2C] transition-all duration-700 delay-200 ease-out ${
                    serviceVisibility[category.number] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                >
                  {category.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-2">
                  {category.bullets.map((item, bulletIdx) => (
                    <p
                      key={item}
                      className={`flex items-center gap-2 AvantLight text-sm sm:text-base leading-6 transition-all duration-700 ease-out hover:translate-x-2 hover:text-[#6DC642] group ${
                        serviceVisibility[category.number] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                      }`}
                      style={{
                        transitionDelay: serviceVisibility[category.number] ? `${300 + bulletIdx * 50}ms` : "0ms",
                      }}
                    >
                      <img src={leafIcon} alt="" className="w-4 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-125" />
                      {item}
                    </p>
                  ))}
                </div>
                <div
                  className={`flex gap-3 mt-4 transition-all duration-700 ease-out ${
                    serviceVisibility[category.number] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: serviceVisibility[category.number] ? `${300 + category.bullets.length * 50}ms` : "0ms",
                  }}
                >
                  <button
                    type="button"
                    onClick={handleGetEstimate}
                    className="px-6 py-3 text-sm sm:text-base AvantBold rounded-2xl rounded-tr-none bg-[#6DC642] text-white transition-all duration-300 hover:bg-[#5AB032] hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
                  >
                    Get Free Estimate
                  </button>
                  <a
                    href="tel:+18055353739"
                    className="px-6 py-3 text-sm sm:text-base AvantBold rounded-2xl rounded-tr-none border border-gray-200 text-[#0F0F0F] bg-white/20 transition-all duration-300 hover:border-[#6DC642] hover:-translate-y-1 hover:scale-105"
                  >
                    Call Now
                  </a>
                </div>
              </div>
              <div className={`relative ${idx % 2 === 1 ? 'sm:order-1' : ''}`}>
                <div
                  className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 delay-200 ease-out hover:scale-105 ${
                    serviceVisibility[category.number]
                      ? "opacity-100 translate-x-0 scale-100"
                      : `opacity-0 ${idx % 2 === 0 ? 'translate-x-12' : '-translate-x-12'} scale-90`
                  }`}
                  style={{ maxHeight: '450px', height: 'fit-content' }}
                >
                  <img src={category.accent} alt={category.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" style={{ imageRendering: 'smooth', maxHeight: '450px', width: '100%', objectFit: 'cover' }} />
                </div>
                <div
                  className={`absolute -bottom-8 ${idx % 2 === 0 ? '-right-6' : '-left-6'} w-40 sm:w-56 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 delay-400 ease-out hover:scale-105 ${
                    serviceVisibility[category.number]
                      ? "opacity-100 translate-x-0 translate-y-0"
                      : `opacity-0 ${idx % 2 === 0 ? 'translate-x-8' : '-translate-x-8'} translate-y-8`
                  }`}
                >
                  <img src={category.accentSmall} alt={`${category.title} detail`} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>

      <section className="relative px-5 sm:px-16 pt-16 pb-0 sm:pt-20 sm:pb-0 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="Akria text-3xl sm:text-4xl mb-4">
            Ready to <span className="text-[#6DC642]">Transform Your Property?</span>
          </h2>
          <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] mb-8 max-w-3xl mx-auto">
            Get a free estimate today and experience the difference professional tree care makes. Our expert team is ready to help with any project, big or small.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={handleGetEstimate}
              className="px-8 py-4 text-lg AvantBold bg-[#6DC642] rounded-2xl text-white rounded-tr-none transition-all duration-300 hover:bg-[#5AB032] hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
            >
              Book an Appointment
            </button>
            <a
              href="tel:+18055353739"
              className="px-8 py-4 text-lg AvantBold rounded-2xl rounded-tr-none border-2 border-[#6DC642] text-[#0F0F0F] bg-white/20 transition-all duration-300 hover:bg-[#6DC642] hover:text-white hover:scale-105 hover:-translate-y-1"
            >
              Call for Emergency Service
            </a>
          </div>
          <p className="AvantLight text-sm text-[#2C2C2C] mt-6">
            Available 24/7 for emergency tree services across Los Angeles & Orange County
          </p>
        </div>
      </section>

      <Banner />
      <FeaturedWork />
      <ClientReviews />
      <ContactForm />

      <section id="contact">
        <Footer onNavigate={onNavigate} />
      </section>
    </div>
  );
};

export default ServicesPage;

