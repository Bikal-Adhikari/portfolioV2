import React from "react";

const Hero = ({ mainImg }) => {
  return (
    <section className="hero-section container" id="header">
      <div className="grid hero">
        <div className="left flex">
          <div>
            Hi I'm <span>Bikal Adhikari</span>
          </div>
          <div className="tag">Soft. Engineer</div>
          <p>I love coding and creating something useful with my skills.</p>
          <div>
            <a href="./assets/Resume Bikal Adhikari.docx" download>
              <button>
                Download CV <i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="right flex">
          <img src={mainImg} alt="Bikal" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
