import React from "react";

function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <h2>Experiencia Laboral</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span>2020 - 2022</span>
            <h3>Desarrollador Full Stack</h3>
            <p>Dynamic Network</p>
            <p>JavaServer Pages, CSS3, JavaScript, HTML5</p>
          </div>
          <div className="timeline-item">
            <span>2022 - Presente</span>
            <h3>Full Stack Web Developer</h3>
            <p>G-Global</p>
            <p>TypeScript, React.js, Node.js, MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
