import React from "react";

const Projects = () => {
  return (
    <>
      <h3>Einige Projekte</h3>
      <div className="card">
        <img src="..." class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Project Title</h5>
          <p className="card-text">Kurzbeschreibung</p>
          <p className="card-text">Tech Stack</p>
          <a href="#" class="btn btn-primary">
            GitHub Repository
          </a>
          <a href="#" class="btn btn-primary">
            Deployed Site
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
