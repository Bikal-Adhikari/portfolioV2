import "./App.css";
import mainImg from "./assets/423619648_3603663076543893_2299142157477955626_n-removebg-preview.png";
import projectImg from "./assets/project.png";
function App() {
  return (
    <>
      {/* <!-- dark mode toggler  --> */}
      <label htmlFor="darkMode" className="dark-mode-toggler">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        {/* <!-- for dark mode toggler  --> */}

        {/* <!-- navbar  --> */}
        <header>
          <div className="header container flex">
            <div className="logo flex">
              <div className="joti-one-regular">Bikal</div>
              <div className="line">Soft. Engineer</div>
            </div>
            <label htmlFor="hamburgerMenu">
              <i className="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" id="hamburgerMenu" />
            <div className="menu">
              <ul className="flex navigation">
                <li>
                  <a href="#header">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* <!-- hero  --> */}
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

        {/* <!-- banner --> */}
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

        {/* <!-- skills --> */}
        <section className="skills" id="skills">
          <h2 className="title">
            <span>Skills</span>
          </h2>

          <div className="container flex skills-container">
            <div>
              <i
                className="fa-brands fa-html5"
                style={{ color: "orangered" }}
              ></i>
              <span>HTML</span>
            </div>
            <div>
              <i
                className="fa-brands fa-css3-alt"
                style={{ color: "blue" }}
              ></i>
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

        {/* <!-- my recent work --> */}
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
        {/* <!-- about me  --> */}
        <section className="about" id="about">
          <h2 className="title">
            <span>About Me</span>
          </h2>
          <div className="flex container about-content">
            <div className="flex myImg">
              <img src={mainImg} alt="Bikal" />
            </div>
            <div className="my-bio container">
              <h2 className="joti-one-regular">Bikal Adhikari</h2>
              <p>
                With a strong ambition to achieve my career goal as a Software
                Developer/Engineer, I am dedicated to continually expanding my
                knowledge of technologies and their foundations. Graduating from
                University with a Bachelor of Information Technology (Software
                Development), I have established a solid foundation in
                programming skills. Through self-directed learning and project
                development, I have obtained professional experience, including
                my recent position as a Software Engineer.
              </p>
              <p>
                I am now actively seeking an opportunity to contribute to an
                exciting business that aims to positively impact millions of
                Australians by revolutionising the way we serve people. With my
                expertise in programming languages such as React, JavaScript,
                and Java, I am eager to join a collaborative and supportive
                team, building complex solutions from scratch in a fast-paced
                environment. My goal is to leverage my skills and passion for
                innovation to drive business growth while further advancing my
                own career within a secure and autonomous setting.
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

        <section className="container contact" id="contact">
          <h2 className="title">
            <span>Contact</span>
          </h2>
          <div className="flex social">
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              {" "}
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="tel:0451677236">
              <i className="fa-solid fa-mobile"></i>
            </a>
          </div>
          <h3>OR</h3>
          <div className="flex">
            <a href="mailto:real@email.com" className="email-section">
              <div className="email flex">
                <span>yourEmail@gmail.com</span>
                <div className="flex send">
                  <i className="fa-solid fa-paper-plane"></i>
                </div>
              </div>
            </a>
          </div>
        </section>
        {/* <!-- footer  --> */}

        <footer className="flex footer">
          <div className="flex top container">
            <div className="links">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Skills</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="socials">
              <h3>Social Links</h3>
              <ul>
                <li>
                  <a href="" target="_blank">
                    LinkedIN
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    Github
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            &copy; All right reserved. Made by Bikal Adhikari.
          </div>
        </footer>

        <a href="#header" className="flex goup">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}

export default App;
