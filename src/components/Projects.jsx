import React from 'react';
import StarsBackground from './StarsBackground';
import projectVideo from '../assets/encryption.webm'; // Your project video

const Projects = () => {
  return (
    <section id="project" className="project-section">
      {/* Video Background */}
      <div className="project-video-bg">
        <video autoPlay loop muted playsInline>
          <source src={projectVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Stars Background */}
      <StarsBackground id="project-star-canvas" />
      <div className="home-gradient-overlay"></div>
      
      {/* Content */}
      <div className="project-container">
        <h2 className="project-main-title">My Projects</h2>
        <div className="project-grid">
          {['Coming Soon-1', 'Coming Soon-2', 'Coming Soon-3'].map((title, index) => (
            <div key={index} className="project-card">
              <div className="project-card-content">
                <h4>{title}</h4>
                <div className="project-placeholder"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;