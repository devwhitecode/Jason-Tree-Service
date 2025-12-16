import { useOutletContext } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import SlidingText from "../components/SlidingText";
import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import serviceHero from "../../Jasons Tree/assets/images/servicepageHero.png";
import heroMobile from "../../Jasons Tree/assets/images/newEditedBgmobile.png";

const ContactPage = () => {
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
            
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 sm:px-8 z-[50]">
              <h1
                className="relative text-center text-2xl sm:text-[36px] Akria text-[#0F0F0F] hero-heading"
                style={{ lineHeight: "1.2" }}
              >
                <span className="block sm:inline hero-text-line" style={{ animationDelay: '0.2s' }}>Book an</span>
                <br className="hidden sm:block" />
                <span className="text-[#358D0A] block sm:inline hero-text-line" style={{ animationDelay: '0.4s' }}>
                  Appointment
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <SlidingText text="24/7 Emergency Tree Service LA  •  Free Estimates  •  Palm Tree Trimming Los Angeles  •  Commercial Tree Services Los Angeles" />

      <section className="relative px-5 sm:px-16 py-12 sm:py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-10 sm:mb-14">
            <div className="w-14 h-14 rounded-full bg-[#6DC642] flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h2 className="Akria text-3xl sm:text-4xl leading-tight">
              Get in touch with us
            </h2>
            <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7 max-w-2xl">
              Ready to schedule Tree Removal Los Angeles, Palm Tree Trimming Los Angeles, or commercial maintenance? Contact our team for fast, professional service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Phone Card - Unique Style 1 */}
            <div className="group relative p-7 sm:p-8 rounded-3xl flex flex-col gap-4 transition-all duration-500 hover:-translate-y-3 border-2 border-[#6DC642]/20 hover:border-[#6DC642] overflow-hidden" 
                 style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(12px)' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6DC642]/5 rounded-full -translate-y-16 translate-x-16 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="relative flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="AvantBold uppercase text-xs sm:text-sm text-[#6DC642] tracking-widest">Call Us</p>
                  <p className="AvantLight text-xs text-[#0F0F0F] opacity-70">Direct Lines</p>
                </div>
              </div>
              <div className="relative space-y-3">
                <a href="tel:+18055353739" className="block AvantBold text-xl sm:text-2xl text-[#0F0F0F] hover:text-[#6DC642] transition-colors">
                  (805) 535-3739
                </a>
                <a href="tel:+13237933516" className="block AvantBold text-xl sm:text-2xl text-[#0F0F0F] hover:text-[#6DC642] transition-colors">
                  (323) 793-3516
                </a>
                <div className="pt-3 mt-3 border-t border-[#6DC642]/20">
                  <p className="AvantBold text-sm text-[#0F0F0F] bg-[#6DC642]/10 px-4 py-2 rounded-full inline-block">
                    🚨 24/7 Emergency Response
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas Card - Unique Style 2 */}
            <div className="group relative p-7 sm:p-8 rounded-3xl flex flex-col gap-4 transition-all duration-500 hover:-translate-y-3 border-2 border-[#6DC642]/20 hover:border-[#6DC642] overflow-hidden" 
                 style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(12px)' }}>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#6DC642]/5 rounded-full translate-y-12 -translate-x-12 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="relative flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="AvantBold uppercase text-xs sm:text-sm text-[#6DC642] tracking-widest">We Serve</p>
                  <p className="AvantLight text-xs text-[#0F0F0F] opacity-70">Service Coverage</p>
                </div>
              </div>
              <div className="relative space-y-3">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Los+Angeles+County,+CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 AvantLight text-base sm:text-lg text-[#0F0F0F] hover:text-[#6DC642] transition-all duration-300 group/link"
                >
                  <span className="text-[#6DC642] group-hover/link:translate-x-1 transition-transform">📍</span>
                  Los Angeles County
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Orange+County,+CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 AvantLight text-base sm:text-lg text-[#0F0F0F] hover:text-[#6DC642] transition-all duration-300 group/link"
                >
                  <span className="text-[#6DC642] group-hover/link:translate-x-1 transition-transform">📍</span>
                  Orange County
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Irvine,+CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 AvantLight text-base sm:text-lg text-[#0F0F0F] hover:text-[#6DC642] transition-all duration-300 group/link"
                >
                  <span className="text-[#6DC642] group-hover/link:translate-x-1 transition-transform">📍</span>
                  Irvine & Surrounding
                </a>
                <div className="pt-3 mt-3 border-t border-[#6DC642]/20">
                  <p className="AvantLight text-xs text-[#0F0F0F] opacity-70">
                    ✓ Licensed • Insured • Bonded
                  </p>
                </div>
              </div>
            </div>

            {/* Email & Hours Card - Unique Style 3 */}
            <div className="group relative p-7 sm:p-8 rounded-3xl flex flex-col gap-4 transition-all duration-500 hover:-translate-y-3 border-2 border-[#6DC642]/20 hover:border-[#6DC642] overflow-hidden md:col-span-2 lg:col-span-1" 
                 style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(12px)' }}>
              <div className="absolute top-1/2 right-0 w-28 h-28 bg-[#6DC642]/5 rounded-full -translate-y-1/2 translate-x-14 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="relative flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#6DC642] to-[#5AB032] flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="AvantBold uppercase text-xs sm:text-sm text-[#6DC642] tracking-widest">Email & Hours</p>
                  <p className="AvantLight text-xs text-[#0F0F0F] opacity-70">Get In Touch</p>
                </div>
              </div>
              <div className="relative space-y-3">
                <a 
                  href="mailto:info@jaysonstreeservice.com" 
                  className="block AvantBold text-sm sm:text-base text-[#0F0F0F] hover:text-[#6DC642] transition-colors break-all"
                >
                  📧 info@jaysonstreeservice.com
                </a>
                <div className="pt-3 mt-3 border-t border-[#6DC642]/20 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#6DC642]">🕐</span>
                    <p className="AvantLight text-sm text-[#0F0F0F]">
                      <span className="AvantBold">Standard:</span> 7am – 7pm
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#6DC642]">⚡</span>
                    <p className="AvantLight text-sm text-[#0F0F0F]">
                      <span className="AvantBold">Emergency:</span> 24/7 dispatch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <section id="contact" className="pb-0">
        <Footer onNavigate={onNavigate} />
      </section>
    </div>
  );
};

export default ContactPage;

