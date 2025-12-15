import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import ScrollProgress from "./ScrollProgress";
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

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const selectors = "h1,h2,h3,h4,h5,h6,p,span";
    const elements = document.querySelectorAll(selectors);
    if (!elements.length) return;

    const animationClasses = ["fade-up", "fade-left", "fade-right"];

    elements.forEach((el, index) => {
      if (el.classList.contains("scroll-animate")) return;
      el.classList.add(
        "scroll-animate",
        animationClasses[index % animationClasses.length]
      );
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const leaves = document.querySelectorAll('img[src*="leaf"]');
    if (!leaves.length) return;

    leaves.forEach((leaf, index) => {
      leaf.classList.add("leaf-float", "leaf-item");
      leaf.dataset.leafIndex = index.toString();
    });

    let rafId;
    const updateLeaves = () => {
      const scrollY = window.scrollY;
      const range = window.innerWidth < 640 ? 10 : 20;
      leaves.forEach((leaf) => {
        const index = Number.parseInt(leaf.dataset.leafIndex || "0", 10);
        const offset = Math.sin((scrollY + index * 100) / 120) * range;
        leaf.style.setProperty("--leaf-scroll", `${offset}px`);
      });
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateLeaves();
        rafId = 0;
      });
    };

    updateLeaves();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
      />
      <Header
        onNavigate={handleNavigate}
        onMenuToggle={() => setMenuOpen((prev) => !prev)}
        isMenuOpen={menuOpen}
      />
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default Layout;

