// src/components/Internships.js
import React from "react";
import "./Internships.css";

const Internships = () => {
  return (
    <section className="internships" id="internships">
      <h2>Internships</h2>
      <div className="internship">
        <h3>Java Development Internship</h3>
        <p>
          Worked on several projects using Java and Spring Boot, gaining
          hands-on experience in backend development, software development life
          cycles, and best coding practices.
        </p>
      </div>
      <div className="internship">
        <h3>Cloud Computing Internship</h3>
        <p>
          Gained insights into cloud infrastructure, deployment, and maintenance
          using AWS and Azure. Learned about scalability and flexibility in
          modern applications.
        </p>
      </div>
      <div className="internship">
        <h3>Data Analytics Internship</h3>
        <p>
          Focused on data collection, processing, and analysis using Python and
          various data visualization tools. Enhanced understanding of
          data-driven development and its impact on software solutions.
        </p>
      </div>
    </section>
  );
};

export default Internships;
