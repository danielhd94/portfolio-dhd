import React from "react";

function Project() {
  return (
    <section id="project" className="section">
      <div className="container">
        <h2>Proyectos</h2>
        <div className="project-list">
          <div className="project-item">
            <img src="project-image1.jpg" alt="Proyecto 1" />
            <p>Descripción del Proyecto 1</p>
          </div>
          <div className="project-item">
            <img src="project-image2.jpg" alt="Proyecto 2" />
            <p>Descripción del Proyecto 2</p>
          </div>
          {/* Agrega más proyectos según sea necesario */}
        </div>
      </div>
    </section>
  );
}

export default Project;
