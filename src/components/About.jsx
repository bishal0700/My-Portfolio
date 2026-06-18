export default function About() {
  const interests = ["Coding", "Designing", "Chess", "Cricket", "Volleyball"];
  const tools = ["Kali Linux", "Python", "MySQL", "HTML/CSS/JS", "MS Office", "Canva", "Google Workspace"];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-label">01 — About</div>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-heading">
              Who I <span className="accent">Am</span>
            </h2>
            <p>
              I'm a Computer Science & Engineering graduate from Tripura Institute
              of Technology (CGPA 8.05), currently working as a Website Designer at
              GA Digital Web Word Pvt. Ltd., building the State Portal for the Department
              of Information Technology, Agartala.
            </p>
            <p>
              Beyond design and development, I'm a researcher — my final year project
              on <em>A Robust Hybrid Cryptosystem Based on DNA Steganography</em> was
              published on IEEE Xplore. I'm currently contributing to Tripura University's
              IBITF Project, developing a Handicraft Empowerment Platform using
              Blockchain, AI, and ML.
            </p>
            <div className="about-meta">
              <div className="meta-item">
                <span className="meta-label">Nationality</span>
                <span className="meta-value">Indian</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Date of Birth</span>
                <span className="meta-value">01 January 2001</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Location</span>
                <span className="meta-value">Agartala, Tripura</span>
              </div>
            </div>
          </div>

          <div className="about-aside">
            <div className="aside-card">
              <h3 className="aside-title">Interests</h3>
              <div className="tag-list">
                {interests.map((i) => (
                  <span key={i} className="tag">{i}</span>
                ))}
              </div>
            </div>
            <div className="aside-card">
              <h3 className="aside-title">Tools & OS</h3>
              <div className="tag-list">
                {tools.map((t) => (
                  <span key={t} className="tag tag-alt">{t}</span>
                ))}
              </div>
            </div>
            <div className="aside-card">
              <h3 className="aside-title">Languages</h3>
              <div className="lang-list">
                {[
                  { lang: "Bengali", level: "Mother Tongue", dots: 5 },
                  { lang: "English", level: "C2", dots: 5 },
                  { lang: "Hindi", level: "C2", dots: 4 },
                ].map(({ lang, level, dots }) => (
                  <div key={lang} className="lang-item">
                    <div className="lang-info">
                      <span className="lang-name">{lang}</span>
                      <span className="lang-level">{level}</span>
                    </div>
                    <div className="lang-dots">
                      {[1,2,3,4,5].map((d) => (
                        <span key={d} className={`dot ${d <= dots ? "dot-filled" : ""}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
