import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm a creative frontend developer with 3+ years of experience building modern, responsive UIs.
        </p>
        <ul>
          <li>💻 JavaScript / React</li>
          <li>🎨 CSS / Responsive Design</li>
          <li>⚙️ API Integration</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
