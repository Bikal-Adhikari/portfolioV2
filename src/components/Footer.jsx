import React from "react";

const Footer = () => {
  return (
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
              <a
                href="https://www.linkedin.com/in/bikal-adhikari/"
                target="_blank"
              >
                LinkedIN
              </a>
            </li>
            <li>
              <a href="https://github.com/Bikal-Adhikari" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100076564991624"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank">
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
  );
};

export default Footer;
