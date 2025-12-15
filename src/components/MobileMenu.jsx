import { useEffect, useState } from "react";
import menuLeaf from "../../Jasons Tree/assets/svg/mobildeMenuLeafsvg.svg";
import mobileLogo from "../../Jasons Tree/assets/images/mobileLogo.png";
import mobileMenuButton from "../../Jasons Tree/assets/svg/mobileMenuButton.svg";

const MobileMenu = ({ isOpen, onClose, onNavigate }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const navItems = [
    { label: "Home", key: "home", style: "AvantBold text-3xl" },
    { label: "About us", key: "about" },
    { label: "Why Choose us", key: "why-us" },
    { label: "Services", key: "services" },
    { label: "Gallery", key: "gallery" },
    { label: "Contact us", key: "contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setShouldRender(false), 400);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <>
      {/* Backdrop with blur effect */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[99998] transition-opacity duration-400 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        className={`mobileMenu flex-col justify-start items-start fixed top-0 right-0 gap-16 w-[85%] max-w-md h-screen bg-[#356020] z-[99999] p-8 shadow-2xl transition-all duration-400 ease-out flex ${
          isAnimating ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Header with Logo and Close Button */}
        <div
          className={`flex w-full justify-between items-center transition-all duration-500 delay-100 ${
            isAnimating ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <img
            src={mobileLogo}
            alt="Mobile Logo"
            className={`w-20 transition-all duration-500 delay-150 ${
              isAnimating ? "scale-100 rotate-0" : "scale-75 -rotate-12"
            }`}
          />
          <button
            type="button"
            onClick={onClose}
            className="flex justify-start font-light items-center gap-2 sm:hidden text-white text-lg hover:text-[#6DC642] transition-colors duration-200"
            aria-label="Close mobile menu"
          >
            <img src={mobileMenuButton} alt="" className="w-5" />
            Menu
          </button>
        </div>

        {/* Navigation Items with Staggered Animation */}
        <div className="flex flex-col justify-start items-start gap-6 pl-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={`#${item.key}`}
              onClick={(event) => {
                event.preventDefault();
                onNavigate?.(item.key);
              }}
              className={`${
                item.style ?? "AvantLight text-2xl"
              } text-white flex justify-start items-center gap-2 hover:text-[#6DC642] hover:translate-x-2 transition-all duration-300 ${
                isAnimating ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: isAnimating ? `${200 + index * 80}ms` : "0ms",
              }}
              aria-label={`Go to ${item.label}`}
            >
              <img
                src={menuLeaf}
                alt=""
                className={`w-8 transition-transform duration-300 ${
                  item.key !== "services" ? "hidden" : ""
                }`}
              />
              {item.label}
            </a>
          ))}
        </div>

        {/* Book Appointment Button with Animation */}
        <button
          type="button"
          onClick={onClose}
          className={`mx-auto px-4 py-3 text-xl font-bold AvantBold bg-[#6DC642] rounded-2xl text-white rounded-tr-none transition-all duration-500 hover:bg-white hover:text-[#6DC642] hover:scale-105 hover:shadow-lg ${
            isAnimating ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-90"
          }`}
          style={{ transitionDelay: isAnimating ? "600ms" : "0ms" }}
        >
          Book an Appointment
        </button>
      </div>
    </>
  );
};

export default MobileMenu;

