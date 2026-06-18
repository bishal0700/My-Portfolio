import { useEffect, useState } from "react";
import profilePhoto from "../static/photo/Image.jpg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="#" className="nav-logo">
        <img src={profilePhoto} alt="Profile photo" className="nav-photo" />
      </a>
      <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="nav-link"
              onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? "bar bar-open-1" : "bar"} />
        <span className={menuOpen ? "bar bar-open-2" : "bar"} />
        <span className={menuOpen ? "bar bar-open-3" : "bar"} />
      </button>
    </nav>
  );
}
