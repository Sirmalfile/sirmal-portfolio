import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectVideo from '../assets/encryption.webm';
import divbackground from '../assets/tae.jpeg';
import divbackgrounds from'../assets/Ai.png';

const Projects = () => {
  const projects = [
    {
      title: "Tic-Tac-Toe Game",
      description: "A fun interactive game built with HTML, CSS AND JAVASCRIPT",
      image: divbackground,
      projectLink: "https://tictactoe-game-tawny.vercel.app/",
      sourceCodeLink: "https://github.com/Sirmalfile/tictactoe",
      isSpecial: true
    },
    {
      title: "DtxKzy-Ai",
      description: "An interactive AI ChatBot built with React, Tailwind CSS, and Firebase",
      image: divbackgrounds,
      projectLink: "https://dtx-kzy-ai-chat-boat-eh5f.vercel.app/",
      sourceCodeLink: "https://github.com/Sirmalfile/DtxKzy-AI-ChatBoat.git",
      isSpecial: true
    },
    {
      title: "Coming Soon-3",
      // image: divbackground
    }
  ];

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
      {/* <StarsBackground id="project-star-canvas" /> */}
      <div className="home-gradient-overlay"></div>
      
      {/* Content */}
      <div className="project-container">
        <h2 className="project-main-title"><span>Projects</span></h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.isSpecial ? 'special-card' : ''}`}>
              <div className="project-card-content">
                <div className="project-image-container">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-image"
                    />
                  )}
                </div>
                <h4 className="project-title">{project.title}</h4>
                {project.description && <p className="project-description">{project.description}</p>}
                {project.isSpecial && (
                  <div className="project-links">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Source Code
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;