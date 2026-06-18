const experiences = [
  {
    period: "Present",
    role: "Website Designer",
    org: "GA Digital Web Word Pvt. Ltd.",
    location: "Indranagar, Agartala",
    desc: "Designing and developing the State Portal for the Department of Information Technology, Government of Tripura.",
    tags: ["Web Design", "Govt Portal", "UI/UX"],
    current: true,
  },
  {
    period: "June 2025",
    role: "Project Assistant",
    org: "IBITF Project · Tripura University",
    location: "Agartala",
    desc: "Development of a Platform for Tripura's Handicraft Empowerment using Ensemble Technologies based on Blockchain, AI and ML.",
    tags: ["Blockchain", "AI/ML", "Research"],
  },
  {
    period: "July 2023",
    role: "Final Year Project",
    org: "Tripura Institute of Technology",
    location: "Agartala",
    desc: "A Robust Hybrid Cryptosystem Based on DNA Steganography — published on IEEE Xplore.",
    tags: ["Cryptography", "IEEE", "Research"],
  },
  {
    period: "Sept. 2022",
    role: "Industrial Training & Mini Project",
    org: "Ardent Computech Pvt Ltd",
    location: "Kolkata",
    desc: "Cyber Security & Ethical Hacking with Python. Web Application Penetration Testing.",
    tags: ["Cybersecurity", "Python", "Pen Testing"],
  },
  {
    period: "April 2022",
    role: "Industrial Training",
    org: "NIELIT, Agartala Centre",
    location: "Agartala",
    desc: "Industrial Training on Web Designing — HTML, CSS, fundamentals of frontend development.",
    tags: ["Web Design", "HTML/CSS"],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-label">03 — Experience</div>
        <h2 className="section-heading">
          Work & <span className="accent">Projects</span>
        </h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className={`timeline-item ${exp.current ? "timeline-current" : ""}`}>
              <div className="timeline-marker">
                <div className="timeline-dot" />
                {i < experiences.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-body">
                <div className="timeline-period">
                  {exp.current && <span className="live-dot" />}
                  {exp.period}
                </div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-org">
                      {exp.org} · <span className="timeline-loc">{exp.location}</span>
                    </div>
                  </div>
                  <p className="timeline-desc">{exp.desc}</p>
                  <div className="tag-list">
                    {exp.tags.map((t) => (
                      <span key={t} className="tag tag-sm">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
