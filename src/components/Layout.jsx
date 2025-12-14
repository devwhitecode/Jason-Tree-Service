import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import ScrollToTop from "./ScrollToTop";

const sectionIds = {
  home: "home",
  about: "about",
  "why-us": "about",
  gallery: "gallery",
  contact: "contact",
};

const scrollToSection = (target) => {
  const id = sectionIds[target];
  if (!id) {
    return;
  }
  const element =
    typeof document !== "undefined" ? document.getElementById(id) : null;
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (target) => {
    setMenuOpen(false);

    if (target === "services") {
      if (location.pathname !== "/services") {
        navigate("/services");
      }
      return;
    }

    if (location.pathname !== "/") {
      setPendingScrollTarget(target);
      navigate("/");
      return;
    }

    scrollToSection(target);
  };

  useEffect(() => {
    if (location.pathname === "/" && pendingScrollTarget) {
      scrollToSection(pendingScrollTarget);
      setPendingScrollTarget(null);
    }
  }, [location.pathname, pendingScrollTarget]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
      />
      <Header
        onNavigate={handleNavigate}
        onMenuToggle={() => setMenuOpen((prev) => !prev)}
      />
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default Layout;

