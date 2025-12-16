import { useOutletContext } from "react-router-dom";
import SlidingText from "../components/SlidingText";
import Footer from "../components/Footer";
import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import heroDesktop from "../../Jasons Tree/assets/images/about_hero.jpg";
import heroMobile from "../../Jasons Tree/assets/images/about_hero.jpg";
import familyMain from "../../Jasons Tree/assets/images/whyChooseImage-1.png";
import familyCrew from "../../Jasons Tree/assets/images/whyChoseimage-2.png";
import serviceWhyImage from "../../Jasons Tree/assets/images/serviceWhy-1.png";
import fw4 from "../../Jasons Tree/assets/images/fw-4.png";
import fw5 from "../../Jasons Tree/assets/images/fw-5.png";
import fw6 from "../../Jasons Tree/assets/images/fw-6.png";
import serviceWhyOverlay from "../../Jasons Tree/assets/images/serviceWhy-2.png";
import footerLeaf from "../../Jasons Tree/assets/images/footerleaf-1.png";
import footerLeaf2 from "../../Jasons Tree/assets/images/footerleaf-2.png";
import fw1 from "../../Jasons Tree/assets/images/fw-1.png";
import fw2 from "../../Jasons Tree/assets/images/fw-2.png";
import fw3 from "../../Jasons Tree/assets/images/fw-3.png";
import tc1 from "../../Jasons Tree/assets/images/tc-1.png";
import tc2 from "../../Jasons Tree/assets/images/tc-2.png";
import bannerLeaf from "../../Jasons Tree/assets/images/bannerleafimage.png";
import whyChoseLeaf3 from "../../Jasons Tree/assets/images/whyChoseleaf-3.png";
import whyChoseLeaf4 from "../../Jasons Tree/assets/images/whychoseleaf-4.png";
import serviceSvg1 from "../../Jasons Tree/assets/svg/serviceSvg1.svg";
import serviceSvg2 from "../../Jasons Tree/assets/svg/serviceSvg2.svg";
import serviceSvg3 from "../../Jasons Tree/assets/svg/serviceSvg3.svg";
import mwp3 from "../../Jasons Tree/assets/images/mwp-3.png";

