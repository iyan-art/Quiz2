import React from "react";
import "./Projects.css";

const projects = [
  { title: "Portfolio Website", desc: "Built with React and modern CSS.", link: "#" },
  { title: "E-commerce App", desc: "Product listing & cart features.", link: "#" },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <a href={proj.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
