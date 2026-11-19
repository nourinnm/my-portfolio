import { Link } from "react-router-dom";
import "../styles/Home.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
function Home() {
  return (
    <section className="hero">

      <div className="bg-text">NOURIN</div>

      <motion.div
  className="hero-left"
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
        <h2>Hi I'm</h2>

        <h1>NOURIN</h1>

        <h3>N M</h3>

        <p>
          BTech Computer Science student and Frontend Developer passionate about creating modern, interactive web experiences.
        </p>
        <p>Currently exploring React, JavaScript, and UI/UX design to create engaging digital experiences.</p>

        <div className="hero-buttons">
          <a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="resume-btn"
>
  View Resume
</a>

          <a href="/about">
            <button className="secondary">
              Know More
            </button>
          </a>
        </div>
      </motion.div>

      <motion.div
  className="hero-center"
 
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}

>
        <img
          src={`${import.meta.env.BASE_URL}hero.jpg`}
          alt="Nourin"
          className="profile"
        />
      </motion.div>
      <motion.div
  className="hero-right"
  initial={{ opacity: 0, x: 150 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2 }}
>
  <h2></h2>

  <h1>
    FULL STACK <br />
    INTERN
  </h1>
</motion.div>

    </section>
  );
}

export default Home;