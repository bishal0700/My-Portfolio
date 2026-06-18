import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const skills = [
  { name: "HTML & CSS", level: 90, color: "#e96228" },
  { name: "JavaScript", level: 78, color: "#f7df1e" },
  { name: "Python", level: 72, color: "#3776ab" },
  { name: "MySQL", level: 75, color: "#00758f" },
  { name: "Java", level: 60, color: "#ed8b00" },
  { name: "J2EE", level: 55, color: "#5382a1" },
];

function SkillProgress({ name, level, color, animate }) {
  return (
    <div className="skill-row">
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div
        className="skill-track"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency ${level}%`}
      >
        <div
          className="skill-fill"
          style={{
            width: animate ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            transition: "width 1.1s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>
    </div>
  );
}

SkillProgress.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  color: PropTypes.string,
  animate: PropTypes.bool,
};

SkillProgress.defaultProps = { color: "#4f46e5", animate: false };

const stats = [
  { key: "cgpa", label: "B.Tech CGPA (TIT)", value: "8.05", svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2L3 7v6c0 5 4 9 9 9s9-4 9-9V7l-9-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
  { key: "publications", label: "IEEE Publications", value: "1", svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l7 7v11a2 2 0 0 1-2 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
  { key: "experience", label: "Years Experience", value: "3+", svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
  { key: "certs", label: "Certifications", value: "4", svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
];

export default function Skills() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion.current) {
      setAnimate(true);
      return undefined;
    }

    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3, rootMargin: "-10%" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section section-alt" id="skills" ref={ref}>
      <div className="container">
        <div className="section-label">02 — Skills</div>
        <h2 className="section-heading">
          Tech <span className="accent">Stack</span>
        </h2>
        <div className="skills-grid">
          <div className="skills-bars">
            {skills.map((s) => (
              <SkillProgress key={s.name} {...s} animate={animate} />
            ))}
          </div>
          <aside className="skills-summary" aria-labelledby="skills-summary-heading">
            <h3 id="skills-summary-heading" className="sr-only">Highlights</h3>
            {stats.map((st) => (
              <div key={st.key} className="summary-card">
                <div className="summary-icon" aria-hidden>{st.svg}</div>
                <div className="summary-stat">{st.value}</div>
                <div className="summary-desc">{st.label}</div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
