import React from "react";
import mainImg from "../assets/423619648_3603663076543893_2299142157477955626_n-removebg-preview.png";
import resume from "../assets/Resume Bikal Adhikari.pdf";

const Hero = () => {
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
            <a href={resume} download>
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
