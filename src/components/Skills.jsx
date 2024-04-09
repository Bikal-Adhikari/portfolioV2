import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="title">
        <span>Skills</span>
      </h2>

      <div className="container flex skills-container">
        <div>
          <i className="fa-brands fa-html5" style={{ color: "orangered" }}></i>
          <span>HTML</span>
        </div>
        <div>
          <i className="fa-brands fa-css3-alt" style={{ color: "blue" }}></i>
          <span>CSS</span>
        </div>
        <div>
          <i
            className="fa-brands fa-js"
            style={{ color: "rgba(209, 209, 16, 0.774)" }}
          ></i>
          <span>JavaScript</span>
        </div>
        <div>
          <i className="fa-brands fa-github"></i>
          <span>GitHub</span>
        </div>
        <div>
          <i className="fa-brands fa-figma" style={{ color: "purple" }}></i>
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
