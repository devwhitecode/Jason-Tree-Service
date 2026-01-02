import { useState, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlidingText from "../components/SlidingText";
import Footer from "../components/Footer";
import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import heroDesktop from "../../Jasons Tree/assets/images/gallery_hero.jpg";
import heroMobile from "../../Jasons Tree/assets/images/gallery_hero.jpg";
import fw1 from "../../Jasons Tree/assets/images/fw-1.png";
import fw2 from "../../Jasons Tree/assets/images/fw-2.png";
import fw3 from "../../Jasons Tree/assets/images/fw-3.png";
import fw4 from "../../Jasons Tree/assets/images/fw-4.png";
import fw5 from "../../Jasons Tree/assets/images/fw-5.png";
import fw6 from "../../Jasons Tree/assets/images/fw-6.png";
import serviceCard1 from "../../Jasons Tree/assets/images/servicecardimage-1.png";
import serviceCard2 from "../../Jasons Tree/assets/images/servicecard-image-2.png";
import serviceCard3 from "../../Jasons Tree/assets/images/servicecard-image-3.png";
import tc1 from "../../Jasons Tree/assets/images/tc-1.png";
import tc2 from "../../Jasons Tree/assets/images/tc-2.png";
import tc3 from "../../Jasons Tree/assets/images/tc-3.png";
import tc4 from "../../Jasons Tree/assets/images/tc-4.png";
import tc5 from "../../Jasons Tree/assets/images/tc-5.png";
import newM1 from "../../Jasons Tree/assets/images/newM-1.png";
import newM2 from "../../Jasons Tree/assets/images/newM-2.png";
import newM3 from "../../Jasons Tree/assets/images/newM-3.png";
import newM4 from "../../Jasons Tree/assets/images/newM-4.png";
import flyer1 from "../../Jasons Tree/assets/images/FLYER 1.jpeg";
import flyer2 from "../../Jasons Tree/assets/images/FLYER 2.jpeg";
import flyer3 from "../../Jasons Tree/assets/images/FLYER 3.jpeg";
import flyer4 from "../../Jasons Tree/assets/images/FLYER 4.jpeg";
import flyer5 from "../../Jasons Tree/assets/images/FLYER 5.jpeg";
import flyer6 from "../../Jasons Tree/assets/images/FLYER 6.jpeg";
import flyer8 from "../../Jasons Tree/assets/images/FLYER 8.jpeg";
import flyer9 from "../../Jasons Tree/assets/images/FLYER 9.jpeg";
import flyer10 from "../../Jasons Tree/assets/images/FLYER 10.jpeg";
import flyerr7 from "../../Jasons Tree/assets/images/FLYERR 7.jpeg";
import flyerr9 from "../../Jasons Tree/assets/images/FLYERR 9.jpeg";
import flyerr10 from "../../Jasons Tree/assets/images/FLYERR 10.jpeg";
import flyer11 from "../../Jasons Tree/assets/images/flyer 11.jpeg";
import flyer12 from "../../Jasons Tree/assets/images/flyer 12.jpeg";
import flyer13 from "../../Jasons Tree/assets/images/flyer 13.webp";
import flyer14 from "../../Jasons Tree/assets/images/flyer 14.jpeg";
import flyer15 from "../../Jasons Tree/assets/images/flyer 15.jpeg";
import flyer16 from "../../Jasons Tree/assets/images/flyer 16.jpeg";
import flyer17 from "../../Jasons Tree/assets/images/flyer 17.webp";
import flyer18 from "../../Jasons Tree/assets/images/flyer 18 .jpeg";
import flyer19 from "../../Jasons Tree/assets/images/flyer 19.webp";
import flyer20 from "../../Jasons Tree/assets/images/flyer 20.jpeg";
import flyer7 from "../../Jasons Tree/assets/images/flyer 7.jpeg";
import flyerr18 from "../../Jasons Tree/assets/images/flyerr 18.jpeg";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { src: flyer1, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer2, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer3, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer4, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer5, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer6, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer7, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer8, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer9, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer10, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer11, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer12, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer13, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer14, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer15, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer16, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer17, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer18, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer19, category: "All", caption: "Jayson's Tree Service" },
  { src: flyer20, category: "All", caption: "Jayson's Tree Service" },
  { src: flyerr7, category: "All", caption: "Jayson's Tree Service" },
  { src: flyerr9, category: "All", caption: "Jayson's Tree Service" },
  { src: flyerr10, category: "All", caption: "Jayson's Tree Service" },
  { src: flyerr18, category: "All", caption: "Jayson's Tree Service" },
  { src: fw1, category: "Commercial Projects", caption: "Commercial tree clearing and maintenance for retail plaza" },
  { src: fw2, category: "Residential Work", caption: "Professional tree trimming for residential property" },
  { src: fw3, category: "Palm Tree Jobs", caption: "Palm tree trimming and maintenance Los Angeles" },
  { src: fw4, category: "Emergency Response", caption: "Emergency storm damage tree removal service" },
  { src: fw5, category: "Crew & Equipment", caption: "Professional crane-assisted tree removal operation" },
  { src: fw6, category: "Commercial Projects", caption: "Commercial property tree service and cleanup" },
  { src: serviceCard1, category: "Residential Work", caption: "Residential tree pruning and canopy maintenance" },
  { src: serviceCard2, category: "Crew & Equipment", caption: "Expert crew performing precision tree work" },
  { src: serviceCard3, category: "Palm Tree Jobs", caption: "Specialized palm tree care and shaping service" },
  { src: tc1, category: "Residential Work", caption: "Quality residential tree care by licensed professionals" },
  { src: tc2, category: "Commercial Projects", caption: "Large-scale commercial tree maintenance project" },
  { src: tc3, category: "Crew & Equipment", caption: "Professional equipment for safe tree removal" },
  { src: tc4, category: "Emergency Response", caption: "24/7 emergency tree service response team" },
  { src: tc5, category: "Residential Work", caption: "Complete residential tree trimming service" },
  { src: newM1, category: "Crew & Equipment", caption: "Expert arborists at work on tree care project" },
  { src: newM2, category: "Commercial Projects", caption: "Commercial tree service for business properties" },
  { src: newM3, category: "Residential Work", caption: "Professional tree maintenance for home landscapes" },
  { src: newM4, category: "Emergency Response", caption: "Rapid response emergency tree removal" },
];

