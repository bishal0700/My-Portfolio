import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML & CSS", level: 90, color: "#e96228" },
  { name: "JavaScript", level: 78, color: "#f7df1e" },
  { name: "Python", level: 72, color: "#3776ab" },
  { name: "MySQL", level: 75, color: "#00758f" },
  { name: "Java", level: 60, color: "#ed8b00" },
  { name: "J2EE", level: 55, color: "#5382a1" },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="skill-row">
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-track">
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

export default function Skills() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
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
              <SkillBar key={s.name} {...s} animate={animate} />
            ))}
          </div>
          <div className="skills-summary">
            <div className="summary-card">
              <div className="summary-icon">🎓</div>
              <div className="summary-stat">8.05</div>
              <div className="summary-desc">B.Tech CGPA — TIT</div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">📄</div>
              <div className="summary-stat">1</div>
              <div className="summary-desc">IEEE Publication</div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">🏢</div>
              <div className="summary-stat">3+</div>
              <div className="summary-desc">Years Experience</div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">🏆</div>
              <div className="summary-stat">4</div>
              <div className="summary-desc">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
