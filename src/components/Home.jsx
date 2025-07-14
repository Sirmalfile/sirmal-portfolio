// Home.jsx
import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import coderImage from '../assets/sirmal.jpg';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="home-gradient-overlay"></div>
      <div className="home-content">
        <div className="intro-div">
          <h1>Hi, I'm</h1>
          <h1><span>Bharat </span>Sirmal</h1>
           <div className="dividers"></div>
          <p>I am currently a 3rd-year Computer Science and Engineering (CSE) student at Pillai College of Engineering, New Panvel.</p>
        </div>
        <div className="home-image">
          <img src={coderImage} alt="Bharat Sirmal" />
        </div>
        <div className="page-link">
          <Link className="link-btn" to="/contact">Contact</Link>
          <a 
            className="social" 
            href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BufORJoTaSAOJ5etoUstsEg%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin /> 
          </a>
          <a 
            className="social" 
            href="https://www.instagram.com/bharat__sirmal/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram /> 
          </a>
          <a 
            className="social" 
            href="https://github.com/your-github-username" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;