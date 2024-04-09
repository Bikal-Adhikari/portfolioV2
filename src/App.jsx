import "./App.css";
import mainImg from "./assets/423619648_3603663076543893_2299142157477955626_n-removebg-preview.png";
import projectImg from "./assets/project.png";
import Banner from "./components/Banner.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
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

        <Header />
        <Hero mainImg={mainImg} />
        <Banner />
        <Skills />

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
