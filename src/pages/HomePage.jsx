import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import WhyChooseSection from "../components/WhyChooseSection";
import CoreServices from "../components/CoreServices";
import Banner from "../components/Banner";
import FeaturedWork from "../components/FeaturedWork";
import ClientReviews from "../components/ClientReviews";
import Footer from "../components/Footer";
import SlidingText from "../components/SlidingText";
import ContactForm from "../components/ContactForm";

import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import heroDesktop from "../../Jasons Tree/assets/images/home_hero.jpg";
import heroMobile from "../../Jasons Tree/assets/images/home_hero.jpg";
import heroBadge from "../../Jasons Tree/assets/images/bggreenbottomright.png";
import heroEllipse from "../../Jasons Tree/assets/images/Ellipse 1.png";
import heroBgLayer from "../../Jasons Tree/assets/images/hero-bg-2.png";
import heroBgGreen from "../../Jasons Tree/assets/images/mobilegreenSvg.png";
import heroBgLayerTwo from "../../Jasons Tree/assets/images/hero-bg-3.png";
import heroTextMobile from "../../Jasons Tree/assets/images/textSvgmobile.png";
import heroImageLarge from "../../Jasons Tree/assets/images/whyChooseImage-1.png";
import heroImageAccent from "../../Jasons Tree/assets/images/whyChoseimage-2.png";

const bulletItems = [
  "Family-Owned & Locally Trusted",
  "CA Estate Licensed & Fully Insured",
  "Experienced, Professional Crew",
  "24/7 Emergency Tree Services",
  "Same-Day Free Estimates Available",
];

const HomePage = () => {
  const { onNavigate } = useOutletContext();
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;
    const badge = document.querySelector(".hero-badge");
    const hero = document.getElementById("home");
    if (!badge || !hero) return;
    const showBadge = () => {
      void badge.offsetHeight;
      badge.classList.add("is-visible");
    };
    const observer = new IntersectionObserver(
      (entries, obs) => {
        const entry = entries[0];
        if (
          entry?.isIntersecting &&
          entry.intersectionRatio >= 0.3 &&
          window.scrollY > 0
        ) {
          showBadge();
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
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
      <section
        id="home"
        className="w-full h-[70vh] sm:h-[90vh] relative z-[99]"
      >
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
            
            <div
              className="absolute bottom-[10%] right-[12%] hidden lg:flex justify-start items-center gap-3 text-white pl-4 pr-6 py-3 rounded-full hero-badge z-[100]"
              style={{
                background: "linear-gradient(135deg, #6DC642 0%, #5AB032 100%)",
                boxShadow: "0 4px 15px rgba(109, 198, 66, 0.4)",
              }}
            >
              <img src={heroEllipse} alt="" className="w-14 h-14 object-cover rounded-full" />
              <div className="flex flex-col justify-center items-start">
                <h2 className="AvantBold text-base">24/7</h2>
                <p className="AvantLight text-sm" style={{ lineHeight: 1.2 }}>
                  Emergency <br />
                  Response
                </p>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 sm:px-8 z-[50]">
              <h1
                className="relative text-center text-4xl sm:text-5xl lg:text-6xl Akria text-[#0F0F0F] hero-heading"
                style={{ lineHeight: "1.2" }}
              >
                <span className="block sm:inline hero-text-line" style={{ animationDelay: '0.2s' }}>Professional</span>
                <br className="hidden sm:block" />
                <span className="text-[#358D0A] block sm:inline hero-text-line" style={{ animationDelay: '0.4s' }}>
                  Commercial <br />
                  & Residential Tree <br />
                  Services{" "}
                </span>
                <br className="hidden sm:block" />
                <span className="block sm:inline hero-text-line" style={{ animationDelay: '0.6s' }}>in Los Angeles &</span>
                <br className="hidden sm:block" />
                <span className="block sm:inline hero-text-line" style={{ animationDelay: '0.8s' }}>Orange County</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Floating License Button (Home only) */}
      <button
        type="button"
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[1000] bg-[#6DC642] text-white AvantBold uppercase text-xs sm:text-sm tracking-[0.2em] px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform duration-200 hover:-translate-y-0.5"
        aria-label="Company license number CA STATE LIC #1104641"
      >
        CA STATE LIC #1104641
      </button>

      <SlidingText text="25% OFF  --  Palm Tree Services (10+ Palms)" />

      <section id="about">
        <div id="why-us" />
        <WhyChooseSection
          heading="WHY"
          highlighted="CHOOSE US"
          bodyDesktop="At Jayson's Tree Service, we combine professional expertise with the reliability of a family-owned business. As a licensed and fully insured team, we follow strict safety standards to protect your property and deliver consistent, high-quality results. Our experienced crew handles everything from residential pruning to commercial-scale removals, always with precision, respect for your space, and fast turnaround times. And when emergencies strike, we're ready — offering 24/7 emergency response for storm damage, fallen trees, and urgent hazards anywhere in Los Angeles or Orange County."
          bodyMobile="At Jayson's Tree Service, we combine professional expertise with the reliability of a family-owned business. As a licensed and fully insured team, we follow strict safety standards to protect your property and deliver consistent, high-quality results. Our experienced crew handles everything from residential pruning to commercial-scale removals, always with precision, respect for your space, and fast turnaround times. And when emergencies strike, we're ready — offering 24/7 emergency response for storm damage, fallen trees, and urgent hazards anywhere in Los Angeles or Orange County."
          imageMain={heroImageLarge}
          imageOverlay={heroImageAccent}
          bulletItems={bulletItems}
        />
      </section>

      <div className="sm:mt-0 mt-16 sm:-mt-2">
        <CoreServices />
      </div>

      <section id="gallery">
        <Banner />
        <FeaturedWork />
      </section>

      <ClientReviews />

      <ContactForm />

      <section id="contact">
        <Footer onNavigate={onNavigate} />
      </section>
    </div>
  );
};

export default HomePage;

