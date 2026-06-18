const degrees = [
  {
    year: "2023",
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Tripura Institute of Technology (TIT)",
    score: "CGPA 8.05 (A)",
    highlight: true,
  },
  {
    year: "2019",
    degree: "12th Board — Higher Secondary",
    institution: "Bishalgarh Class 12 School",
    score: "64.40%",
  },
  {
    year: "2017",
    degree: "10th Board — Madhymik",
    institution: "Madhupur HS School",
    score: "78.57%",
  },
];

export default function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <div className="section-label">04 — Education</div>
        <h2 className="section-heading">
          Academic <span className="accent">Background</span>
        </h2>
        <div className="edu-grid">
          {degrees.map((d, i) => (
            <div key={i} className={`edu-card ${d.highlight ? "edu-card-highlight" : ""}`}>
              <div className="edu-year">{d.year}</div>
              <div className="edu-body">
                <h3 className="edu-degree">{d.degree}</h3>
                <div className="edu-institution">{d.institution}</div>
                <div className="edu-score">{d.score}</div>
              </div>
              {d.highlight && <div className="edu-badge">⭐ Top Score</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
