import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import "../App.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const [shrinkLogo, setShrinkLogo] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;

      setShowBg(window.scrollY > heroHeight);
      setShrinkLogo(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${showBg ? "navbar-bg" : ""}`}>

      {/* LOGO */}
      <div
        className={`logo ${shrinkLogo ? "shrink" : ""}`}
        onClick={() => scrollToSection("about")}
      >
        {/* <img
          src="/images/ASTERIX%20PRIMARY%20LOGO.png"
          alt="Logo"
          className="logo-img"
        /> */}
      </div>

      {/* DESKTOP NAV */}
      <ul className="nav-links">
        <li><button onClick={() => scrollToSection("about")}>About</button></li>
        <li><button onClick={() => scrollToSection("services")}>Services</button></li>
        <li><button onClick={() => scrollToSection("projects")}>Work</button></li>
        <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
      </ul>

      {/* ACTIONS */}
      <div className="nav-actions">
        <button
          className="nav-cta"
          onClick={() => scrollToSection("contact")}
        >
          Click Me
        </button>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* OVERLAY */}
      <div
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("services")}>Services</button>
        <button onClick={() => scrollToSection("projects")}>Work</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>

        <button
          onClick={() => scrollToSection("contact")}
          className="mobile-menu-button"
        >
          Get Started
        </button>
      </div>

    </nav>
  );
}

export default Navbar;