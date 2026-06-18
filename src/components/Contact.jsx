export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-label">06 — Contact</div>
        <h2 className="section-heading">
          Let's <span className="accent">Connect</span>
        </h2>
        <div className="contact-grid">
          <div className="contact-text">
            <p>
              Open to freelance work, collaborations, and full-time opportunities.
              Whether you have a project in mind or just want to say hi — reach out!
            </p>
            <div className="contact-links">
              {[
                { icon: "✉", label: "bishal.bw22@gmail.com", href: "mailto:bishal.bw22@gmail.com" },
                { icon: "📞", label: "+91 9077610409", href: "tel:+919077610409" },
                { icon: "in", label: "Bishal Bhowmik", href: "https://linkedin.com/in/bishal-bhowmik" },
                { icon: "⌥", label: "bishal0700", href: "https://github.com/bishal0700" },
              ].map(({ icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-link">
                  <span className="contact-icon">{icon}</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-cta">
            <div className="cta-card">
              <div className="cta-top">Currently available</div>
              <h3>Ready to work on your next project</h3>
              <a href="mailto:bishal.bw22@gmail.com" className="btn btn-primary btn-lg">
                Send a Message →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