const categories = [
  "All",
  "Commercial Projects",
  "Residential Work",
  "Palm Tree Jobs",
  "Emergency Response",
  "Crew & Equipment",
];

const GalleryPage = () => {
  const { onNavigate } = useOutletContext();
  const [filter, setFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);
  const galleryRef = useRef(null);
  const filterRef = useRef(null);

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".scroll-animate");
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Staggered gallery animation
  useEffect(() => {
    if (!galleryRef.current) return;

    const items = galleryRef.current.querySelectorAll(".gallery-item");
    
    gsap.fromTo(
      items,
      { 
        opacity: 0, 
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [filteredItems]);

  // Close lightbox with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && lightboxItem) {
        setLightboxItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxItem]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lightboxItem]);

  const handleCloseLightbox = () => {
    setLightboxItem(null);
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
                <span className="block sm:inline hero-text-line" style={{ animationDelay: '0.2s' }}>Our Work</span>
                <br className="hidden sm:block" />
                <span className="text-[#358D0A] block sm:inline hero-text-line" style={{ animationDelay: '0.4s' }}>
                  Gallery
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <SlidingText text="Commercial Projects • Residential Work • Palm Tree Trimming Los Angeles • Emergency Response • Tree Removal Los Angeles • Crew & Equipment" />

      <section ref={filterRef} className="relative px-5 sm:px-16 pt-0 pb-0 mt-8 sm:mt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-8 text-center scroll-animate fade-up">
            <div className="flex items-center justify-center gap-3 w-full pb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#6DC642] flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="Akria text-xl sm:text-2xl text-[#0F0F0F]">
                Filter <span className="text-[#6DC642]">Projects</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((cat, idx) => {
                const isActive = filter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFilter(cat)}
                    tabIndex={0}
                    aria-label={`Filter by ${cat}`}
                    className={`px-3 sm:px-4 py-2 text-xs sm:text-sm AvantBold uppercase rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-[#6DC642] text-white border-[#6DC642] shadow-lg scale-105"
                        : "text-[#0F0F0F] border-[#6DC642]/30 bg-white/50 hover:border-[#6DC642] hover:bg-[#6DC642]/10 hover:scale-105"
                    }`}
                    style={{ 
                      animationDelay: `${idx * 0.1}s`,
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section ref={galleryRef} className="relative px-5 sm:px-16 pb-12 sm:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {filteredItems.map((item, index) => (
            <figure
              key={`${item.src}-${item.category}-${index}`}
              className="gallery-item relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_12px_45px_rgba(109,198,66,0.35)] hover:-translate-y-2"
              onClick={() => setLightboxItem(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxItem(item);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${item.caption}`}
            >
              <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 group-hover:brightness-110"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#6DC642]/60 transition-all duration-500 rounded-2xl pointer-events-none" />
              </div>
              
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5 sm:p-6">
                <p className="AvantBold text-xs sm:text-sm uppercase text-[#6DC642] mb-1 tracking-wider">
                  {item.category}
                </p>
                <p className="AvantLight text-sm sm:text-base leading-relaxed">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact">
        <Footer onNavigate={onNavigate} />
      </section>

      {lightboxItem && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[99999] flex items-center justify-center px-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview modal"
          onClick={handleCloseLightbox}
        >
          <div 
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleCloseLightbox}
              tabIndex={0}
              aria-label="Close lightbox"
              className="absolute -top-12 sm:-top-14 right-0 text-white hover:text-[#6DC642] text-lg sm:text-xl AvantBold transition-all duration-300 hover:scale-110 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <span className="hidden sm:inline">Close</span>
              <span className="text-2xl">✕</span>
            </button>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl animate-scaleIn border-4 border-[#6DC642]/20">
              <div className="relative w-full bg-[#0F0F0F]">
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.caption}
                  className="w-full max-h-[70vh] sm:max-h-[75vh] object-contain"
                />
              </div>
              
              <div 
                className="bg-gradient-to-r from-[#0F0F0F] to-[#1a1a1a] text-white p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <p className="AvantBold text-sm sm:text-base uppercase text-[#6DC642] mb-2 tracking-wider">
                    {lightboxItem.category}
                  </p>
                  <p className="AvantLight text-base sm:text-lg leading-relaxed text-white/90">
                    {lightboxItem.caption}
                  </p>
                </div>
                
                <button
                  type="button"
                  onClick={handleCloseLightbox}
                  tabIndex={0}
                  aria-label="Close modal"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base AvantBold rounded-2xl rounded-tr-none bg-[#6DC642] text-white hover:bg-[#5AB032] hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(109,198,66,0.4)]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

