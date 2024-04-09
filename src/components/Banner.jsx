import React from "react";

const Banner = () => {
  return (
    <section className="flex banner container">
      <div className="flex info-content">
        <div className="flex icon-container">
          <i className="fa-solid fa-award"></i>
        </div>
        <div>
          <span>IT</span>
          <p>Graduation</p>
        </div>
      </div>
      <div className="flex info-content">
        <div className="flex icon-container">
          <i className="fa-solid fa-award"></i>
        </div>
        <div className="info-divider"></div>
        <div>
          <span>5+ Projects</span>
          <p>Completed</p>
        </div>
      </div>
      <div className="flex info-content">
        <div className="flex icon-container">
          <i className="fa-solid fa-award"></i>
        </div>
        <div className="info-divider"></div>
        <div>
          <span>1+ year</span>
          <p>Coding Experience</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
