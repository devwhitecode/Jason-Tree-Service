import { useEffect, useRef, useState } from "react";
import Angi from "../../Jasons Tree/assets/svg/Angi.svg";

const reviews = [
  {
    text: "Fast, professional and great pricing. They cleaned everything perfectly. Highly recommend Jayson's Tree Service!",
    author: "Maria Rodriguez",
    rating: 5,
    location: "Los Angeles, CA"
  },
  {
    text: "Excellent service! The crew was professional, efficient, and the cleanup was thorough. They transformed my backyard!",
    author: "John Davidson",
    rating: 5,
    location: "Orange County, CA"
  },
  {
    text: "Quick response for emergency tree removal after the storm. Great job, fair price, and very professional. Will use again!",
    author: "Sarah Mitchell",
    rating: 5,
    location: "Irvine, CA"
  },
  {
    text: "Best tree service in LA! They removed three large trees safely and cleaned up perfectly. The team was courteous and skilled.",
    author: "Robert Chen",
    rating: 5,
    location: "Pasadena, CA"
  },
  {
    text: "Outstanding work on our commercial property. They handle all our tree maintenance needs professionally and on schedule. Highly satisfied!",
    author: "Jennifer Martinez",
    rating: 5,
    location: "Santa Ana, CA"
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
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 items-start">
          {/* Left Side - Info */}
          <div className="w-full sm:w-[40%] flex flex-col gap-6">
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
          <div className="w-full sm:w-[60%]">
            <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-100">
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
              <div className="relative min-h-[180px] sm:min-h-[200px] mb-8">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === activeIndex
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <svg className="w-10 h-10 sm:w-14 sm:h-14 text-[#6DC642] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    <p className="Akria text-base sm:text-xl text-[#0F0F0F] text-center leading-relaxed px-1 sm:px-4 max-h-[180px] sm:max-h-[160px] overflow-hidden" style={{ lineHeight: '1.6', letterSpacing: '0.3px' }}>
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Author Info - Fixed height section */}
              <div className="relative h-16 sm:h-20 mb-6">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 flex flex-col items-center justify-center ${
                      index === activeIndex
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <p className="AvantBold text-base sm:text-xl text-[#356020] text-center">
                      {review.author}
                    </p>
                    <p className="AvantLight text-xs sm:text-base text-[#6DC642] text-center mt-2 flex items-center justify-center gap-1 sm:gap-2">
                      <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {review.location}
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
