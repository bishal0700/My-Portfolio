const certificates = [
  { year: "2023", title: "Python Training", icon: "🐍" },
  { year: "2022", title: "Cyber Security & Ethical Hacking", icon: "🛡️" },
  { year: "2022", title: "Web Designing", icon: "🌐" },
  { year: "2021", title: "Diploma in Computer Application", icon: "💻" },
];

export default function Certificates() {
  return (
    <section className="section" id="certificates">
      <div className="container">
        <div className="section-label">05 — Recognition</div>
        <h2 className="section-heading">
          Certificates & <span className="accent">Publications</span>
        </h2>
        <div className="recog-grid">
          <div className="recog-col">
            <h3 className="recog-subtitle">Certifications</h3>
            <div className="cert-list">
              {certificates.map((c, i) => (
                <div key={i} className="cert-card">
                  <div className="cert-icon">{c.icon}</div>
                  <div className="cert-body">
                    <div className="cert-title">{c.title}</div>
                    <div className="cert-year">{c.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="recog-col">
            <h3 className="recog-subtitle">Publications</h3>
            <div className="pub-card">
              <div className="pub-platform">
                <span className="pub-badge">IEEE Xplore</span>
                <span className="pub-date">June 2023</span>
              </div>
              <h4 className="pub-title">
                A Robust Hybrid Cryptosystem Based on DNA Steganography
              </h4>
              <p className="pub-desc">
                Research on a novel cryptographic approach combining DNA-based steganography
                with hybrid encryption — presented and published at IEEE Xplore.
              </p>
              <a
                href="https://ieeexplore.ieee.org"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-sm"
              >
                View on IEEE ↗
              </a>
            </div>

            <h3 className="recog-subtitle" style={{ marginTop: "2rem" }}>Talks</h3>
            <div className="talk-card">
              <div className="talk-date">Nov. 2021</div>
              <p className="talk-desc">
                Mentored first semester students during their Three (3) Weeks Induction Program
                at Tripura Institute of Technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
