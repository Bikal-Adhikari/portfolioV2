import "./App.css";
import Aboutme from "./components/Aboutme.jsx";
import Banner from "./components/Banner.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Project from "./components/Project.jsx";
import Skills from "./components/Skills.jsx";
import { Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Banner />
              </>
            }
          />

          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Project />} />
          <Route path="about-me" element={<Aboutme />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />

        {/* <a href="#header" className="flex goup">
          <i className="fa-solid fa-angle-up"></i>
        </a> */}
      </div>
    </>
  );
}

export default App;
