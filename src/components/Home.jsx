// Home.jsx
import React from 'react';
import StarsBackground from './StarsBackground';
import coderImage from '../assets/sirmal.jpeg';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home" className="home-container">
      <StarsBackground id="star-canvas" />
      <div className="home-gradient-overlay"></div>
      <div className="home-content">
        <div className="intro-div">
          <h1>Hi, I'm <span>Bharat </span>Sirmal</h1>
          <h3>I'm <span>Computer Engineer</span></h3>
        </div>
        <div className="home-image">
          <img src={coderImage} alt="Bharat Sirmal" />
        </div>
        <div className="page-link">
          <Link className="link-btn" to="/about">About</Link>
          <Link className="link-btn" to="/skills">Skills</Link>
          <Link className="link-btn" to="/projects">Projects</Link>
          <Link className="link-btn" to="/contact">Contact</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;