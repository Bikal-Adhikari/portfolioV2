import "./App.css";
import mainImg from "./assets/423619648_3603663076543893_2299142157477955626_n-removebg-preview.png";
import projectImg from "./assets/project.png";
import Aboutme from "./components/Aboutme.jsx";
import Banner from "./components/Banner.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Project from "./components/Project.jsx";
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
        <Project projectImg={projectImg} />
        <Aboutme mainImg={mainImg} />
        <Contact />
        <Footer />

        <a href="#header" className="flex goup">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}

export default App;
