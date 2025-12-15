import logo from "../../Jasons Tree/assets/images/logo.png";
import mobileMenuButton from "../../Jasons Tree/assets/svg/mobileMenuButton.svg";
import leafIcon from "../../Jasons Tree/assets/svg/mobildeMenuLeafsvg.svg";

const navLeft = [
  { label: "Home", key: "home", highlight: true },
  { label: "About Us", key: "about" },
  { label: "Why Choose Us", key: "why-us" },
];

const navRight = [
  { label: "Services>", key: "services" },
  { label: "Gallery", key: "gallery" },
  { label: "Contact Us", key: "contact" },
];

const Header = ({ onNavigate, onMenuToggle, isMenuOpen }) => {
  const renderLink = ({ label, key, highlightIcon }) => (
    <a
      href={`#${key}`}
      onClick={(event) => {
        event.preventDefault();
        onNavigate?.(key);
      }}
      className="AvantLight flex justify-start items-center gap-1 text-base"
      aria-label={`Go to ${label}`}
    >
      {highlightIcon && (
        <img src={leafIcon} alt="" className="w-6" aria-hidden="true" />
      )}
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 w-full px-4 py-5 sm:py-8 flex justify-between sm:justify-center items-center gap-20 z-[999] AvantLight">
      <div className="hidden sm:flex justify-start text-[#0F0F0F] items-center gap-10 text-base">
        {navLeft.map((link) => (
          <span key={link.key}>{renderLink({ ...link, highlightIcon: link.highlight })}</span>
        ))}
      </div>
      <img src={logo} alt="Jason's Tree Service Logo" className="w-16 sm:w-24" />
      <div className="hidden sm:flex justify-start text-[#0F0F0F] items-center gap-10 text-base">
        {navRight.map((link) => (
          <span key={link.key}>
            {renderLink({ ...link, highlightIcon: link.key === "services" })}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={onMenuToggle}
        className="flex justify-start items-center gap-2 sm:hidden text-[#0F0F0F] text-lg hover:text-[#6DC642] transition-colors duration-300"
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

