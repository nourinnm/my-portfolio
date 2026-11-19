import "../styles/Contact.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowLeft,
} from "react-icons/fa";

function Contact() {
  return (
   <motion.section
  className="contact-page"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="contact-content">

            {/* Contact Details */}
            <div className="contact-details">

              <p>📍 Kakkanad, Kerala, India</p>

              <p>
                📧{" "}
                <a href="mailto:nourinnm116@gmail.com">
                  nourinnm116@gmail.com
                </a>
              </p>

              <p>
                📱{" "}
                <a href="tel:+918848651352">
                  +91 8848651352
                </a>
              </p>

            </div>

            {/* Social Links */}
            <div className="social-links">

              <a
                href="https://github.com/nourinnm"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/nourin-nm2005"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://instagram.com/nour.iih"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
                Instagram
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="back-home">
  <Link to="/" className="home-link">
    <button className="home-btn">
      <FaArrowLeft className="arrow-icon" />
      <span>Back to Home</span>
    </button>
  </Link>
</div>

    </motion.section>
  );
}

export default Contact;