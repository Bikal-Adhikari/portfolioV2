import React from "react";
import aboutImg from "../assets/423619648_3603663076543893_2299142157477955626_n-removebg-preview.png";

const Aboutme = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">
        <span>About Me</span>
      </h2>
      <div className="flex container about-content">
        <div className="flex myImg">
          <img src={aboutImg} alt="Bikal" />
        </div>
        <div className="my-bio container">
          <h2 className="joti-one-regular">Bikal Adhikari</h2>
          <p>
            With a strong ambition to achieve my career goal as a Software
            Developer/Engineer, I am dedicated to continually expanding my
            knowledge of technologies and their foundations. Graduating from
            University with a Bachelor of Information Technology (Software
            Development), I have established a solid foundation in programming
            skills. Through self-directed learning and project development, I
            have obtained professional experience, including my recent position
            as a Software Engineer.
          </p>
          <p>
            I am now actively seeking an opportunity to contribute to an
            exciting business that aims to positively impact millions of
            Australians by revolutionising the way we serve people. With my
            expertise in programming languages such as React, JavaScript, and
            Java, I am eager to join a collaborative and supportive team,
            building complex solutions from scratch in a fast-paced environment.
            My goal is to leverage my skills and passion for innovation to drive
            business growth while further advancing my own career within a
            secure and autonomous setting.
          </p>
          <p>Sydney, Australia</p>
          <div>
            <div className="tag">Interest</div>
            <div className="flex">
              <span>Coding</span>
              <span>Football</span>
              <span>Movies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
