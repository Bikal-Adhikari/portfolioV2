import React from "react";

const Contact = () => {
  return (
    <section className="container contact" id="contact">
      <h2 className="title">
        <span>Contact</span>
      </h2>
      <div className="flex social">
        <a href="https://www.linkedin.com/in/bikal-adhikari/" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Bikal-Adhikari" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://youtube.com">
          {" "}
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="tel:0451677236">
          <i className="fa-solid fa-mobile"></i>
        </a>
      </div>
      <h3>OR</h3>
      <div className="flex">
        <a href="mailto:bikaladhikari5@gmail.com" className="email-section">
          <div className="email flex">
            <span>bikaladhikari5@gmail.com</span>
            <div className="flex send">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