const AboutPage = () => {
  const { onNavigate } = useOutletContext();

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
                <span className="block sm:inline hero-text-line" style={{ animationDelay: '0.2s' }}>Family-Owned</span>
                <br className="hidden sm:block" />
                <span className="text-[#358D0A] block sm:inline hero-text-line" style={{ animationDelay: '0.4s' }}>
                  Tree Service <br className="sm:hidden" />
                  Experts
                </span>
                <br className="hidden sm:block" />
                <span className="block sm:inline hero-text-line" style={{ animationDelay: '0.6s' }}>Serving Los Angeles &</span>
                <br className="hidden sm:block" />
                <span className="block sm:inline hero-text-line" style={{ animationDelay: '0.8s' }}>Orange County</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <SlidingText text="Family-Owned Business • Licensed & Insured • Commercial Tree Services Los Angeles • Tree Removal Los Angeles • 24/7 Emergency Response" />

      <section className="relative px-5 sm:px-16 py-12 sm:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#6DC642] flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <p className="text-[#6DC642] AvantBold uppercase text-sm tracking-wide">Company Story</p>
            </div>
            <h2 className="Akria text-2xl sm:text-3xl lg:text-4xl text-[#0F0F0F] leading-tight">
              A family-owned crew serving Los Angeles & Orange County for decades
            </h2>
            <p className="AvantLight text-sm sm:text-base lg:text-lg text-[#2C2C2C] leading-relaxed">
              At Jayson's Tree Service, we've built our reputation on safety, precision, and respect for your property. Whether it's Commercial Tree Services Los Angeles shopping centers trust or emergency Tree Removal Los Angeles homeowners need after storms, our experienced team delivers careful planning, expert execution, and spotless cleanups every time.
            </p>
            <p className="AvantLight text-sm sm:text-base lg:text-lg text-[#2C2C2C] leading-relaxed">
              We're not just a vendor—we're a family business that treats every residential yard and commercial complex with the same attention to detail. Our crews understand tight timelines, guest-facing properties, and the importance of zero-damage service. That's why property managers, HOAs, and families across Los Angeles County and Orange County call us first.
            </p>
          </div>
          <div className="relative h-full">
            <div className="rounded-3xl overflow-hidden h-full">
              <img 
                src={familyMain} 
                alt="Family owned tree service crew" 
                className="w-full h-full object-cover" 
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{ imageRendering: 'smooth' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 sm:px-16 py-10 sm:py-14 overflow-hidden">
        <img src={mwp3} alt="" className="absolute bottom-[15%] right-[8%] w-20 sm:w-28 opacity-15 pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200/50">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#6DC642]/5 rounded-bl-[100px] transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="Akria text-xl sm:text-2xl text-[#0F0F0F]">Licensed & Insured</h3>
              <p className="AvantLight text-sm sm:text-base text-[#2C2C2C] leading-relaxed">
                California State License, fully insured, and bonded. Every crew member is certified, and every job site is safety-led with OSHA-aligned protocols.
              </p>
            </div>
          </div>
          <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200/50">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#6DC642]/5 rounded-bl-[100px] transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <h3 className="Akria text-xl sm:text-2xl text-[#0F0F0F]">Full Equipment</h3>
              <p className="AvantLight text-sm sm:text-base text-[#2C2C2C] leading-relaxed">
                Cranes, lifts, chippers, and tracked equipment for any property. All covered under commercial-grade insurance with certified operators.
              </p>
            </div>
          </div>
          <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200/50">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#6DC642]/5 rounded-bl-[100px] transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="Akria text-xl sm:text-2xl text-[#0F0F0F]">Bonded & Trusted</h3>
              <p className="AvantLight text-sm sm:text-base text-[#2C2C2C] leading-relaxed">
                Bonded service for commercial clients. We meet property management insurance requirements and maintain clean safety records.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 sm:px-16 py-10 sm:py-14 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col gap-3 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6DC642] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="AvantBold uppercase text-sm text-[#6DC642]">Family-Owned Trust</p>
            </div>
            <h2 className="Akria text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Every property gets family-level care
            </h2>
            <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
              As a family-owned business, we know how important clear communication, punctual arrivals, and neighbor-friendly setups are. We're not a franchise—you'll work directly with experienced leads who own the outcome. From Palm Tree Trimming Los Angeles resort managers request to emergency Tree Removal Los Angeles County after windstorms, we show up ready with the right crew, right equipment, and respectful approach.
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={fw1} 
                alt="Family and crew" 
                className="w-full h-full aspect-[4/3] object-cover" 
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 sm:px-16 py-12 sm:py-20 overflow-hidden">
        <img src={mwp3} alt="" className="absolute top-[15%] right-[3%] w-16 sm:w-24 opacity-20 pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={fw6} 
                alt="Professional crew on site" 
                className="w-full h-full aspect-[3/4] object-cover" 
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-5 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#6DC642] flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[#6DC642] AvantBold uppercase text-sm tracking-wide">Mission • Values • Safety</p>
            </div>
            <h2 className="Akria text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Built for commercial demands, delivered with personal care
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#6DC642]/10 border border-[#6DC642]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
                  <strong className="AvantBold">Safety First:</strong> OSHA-aligned rigging, certified climbers, and daily safety briefings before every job start.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#6DC642]/10 border border-[#6DC642]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
                  <strong className="AvantBold">Clear Communication:</strong> Before, during, and after—you'll know the plan, timeline, and scope with no surprises.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#6DC642]/10 border border-[#6DC642]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
                  <strong className="AvantBold">Rapid Response:</strong> Emergency Tree Service LA teams mobilize fast for storm damage, blocked access, and hazardous limbs.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#6DC642]/10 border border-[#6DC642]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
                  <strong className="AvantBold">Spotless Cleanup:</strong> We leave properties guest-ready, tenant-safe, and neighbor-friendly with complete debris removal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 sm:px-16 py-10 sm:py-14 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-10 sm:mb-14">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6DC642] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-[#6DC642] AvantBold uppercase text-sm">Why We're Different</p>
            </div>
            <h2 className="Akria text-3xl sm:text-4xl leading-tight max-w-3xl">
              Commercial specialists with family values
            </h2>
            <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7 max-w-2xl">
              From Tree Trimming LA neighborhoods to large-scale commercial tree maintenance, we pair technical expertise with approachable service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                svg: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Commercial Specialists",
                body: "Shopping centers, retail plazas, HOAs, corporate campuses—handled with precision and minimal disruption.",
              },
              {
                svg: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                ),
                title: "24/7 Emergency Ready",
                body: "Storm damage, fallen trees, blocked driveways—crews dispatch immediately with lift and crane support.",
              },
              {
                svg: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Free Estimates",
                body: "Same-day site visits, transparent scopes, and detailed quotes for every residential and commercial project.",
              },
              {
                svg: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                ),
                title: "Experienced Crew",
                body: "Decades of combined climbing, rigging, and equipment coordination across diverse LA County properties.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#6DC642]/5 rounded-bl-[80px] transition-all duration-500 group-hover:w-24 group-hover:h-24"></div>
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center shadow-md transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <div className="text-white transition-all duration-300">
                      {item.svg}
                    </div>
                  </div>
                  <h3 className="Akria text-lg sm:text-xl text-[#0F0F0F]">{item.title}</h3>
                  <p className="AvantLight text-xs sm:text-sm leading-relaxed text-[#2C2C2C]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-16 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6DC642] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[#6DC642] AvantBold uppercase text-sm">Certifications & Trust</p>
            </div>
            <h2 className="Akria text-3xl sm:text-4xl leading-tight">
              Licensed, insured, and safety-certified crews
            </h2>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200/50">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantBold text-sm sm:text-base text-[#0F0F0F]">California State License #XXXXXX</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200/50">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantBold text-sm sm:text-base text-[#0F0F0F]">Fully Insured • General Liability & Workers' Comp</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200/50">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantBold text-sm sm:text-base text-[#0F0F0F]">Bonded & Background-Checked Crews</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200/50">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantBold text-sm sm:text-base text-[#0F0F0F]">Crane & Lift Certified Operators</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src={tc1} 
                alt="Certified crew on commercial site" 
                className="w-full h-56 sm:h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105" 
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src={tc2} 
                alt="Safety equipment and rigging" 
                className="w-full h-36 sm:h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" 
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 sm:px-16 py-10 sm:py-14 overflow-hidden">
        <img src={mwp3} alt="" className="absolute top-[10%] right-[5%] w-18 sm:w-26 opacity-15 pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-10 sm:mb-14">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6DC642] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[#6DC642] AvantBold uppercase text-sm">Service Hours & Availability</p>
            </div>
            <h2 className="Akria text-3xl sm:text-4xl leading-tight">
              Standard hours + 24/7 emergency dispatch
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 relative overflow-hidden">
              <img src={whyChoseLeaf3} alt="" className="absolute -right-8 -top-8 w-32 sm:w-40 opacity-20 object-contain" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center shadow-md">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="Akria text-xl sm:text-2xl text-[#0F0F0F]">Standard Service Hours</h3>
              </div>
              <div className="flex flex-col gap-3 AvantLight text-base leading-7 text-[#2C2C2C] relative z-10">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#6DC642]" aria-hidden="true" />
                  <p>Monday – Friday: 7:00 AM – 7:00 PM</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#6DC642]" aria-hidden="true" />
                  <p>Saturday: 8:00 AM – 5:00 PM</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#6DC642]" aria-hidden="true" />
                  <p>Sunday: By appointment for commercial projects</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#6DC642]" aria-hidden="true" />
                  <p>Same-day estimates available</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#358D0A] to-[#2D7308] text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="Akria text-xl sm:text-2xl">24/7 Emergency Response</h3>
              </div>
              <div className="flex flex-col gap-3 AvantLight text-base leading-7 text-white/90 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white" aria-hidden="true" />
                  <p>Storm damage & fallen trees</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white" aria-hidden="true" />
                  <p>Hazardous limbs over structures</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white" aria-hidden="true" />
                  <p>Blocked driveways & access routes</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white" aria-hidden="true" />
                  <p>Commercial property urgent clearance</p>
                </div>
              </div>
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

export default AboutPage;

