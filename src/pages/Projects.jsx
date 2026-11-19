
import { useState } from "react";
import "../styles/Projects.css";
import { motion } from "framer-motion";

function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const base = import.meta.env.BASE_URL;

  const projects = [
    {
      title: "Portfolio Website",
      image: `${base}project4.jpg`,
      description:
        "A responsive personal portfolio built with React, featuring smooth animations and a modern UI.",
      video: `${base}portfolio-demo.mp4`,
    },
    {
      title: "Calculator Website",
      image: `${base}project2.jpg`,
      description:
        "A stylish calculator built using React with interactive UI and responsive design.",
      video: `${base}calculator-demo.mp4`,
    },
    {
      title: "File Encryption & Decryption",
      image: `${base}project3.jpg`,
      description:
        "Java-based application for securely encrypting and decrypting files.",
      video: `${base}encryption-demo.mp4`,
    },
  ];

  return (
    <motion.section
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="subtitle">MY WORK</p>
        <h1 className="title">Recent Projects</h1>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
          >
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <button
                className="view-btn"
                onClick={() => setSelectedVideo(project.video)}
              >
                View Project →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedVideo && (
        <div
          className="video-modal"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="video-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>

            <video controls autoPlay>
              <source src={selectedVideo} type="video/mp4" />
              Your browser doesn't support video.
            </video>
          </div>
        </div>
      )}
    </motion.section>
  );
}

export default Projects;
