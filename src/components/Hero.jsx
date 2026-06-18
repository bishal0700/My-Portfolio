import { useEffect, useState } from "react";

const titles = ["Website Designer", "Frontend Developer", "CS Engineer", "Blockchain Explorer"];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIdx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIdx]);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="grid-overlay" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">Available for opportunities</div>
        <h1 className="hero-name">
          Bishal <span className="accent">Bhowmik</span>
        </h1>
        <div className="hero-title">
          <span className="prompt">&gt;&nbsp;</span>
          <span className="typed">{displayed}</span>
          <span className="cursor">|</span>
        </div>
        <p className="hero-bio">
          Computer Science & Engineering graduate from TIT · Building web experiences,
          exploring blockchain & AI, published researcher at IEEE Xplore.
        </p>
        <div className="hero-links">
          <a href="mailto:bishal.bw22@gmail.com" className="btn btn-primary">
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/bishal-bhowmik-68764b201"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/bishal0700"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
