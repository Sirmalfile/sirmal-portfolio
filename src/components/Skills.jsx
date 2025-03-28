import React, { useEffect, useRef, useState } from 'react';
import StarsBackground from './StarsBackground';
import backgroundVideo from '../assets/cards-video.webm';

// Import skill images
import htmlImg from '../assets/1.png';
import cssImg from '../assets/2.png';
import jsImg from '../assets/3.png';
import reactImg from '../assets/4.png';
import nodeImg from '../assets/5.png';
import mongoImg from '../assets/6.png';
import mysqlImg from '../assets/7.png';
import cImg from '../assets/8.png';
import cppImg from '../assets/9.png';
import javaImg from '../assets/4.png';

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  const skills = [
    { name: 'HTML', img: htmlImg },
    { name: 'CSS', img: cssImg },
    { name: 'JavaScript', img: jsImg },
    { name: 'React', img: reactImg },
    { name: 'Node.js', img: nodeImg },
    { name: 'MongoDB', img: mongoImg },
    { name: 'MySQL', img: mysqlImg },
    { name: 'C', img: cImg },
    { name: 'C++', img: cppImg },
    { name: 'Java', img: javaImg }
  ];

  const orbitRef = useRef(null);
  const animationRef = useRef(null);
  let angle = 0;

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Orbit animation only on desktop
  useEffect(() => {
    if (isMobile) return;

    const orbitAnimation = () => {
      if (orbitRef.current) {
        angle += 0.002;
        const radius = 150;
        const items = orbitRef.current.children;
        
        for (let i = 0; i < items.length; i++) {
          const itemAngle = angle + (i * (2 * Math.PI / items.length));
          const x = Math.cos(itemAngle) * radius;
          const y = Math.sin(itemAngle) * radius;
          
          items[i].style.transform = `translate(${x}px, ${y}px) rotate(${itemAngle + Math.PI/2}rad)`;
          items[i].style.opacity = 0.7 + 0.3 * Math.sin(itemAngle);
        }
      }
      animationRef.current = requestAnimationFrame(orbitAnimation);
    };

    animationRef.current = requestAnimationFrame(orbitAnimation);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);

  return (
    <section id="skills" className="skills-section">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Stars Background */}
      <StarsBackground id="skill-star-canvas" />
      <div className="home-gradient-overlay"></div>
      
      {/* Content Container */}
      <div className="skills-container">
        <h1 className="skills-main-title"><span>My Skills</span></h1>
        
        {/* Circular Orbit Animation - Hidden on mobile */}
        {!isMobile && (
          <div className="skills-orbit-container">
            <div ref={orbitRef} className="skills-orbit">
              {skills.map((skill, index) => (
                <div key={index} className="orbiting-skill">
                  <img 
                    src={skill.img} 
                    alt={skill.name}
                    className="skill-image" 
                    title={skill.name}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Grid for mobile */}
        {isMobile && (
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-image-container">
                  <img 
                    src={skill.img} 
                    alt={skill.name} 
                    className="skill-image"
                    title={skill.name}
                  />
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;