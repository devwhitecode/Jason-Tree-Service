import { useEffect, useRef, useState } from "react";
import Angi from "../../Jasons Tree/assets/svg/Angi.svg";

const reviews = [
  {
    text: "Job well done.",
    author: "Curtis R.",
    rating: 5,
    location: "Ventura, CA",
  },
  {
    text: "Excellent job guys . It looks great",
    author: "Janet G.",
    rating: 5,
    location: "Ventura, CA",
  },
  {
    text: "Very professional and efficient. Hired him to cut a tree, was on time and Did a great job!!! Highly recommend!",
    author: "Evelyn R.",
    rating: 5,
    location: "Ventura, CA",
  },
  {
    text: "Jayson's Tree Services came out quickly and gave us a bid. It was very reasonable, and they removed the tree the next day! They were prompt and did careful, safe and thorough work. They cleaned up the site and even put a tarp over the damaged roof area! I was very pleased with their work and would hire them again!",
    author: "Lori J.",
    rating: 5,
    location: "Ventura, CA",
  },
  {
    text: "They worked fast, efficiently and safely, leaving the property in pristine condition. Their price was very competitive and their service top notch. They did work beyond the scope of the proposed estimate and had excellent communication with us on a daily basis. We plan on hiring them again for the next phase of our landscaping work.",
    author: "Patria C.",
    rating: 5,
    location: "Ventura, CA",
  },
  {
    text: "They were on time both for the estimate and the work. The work was done completely and professionally and the cleanup was unbelievably good. I highly recommend them and I'd rehire them in a heartbeat.",
    author: "Robert B.",
    rating: 5,
    location: "Ventura, CA",
  },
];

const ClientReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetAutoplay = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="section6 h-fit py-20 w-full px-5 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 items-start">
          {/* Left Side - Info */}
          <div className="w-full sm:w-[25%] flex flex-col gap-6">
            <div className="flex flex-col items-center sm:items-start gap-6">
              <h1 className="text-[#0F0F0F] Akria text-3xl sm:text-4xl font-bold text-center sm:text-start leading-tight">
                CLIENT <br />
                REVIEWS
              </h1>
              <img className="w-[50%] sm:w-[60%] hover:scale-105 transition-transform duration-300" src={Angi} alt="Angi Reviews" />
            </div>
            
            <p className="AvantLight text-base sm:text-lg leading-7 text-[#2C2C2C] font-medium text-center sm:text-left">
              Our clients consistently highlight our fast response times, professional crew, and high-quality results. From homeowners to large commercial property managers, we're trusted across Los Angeles and Orange County for reliable, safe, and efficient tree services.
            </p>
            <a
              href="https://www.angi.com/companylist/us/ca/ventura/jayson%27s-tree-services-reviews-9978565.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#6DC642] text-[#356020] py-3 px-6 w-fit mx-auto sm:mx-0 rounded-b-2xl rounded-tl-2xl AvantBold hover:bg-[#6DC642] hover:text-white hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer inline-block"
            >
              View more reviews
            </a>
            
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('highlightContactForm'));
              }}
              className="bg-[#6DC642] py-3 px-6 w-fit mx-auto sm:mx-0 rounded-b-2xl rounded-tl-2xl AvantBold text-white hover:bg-white hover:text-[#356020] hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer inline-block"
            >
              Book an Appointment
            </a>
          </div>

          {/* Right Side - Reviews Slider */}
          <div className="w-full sm:w-[75%]">
            <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md p-10 sm:p-14 rounded-3xl shadow-2xl border border-gray-100">
              {/* Stars */}
              <div className="flex gap-2 justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-7 h-7 sm:w-9 sm:h-9 text-[#6DC642] drop-shadow-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Content */}
              <div className="relative min-h-[260px] sm:min-h-[240px] mb-8">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === activeIndex
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    {/* Author moved to top */}
                    <div className="flex justify-center mb-2 sm:mb-3">
                      <p className="AvantBold text-sm sm:text-lg text-[#356020] text-center">
                        {review.author}
                      </p>
                    </div>
                    
                    <p className="Akria text-sm sm:text-lg text-[#0F0F0F] text-center leading-relaxed px-1 sm:px-4 break-words" style={{ lineHeight: '1.6', letterSpacing: '0.3px' }}>
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>


              {/* Pagination Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setActiveIndex(index);
                      resetAutoplay();
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-[#6DC642] w-10 shadow-lg"
                        : "bg-gray-300 w-2.5 hover:bg-gray-400 hover:w-4"
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-6 px-2">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-[#6DC642] to-[#5AB032] rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      width: `${((activeIndex + 1) / reviews.length) * 100}%`,
                      boxShadow: '0 0 12px rgba(109, 198, 66, 0.6)'
                    }}
                  />
                </div>
                <p className="AvantLight text-xs text-center text-gray-500 mt-3">
                  Review {activeIndex + 1} of {reviews.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
