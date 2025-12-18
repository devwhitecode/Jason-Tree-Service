import { useLocation } from "react-router-dom";
import logo from "../../Jasons Tree/assets/images/logo.png";
import mobileMenuButton from "../../Jasons Tree/assets/svg/mobileMenuButton.svg";
import leafIcon from "../../Jasons Tree/assets/svg/mobildeMenuLeafsvg.svg";

const navLeft = [
  { label: "Home", key: "home" },
  { label: "About Us", key: "about" },
  { label: "Why Choose Us", key: "why-choose-us" },
];

const navRight = [
  { label: "Services", key: "services" },
  { label: "Gallery", key: "gallery" },
  { label: "Contact Us", key: "contact" },
];

const Header = ({ onNavigate, onMenuToggle, isMenuOpen, activeSection = "home" }) => {
  const location = useLocation();

  const renderLink = ({ label, key }) => {
    const pathHref = key === "home" ? "/" : `/${key}`;
    const isActive =
      activeSection === key ||
      (key === "services" && location.pathname === "/services");

    return (
      <a
        href={pathHref}
        onClick={(event) => {
          event.preventDefault();
          onNavigate?.(key);
        }}
        className={`AvantBold flex justify-start items-center gap-2 text-base transition-all duration-300 hover:text-[#6DC642] hover:-translate-y-1 group relative ${
          isActive ? "text-[#6DC642]" : ""
        }`}
        aria-label={`Go to ${label}`}
      >
        {isActive && (
          <img 
            src={leafIcon} 
            alt="" 
            className="w-6 transition-all duration-500 group-hover:rotate-[360deg]" 
            aria-hidden="true" 
          />
        )}
        <span className="relative">
          {label}
          <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6DC642] transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}></span>
        </span>
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full px-4 py-5 sm:py-8 flex justify-between sm:justify-center items-center gap-20 z-[999] AvantLight">
      <div className="hidden sm:flex justify-start text-[#0F0F0F] items-center gap-10 text-base">
        {navLeft.map((link) => (
          <span key={link.key}>{renderLink(link)}</span>
        ))}
      </div>
      <a 
        href="/"
        onClick={(event) => {
          event.preventDefault();
          onNavigate?.("home");
        }}
        className="cursor-pointer"
        aria-label="Go to homepage"
      >
        <img src={logo} alt="Jason's Tree Service Logo" className="w-16 sm:w-40" />
      </a>
      <div className="hidden sm:flex justify-start text-[#0F0F0F] items-center gap-10 text-base">
        {navRight.map((link) => (
          <span key={link.key}>{renderLink(link)}</span>
        ))}
      </div>
      <button
        type="button"
        onClick={onMenuToggle}
        className="flex justify-start items-center gap-2 sm:hidden text-[#0F0F0F] text-lg font-semibold sm:font-normal hover:text-[#6DC642] transition-colors duration-300"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <img
          src={mobileMenuButton}
          alt=""
          className={`w-5 transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
          }`}
        />
        Menu
      </button>
    </header>
  );
};

export default Header;

