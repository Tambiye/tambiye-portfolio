import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../App.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section reveal">

      <span className="contact-label">Contact</span>

      <h2 className="contact-title">Let’s Build Something Great</h2>

      <p className="contact-text">
        Whether you need a frontend developer,
        content writer, or creative collaborator —
        I’m open to meaningful projects and opportunities.
      </p>

      <div className="contact-grid">

        {/* WhatsApp */}
        <a
          href="https://wa.me/2348144173449"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">
            <FaWhatsapp />
          </div>
          <div>
            <h3>WhatsApp</h3>
            <p>Chat with me</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sonia-tambiye-jamabo"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">
            <FaLinkedin />
          </div>
          <div>
            <h3>LinkedIn</h3>
            <p>Professional profile</p>
          </div>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/soniajamabo"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">
            <FaInstagram />
          </div>
          <div>
            <h3>Instagram</h3>
            <p>@soniajamabo</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:soniajamabo@gmail.com"
          className="contact-card"
        >
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <div>
            <h3>Email</h3>
            <p>Send a message</p>
          </div>
        </a>

      </div>
    </section>
  );
}