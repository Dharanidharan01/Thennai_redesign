import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/hero.jpg'; // Ensure this image aligns with Thennai's branding

const Hero = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Empowering Coconut Farmers<br />
              Through Innovative<br />
              Agri-Tech Solutions.
            </h1>
            <div className="hero-cta">
              <Link to="/about" className="explore-btn">Learn More About Us</Link>
            </div>
          </div>
        </div>

        <div className="stats-container">
          <div className="stats-item">
            <div className="stats-icon">
              {/* You can replace this SVG with an icon that represents innovation or agriculture */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z" />
              </svg>
            </div>
            <div className="stats-detail">
              <p className="stats-label">Founded in 2024<br />with a mission to support<br />coconut farmers.</p>
            </div>
          </div>

          <div className="stats-item">
            <div className="stats-number">100+</div>
            <div className="stats-detail">
              <p className="stats-label">Farmers engaged<br />in pilot programs<br />across Tamil Nadu.</p>
            </div>
          </div>

          <div className="stats-item">
            <div className="stats-number">3</div>
            <div className="stats-detail">
              <p className="stats-label">Innovative solutions<br />developed to combat<br />pest infestations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
