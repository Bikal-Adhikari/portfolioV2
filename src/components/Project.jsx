import React from "react";

const Project = ({ projectImg }) => {
  return (
    <section className="projects" id="projects">
      <h2 className="title">
        <span>My Projects</span>
      </h2>

      <div className="grid project-container container">
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" width="100%" height="auto" />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="">
                {" "}
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                {" "}
                <i className="fa-brands fa-chrome"></i>{" "}
              </a>
            </div>
            <h3>Personal Portfolio</h3>
            <p>TechStack: HTML, CSS, JavaScript, React</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" width="100%" height="auto" />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="">
                {" "}
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                {" "}
                <i className="fa-brands fa-chrome"></i>{" "}
              </a>
            </div>
            <h3>Personal Portfolio</h3>
            <p>TechStack: HTML, CSS, JavaScript, React</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" width="100%" height="auto" />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="">
                {" "}
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                {" "}
                <i className="fa-brands fa-chrome"></i>{" "}
              </a>
            </div>
            <h3>Personal Portfolio</h3>
            <p>TechStack: HTML, CSS, JavaScript, React</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" width="100%" height="auto" />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="">
                {" "}
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                {" "}
                <i className="fa-brands fa-chrome"></i>{" "}
              </a>
            </div>
            <h3>Personal Portfolio</h3>
            <p>TechStack: HTML, CSS, JavaScript, React</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
