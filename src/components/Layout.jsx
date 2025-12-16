import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import ScrollProgress from "./ScrollProgress";
import ScrollToTop from "./ScrollToTop";

const routeMap = {
  home: "/",
  about: "/about",
  "why-choose-us": "/why-choose-us",
  services: "/services",
  gallery: "/gallery",
  contact: "/contact",
};

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (target) => {
    setMenuOpen(false);
    setActiveSection(target);

    const nextRoute = routeMap[target] || "/";
    if (location.pathname !== nextRoute) {
      navigate(nextRoute);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveSection("home");
      return;
    }
    if (path.startsWith("/about")) {
      setActiveSection("about");
      return;
    }
    if (path.startsWith("/why-choose-us")) {
      setActiveSection("why-choose-us");
      return;
    }
    if (path.startsWith("/services")) {
      setActiveSection("services");
      return;
    }
    if (path.startsWith("/gallery")) {
      setActiveSection("gallery");
      return;
    }
    if (path.startsWith("/contact")) {
      setActiveSection("contact");
      return;
    }
    setActiveSection("home");
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const selectors = "h1,h2,h3,h4,h5,h6,p,button,img,div[class*='card']";
    const elements = document.querySelectorAll(selectors);
    if (!elements.length) return;

    const animationClasses = ["fade-up", "fade-left", "fade-right", "fade-zoom", "fade-rotate"];

    elements.forEach((el, index) => {
      // Skip if already animated or is a leaf image
      if (el.classList.contains("scroll-animate") || el.classList.contains("leaf-float")) return;
      
      // Skip if parent has scroll-animate (avoid nested animations)
      if (el.closest(".scroll-animate")) return;
      
      // Skip spans inside buttons/links (they're usually decorative)
      if (el.tagName === "SPAN" && (el.closest("button") || el.closest("a"))) return;
      
      // Choose animation based on element type and position
      let animationClass;
      if (el.tagName === "H1" || el.tagName === "H2") {
        animationClass = "fade-up";
      } else if (el.tagName === "BUTTON") {
        animationClass = "fade-zoom";
      } else if (el.tagName === "IMG" && !el.closest("header")) {
        animationClass = "fade-rotate";
      } else {
        animationClass = animationClasses[index % animationClasses.length];
      }
      
      el.classList.add("scroll-animate", animationClass);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            // Add slight delay for smoother appearance
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const leaves = document.querySelectorAll('img[src*="leaf"]');
    const bgPatterns = document.querySelectorAll('img[src*="mwp"]');
    
    if (!leaves.length && !bgPatterns.length) return;

    leaves.forEach((leaf, index) => {
      leaf.classList.add("leaf-float", "leaf-item");
      leaf.dataset.leafIndex = index.toString();
    });

    bgPatterns.forEach((pattern, index) => {
      pattern.classList.add("bg-pattern");
      pattern.dataset.patternIndex = index.toString();
    });

    let rafId;
    const updateElements = () => {
      const scrollY = window.scrollY;
      const time = Date.now() * 0.001;
      const range = window.innerWidth < 640 ? 20 : 40;
      
      leaves.forEach((leaf) => {
        const index = Number.parseInt(leaf.dataset.leafIndex || "0", 10);
        
        // More dynamic floating with combined sine waves
        const offsetY = Math.sin((scrollY + index * 100) / 100 + time * 0.6) * range;
        const offsetX = Math.cos((scrollY + index * 150) / 130 + time * 0.4) * (range * 0.6);
        const rotation = Math.sin((scrollY + index * 80) / 80 + time * 0.5) * 8;
        
        leaf.style.setProperty("--leaf-scroll", `${offsetY}px`);
        leaf.style.setProperty("--leaf-scroll-x", `${offsetX}px`);
        leaf.style.setProperty("--leaf-scroll-rotate", `${rotation}deg`);
      });

      // Subtle parallax for background patterns
      bgPatterns.forEach((pattern) => {
        const index = Number.parseInt(pattern.dataset.patternIndex || "0", 10);
        const rect = pattern.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const scrollProgress = (scrollY - elementTop + window.innerHeight) / (window.innerHeight + rect.height);
        
        // Very subtle movement
        const moveY = (scrollProgress - 0.5) * 15;
        const moveX = Math.sin(scrollProgress * Math.PI + index) * 8;
        
        pattern.style.transform = `translateY(${moveY}px) translateX(${moveX}px)`;
      });
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateElements();
        rafId = 0;
      });
    };

    // Continuous animation
    const animate = () => {
      updateElements();
      requestAnimationFrame(animate);
    };
    animate();

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
        activeSection={activeSection}
      />
      <Header
        onNavigate={handleNavigate}
        onMenuToggle={() => setMenuOpen((prev) => !prev)}
        isMenuOpen={menuOpen}
        activeSection={activeSection}
      />
      <ScrollToTop />
      <Outlet context={{ onNavigate: handleNavigate, activeSection }} />
    </>
  );
};

export default Layout;

