import React from 'react';
import { Link } from "react-router-dom"; // Add this import
import StarsBackground from './StarsBackground';
import profileImage from '../assets/bharat.jpg'; // Replace with your image
import cvFile from '../assets/cv.pdf'; // Replace with your CV file

const About = () => {
  return (
    <section id="about" className="about-container">
      {/* <StarsBackground id="about-star-canvas" /> */}
      <div className="home-gradient-overlay"></div>
      <div className="about-content">
        <div className="about-text">
          <h1>Hello, I'm</h1>
          <h2>Bharat Sirmal</h2>
          <div className="divider"></div>
          <p>
           A passionate and dedicated B.Tech Computer Engineering student with a strong foundation in Programming language(c programming, c++, html, css, javascript, python, etc), problem-solving, and innovation. Throughout my academic journey, I have developed an interest in various fields such as coding, algorithms.
          </p>
          <div className="about-buttons">
            <a href={cvFile} download className="download-btn">
              Download CV
            </a>
            <Link to="/projects" className="projects-btn">
              View Projects
            </Link>
          </div>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Bharat Sirmal" />
        </div>
      </div>
    </section>
  );
};

export default About;