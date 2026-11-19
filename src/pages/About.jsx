import { useState } from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <section className="about-page">

      <div className="about-top">

        <motion.div
  className="about-left"
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>

          <div className="about-title">
            <h1>About Me</h1>
          </div>

          <p>
            Hi! I'm Nourin, a B.Tech Computer Science student passionate
            about creating modern and interactive web applications.
          </p>

          <p>
            I enjoy building responsive user interfaces using React,
            JavaScript, HTML, and CSS while continuously learning
            new technologies.
          </p>

          <p>
            My goal is to become a skilled Full Stack Developer and
            contribute to impactful software products that solve
            real-world problems.
          </p>
          <p>A student with strong interest in Web Development, App Development ,MERN Full 
stack . Additionally interested  in Cyber Security , Data Science, AI.</p>
          <div className="about-buttons">

  <motion.button
    className="know-more-btn"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay: 0.5 }}
    onClick={() =>
      document
        .getElementById("info-section")
        .scrollIntoView({ behavior: "smooth" })
    }
  >
    Know More About Me ↓
  </motion.button>

  <Link to="/projects">
    <motion.button
      className="projects-btn"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.7 }}
    >
      View Projects →
    </motion.button>
  </Link>

</div>

        </motion.div>

        
        <motion.div
  className="about-right"
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
          <img
            src={`${import.meta.env.BASE_URL}about.jpg`}
            alt="Nourin"
          />
        </motion.div>

      </div>

   

      <motion.div
  className="info-section"
  id="info-section"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  <div className="menu-container">

    <button
      className={activeTab === "personal" ? "active" : ""}
      onClick={() => setActiveTab("personal")}
    >
      Personal Info
    </button>

    <button
      className={activeTab === "education" ? "active" : ""}
      onClick={() => setActiveTab("education")}
    >
      Education
    </button>

    <button
      className={activeTab === "experience" ? "active" : ""}
      onClick={() => setActiveTab("experience")}
    >
      Experience
    </button>

    <button
      className={activeTab === "skills" ? "active" : ""}
      onClick={() => setActiveTab("skills")}
    >
      Skills
    </button>

  </div>

  <div className="content-container">

    {activeTab === "personal" && (
      <>
        <h2>Personal Info</h2>
        <p><i>I’m Nourin N M, a Computer Science Engineering student passionate about building modern, responsive, and user-friendly websites that bring ideas to life.</i></p>
        <div className="personal-grid">
          <div>
        <p><strong>Name:</strong> Nourin N M</p>
        <p><strong>Degree:</strong> B.Tech in Computer Science and Engineering</p>
        <p><strong>DOB:</strong>01 NOV 2005</p>
        <p><strong>Nationality:</strong>Indian</p>
        </div>
        <div>
          <p><strong>Phone:</strong>+91 8848651352</p>
        <p><strong>Location:</strong> kakkanad, Kerala, India</p>
        <p><strong>Email:</strong> nourinnm116@gmail.com</p>
        <p><strong>Languages known:</strong> English, Malayalam</p>
        </div>
        </div>
      </>
    )}

    {activeTab === "education" && (
      <>
        <h2>Education</h2>

        <div className="info-card">
          <h3>B.Tech in Computer Science and Engineering</h3>
          <p>KMEA ENGINEERING COLLEGE, KERALA</p>
          <p>2024 - 2028</p>
          
        </div>
        <div className="info-card">
          <h3>Higher Secondary</h3>
          <p>MAR COORILOSE MEMORIAL HSS, KERALA</p>
          <p>2022 - 2024</p>
          
        </div>
        <div className="info-card">
          <h3>SSLC</h3>
          <p>BETHLEHEM DAYARA HIGH SCHOOL, KERALA</p>
          <p>2022</p>
          
        </div>
      </>
    )}

    {activeTab === "experience" && (
      <>
        <h2>Experience</h2>

        <div className="info-card">
          <h3>PORTFOLIO BUILDERS</h3>
          <p>Working as Full stack Intern on React projects and UI development.</p>
        </div>

        <div className="info-card">
          <h3>SPECTRUM</h3>
          <p>Gained hands-on experience with Kali Linux and cybersecurity tools to understand network security, vulnerability assessment, and ethical hacking concepts.</p>
        </div>
      </>
    )}

    {activeTab === "skills" && (
      <>
        <h2>Skills</h2>

        <div className="skills-grid">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>Python</span>
          <span>C</span>
        </div>
      </>
    )}

  </div>

</motion.div>
    </section>
  );
}

export default About;