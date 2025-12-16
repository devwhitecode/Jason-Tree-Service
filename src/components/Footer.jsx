import footerLeaf1 from "../../Jasons Tree/assets/images/footerleaf-1.png";
import footerLogo from "../../Jasons Tree/assets/images/footerlogo.png";
import phoneIcon from "../../Jasons Tree/assets/svg/phone.svg";
import clockIcon from "../../Jasons Tree/assets/svg/clock.svg";
import emailIcon from "../../Jasons Tree/assets/svg/email.svg";

const Footer = ({ onNavigate }) => (
  <div className="relative footer w-full flex items-center justify-center text-white AvantLight pt-0 sm:pt-10">
    <img
      className="absolute w-[20%] sm:w-[12%] left-0 -top-10 sm:-top-18 z-[9990] cursor-pointer"
      style={{
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(15px, -12px) rotate(12deg) scale(1.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
      }}
      src={footerLeaf1}
      alt=""
    />
    <div className="bg-[#356020] w-full max-sm:px-4 sm:w-[90%] h-full rounded-t-[20px] sm:rounded-t-[100px] pb-6">
      <div className="footertop h-fit w-full flex flex-col sm:flex-row items-center sm:items-end justify-between pt-[25px] sm:pt-[25px]">
        <img className="w-[50%] sm:w-[25%] pl-0 sm:pl-20" src={footerLogo} alt="Logo" />
        <div className="w-full sm:w-[65%] flex flex-wrap pt-10 sm:pt-0 gap-8 sm:gap-5 justify-between pr-5 text-sm font-semibold">
          <div className="flex flex-col gap-2">
            <h1 className="uppercase AvantBold">Quick Links</h1>
            <a 
              href="/about" 
              onClick={(e) => { e.preventDefault(); onNavigate?.('about'); }}
              className="hover:text-[#6DC642] transition-all duration-300 hover:translate-x-2 cursor-pointer"
            >
              About Us
            </a>
            <a 
              href="/why-choose-us" 
              onClick={(e) => { e.preventDefault(); onNavigate?.('why-choose-us'); }}
              className="hover:text-[#6DC642] transition-all duration-300 hover:translate-x-2 cursor-pointer"
            >
              Why Choose Us
            </a>
            <a 
              href="/services" 
              onClick={(e) => { e.preventDefault(); onNavigate?.('services'); }}
              className="hover:text-[#6DC642] transition-all duration-300 hover:translate-x-2 cursor-pointer"
            >
              Services
            </a>
            <a 
              href="/gallery" 
              onClick={(e) => { e.preventDefault(); onNavigate?.('gallery'); }}
              className="hover:text-[#6DC642] transition-all duration-300 hover:translate-x-2 cursor-pointer"
            >
              Gallery
            </a>
            <a 
              href="/contact" 
              onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}
              className="hover:text-[#6DC642] transition-all duration-300 hover:translate-x-2 cursor-pointer"
            >
              Contact Us
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="uppercase AvantBold">SERVICE AREAS</h1>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Los+Angeles+County,+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6DC642] transition-all duration-300 hover:translate-x-2 cursor-pointer"
            >
              Los Angeles County
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Orange+County,+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6DC642] transition-all duration-300 hover:translate-x-2 cursor-pointer"
            >
              Orange County
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Irvine,+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6DC642] transition-all duration-300 hover:translate-x-2 cursor-pointer"
            >
              Irvine
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Los+Angeles+Metropolitan+Area,+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6DC642] transition-all duration-300 hover:translate-x-2 cursor-pointer"
            >
              Surrounding Cities
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a 
              href="tel:+18055353739" 
              className="flex gap-2 items-center hover:text-[#6DC642] transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <img className="w-[7%] transition-transform duration-300 group-hover:rotate-12" src={phoneIcon} alt="Phone" />
              <h1 className="text-lg">(805) 535-3739</h1>
            </a>
            <a 
              href="tel:+13237933516" 
              className="flex gap-2 items-center hover:text-[#6DC642] transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <img className="w-[7%] transition-transform duration-300 group-hover:rotate-12" src={phoneIcon} alt="Phone" />
              <h1 className="text-lg">(323) 793-3516</h1>
            </a>
            <div className="flex gap-2">
              <img className="w-[7%]" src={clockIcon} alt="Clock" />
              <span className="leading-tight">
                <h1>
                  <span className="uppercase AvantBold">24/7 </span>Emergency
                </h1>
                <h1>Response Available</h1>
              </span>
            </div>
            <a 
              href="mailto:info@jaysonstreeservice.com" 
              className="flex gap-2 items-center hover:text-[#6DC642] transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <img className="w-[7%] transition-transform duration-300 group-hover:scale-110" src={emailIcon} alt="Email" />
              <h1 className="AvantLight font-lg font-semibold">info@jaysonstreeservice.com</h1>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row items-start items-center text-center sm:justify-between sm:px-10 py-10 gap-10 text-sm">
        <div className="text-center">
          <h1 className="AvantBold">
            Professional Commercial & <br />
            Residential Tree Care
          </h1>
          <p>
            Serving Los Angeles & Orange County <br />
            • 24/7 Emergency Response
          </p>
        </div>
        <div>
          <h1 className="AvantBold">Ready to schedule your service?</h1>
          <p className="hidden sm:block">
            Book your free estimate and get fast, reliable tree care <br />
            for your home or commercial property.
          </p>
          <p className="sm:hidden block">
            Book your free estimate and get fast, reliable tree care for
            your home or commercial property.
          </p>
        </div>
        <a
          href="#contact-form"
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event('highlightContactForm'));
          }}
          className="bg-[#6DC642] py-2 px-4 w-fit h-fit rounded-b-full rounded-tl-full AvantBold hover:bg-white/70 hover:border-2 hover:border-[#0F0F0F] hover:text-[#356020] hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer inline-block"
        >
          Book an Appointment
        </a>
      </div>

      <div className="w-full flex flex-col sm:flex-row text-center justify-between text-xs sm:px-20">
        <p>Privacy Policy | Your Privacy Choices</p>
        <p>
          © 2025 JAYSON'S TREE SERVICE . All Rights Reserved.
          <span className="text-[#6DC642]">Web Design</span> By Latin Branding
        </p>
      </div>
    </div>
  </div>
);

export default Footer;

