import { useEffect } from "react";
import WhyChooseSection from "../components/WhyChooseSection";
import CoreServices from "../components/CoreServices";
import Banner from "../components/Banner";
import FeaturedWork from "../components/FeaturedWork";
import ClientReviews from "../components/ClientReviews";
import Footer from "../components/Footer";

import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import heroDesktop from "../../Jasons Tree/assets/images/newBgedited.png";
import heroMobile from "../../Jasons Tree/assets/images/newEditedBgmobile.png";
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
        className="w-full min-h-[90vh] sm:min-h-screen max-h-fit relative z-[99]"
      >
        <div className="w-full relative">
          <div className="w-full h-fit relative">
            <img
              src={heroDesktop}
              alt=""
              className="w-full h-auto top-0 left-0 hidden sm:block"
            />
            <img
              src={heroMobile}
              alt=""
              className="w-full sm:hidden top-0 left-0 h-full max-h-[95vh] object-cover"
            />
            <div
              className="absolute bottom-[8%] right-[13.5%] hidden sm:flex justify-start items-center gap-4 text-white pl-2 py-2 w-[20%] hero-badge"
              style={{
                backgroundImage: `url(${heroBadge})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left",
                backgroundSize: "100%",
              }}
            >
              <img src={heroEllipse} alt="" className="w-12 h-12 object-cover" />
              <div className="flex flex-col justify-center items-start">
                <h2 className="AvantBold text-sm -mb-1">24/7</h2>
                <p className="AvantLight text-sm" style={{ lineHeight: 1 }}>
                  Emergency <br />
                  Response
                </p>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-screen pt-40 sm:pt-80 px-4">
              <h1
                className="relative text-center text-6xl Akria text-[#0F0F0F] hidden sm:block"
                style={{ lineHeight: "4.5rem" }}
              >
                Professional <br />
                <span className="text-[#358D0A]">
                  Commercial <br />
                  & Residential Tree <br />
                  Services <br />
                </span>
                in Los Angeles & <br />
                Orange County
              </h1>
              <h1
                className="relative text-center text-3xl Akria text-[#0F0F0F] sm:hidden"
                style={{ lineHeight: "2.5rem" }}
              >
                Professional{" "}
                <span className="text-[#358D0A]">
                  Commercial <br />
                  & Residential Tree <br />
                  Services{" "}
                </span>
                in Los Angeles & <br />
                Orange County
              </h1>
            </div>
          </div>
          <img
            src={heroBgLayer}
            alt=""
            className="w-full h-auto absolute top-0 left-0 hidden sm:block"
          />
          <img
            src={heroBgGreen}
            alt=""
            className="w-full absolute top-0 left-0 sm:hidden h-full max-h-[92vh] object-cover"
          />
          <img
            src={heroBgLayerTwo}
            alt=""
            className="w-full h-auto absolute top-6 left-0 hidden sm:block"
          />
          <img
            src={heroTextMobile}
            alt=""
            className="w-full h-auto absolute bottom-4 left-0 sm:hidden object-contain"
          />
        </div>
      </section>

      <section id="about">
        <WhyChooseSection
          heading="WHY"
          highlighted="CHOOSE US"
          bodyDesktop="At Jayson’s Tree Service, we combine professional expertise with the reliability of a family-owned business. As a licensed and fully insured team, we follow strict safety standards to protect your property and deliver consistent, high-quality results. Our experienced crew handles everything from residential pruning to commercial-scale removals, always with precision, respect for your space, and fast turnaround times. And when emergencies strike, we’re ready — offering 24/7 emergency response for storm damage, fallen trees, and urgent hazards anywhere in Los Angeles or Orange County."
          bodyMobile="At Jayson’s Tree Service, we combine professional expertise with the reliability of a family-owned business. As a licensed and fully insured team, we follow strict safety standards to protect your property and deliver consistent, high-quality results. Our experienced crew handles everything from residential pruning to commercial-scale removals, always with precision, respect for your space, and fast turnaround times. And when emergencies strike, we’re ready — offering 24/7 emergency response for storm damage, fallen trees, and urgent hazards anywhere in Los Angeles or Orange County."
          imageMain={heroImageLarge}
          imageOverlay={heroImageAccent}
          bulletItems={bulletItems}
        />
        <div id="why-us" />
      </section>

      <div className="sm:mt-0 mt-16 sm:-mt-2">
        <CoreServices />
      </div>

      <section id="gallery">
        <Banner />
        <FeaturedWork />
      </section>

      <ClientReviews />

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;

