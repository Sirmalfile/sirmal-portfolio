import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-transparent">
      <nav className="navbar-glass">
        <div className="logo">
          <span className="gradient-text">Bharat Sirmal</span>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>

        <div 
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`line ${isMenuOpen ? 'line1' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'line2' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'line3' : ''}`}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;