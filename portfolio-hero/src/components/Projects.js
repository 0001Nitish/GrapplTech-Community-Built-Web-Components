// src/components/Projects.js
import React from "react";
import "./Projects.css";
import useIntersectionObserver from "../components/useIntersectionObserver";

const Projects = () => {
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const isVisible = useIntersectionObserver({ target: ".project", options });

  return (
    <section className="projects" id="projects">
      <h2 data-aos="fade-up">Projects</h2>
      <div className={`project ${isVisible ? "fade-in" : ""}`}>
        <h3>Daily Expense Sharing Application</h3>
        <p>
          Designed and developed a solution for managing and sharing expenses
          among multiple users using Java and Spring Boot. Implemented user
          authentication, expense tracking, and real-time updates with
          PostgreSQL.
        </p>
      </div>
      <div className={`project ${isVisible ? "fade-in" : ""}`}>
        <h3>Automated Fruit Identification System</h3>
        <p>
          Developed a deep learning model to classify different types of fruits
          from images using convolutional neural networks (CNNs). Showcased the
          potential of AI in transforming industries and improving efficiency.
        </p>
      </div>
    </section>
  );
};

export default Projects;
