import React, { useState, useEffect } from 'react';
import './LightingHero.css';

const LightingHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Apply data-theme attribute to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleToggle = (e) => {
    setIsDark(e.target.checked);
  };

  return (
    <div className="hero-container">
      {/* Sidebar Menu */}
      <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
          ✕
        </button>
        <div className="sidebar-content">
          <div className="sidebar-logo">
            <div className="logo-bars">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </div>
            <span className="logo-text">
              <span className="site">Site</span>
              <span className="logo-bold">Logo</span>
            </span>
          </div>

          <nav className="sidebar-nav">
            <a href="#about" onClick={() => setSidebarOpen(false)}>About</a>
            <a href="#features" onClick={() => setSidebarOpen(false)}>Features</a>
            <a href="#pricing" onClick={() => setSidebarOpen(false)}>Pricing</a>
            <a href="#gallery" onClick={() => setSidebarOpen(false)}>Gallery</a>
            <a href="#team" onClick={() => setSidebarOpen(false)}>Team</a>
            <div className="sidebar-divider"></div>
            <a href="#blog" onClick={() => setSidebarOpen(false)}>Blog</a>
            <a href="#contact" onClick={() => setSidebarOpen(false)}>Contact</a>
            <a href="#faq" onClick={() => setSidebarOpen(false)}>FAQ</a>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Header */}
      <header className="header">
        <div className="header-left">
          <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
          <div className="logo">
            <div className="logo-bars">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </div>
            <span className="logo-text">
              <span className="site">Site</span>
              <span className="logo-bold">Logo</span>
            </span>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#gallery">Gallery</a>
          <a href="#team">Team</a>
        </nav>

        {/* Toggle: unchecked = light | checked = dark */}
        <label className="theme-toggle" title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}>
          <input
            type="checkbox"
            className="toggle-input"
            checked={isDark}
            onChange={handleToggle}
          />
          <span className="toggle-slider">
            <span className="toggle-icon"></span>
          </span>
        </label>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Left side - Lamp */}
        <div className="lamp-section">
          <div className="lamp">
            <div className="lamp-cable"></div>
            <div className="lamp-hook"></div>
            <div className="lamp-top"></div>
            <div className="lamp-light"></div>
            <div className="lamp-bulb-core"></div>
            <div className="lamp-bulb-end"></div>
          </div>
        </div>

        {/* Right side - Text */}
        <div className="text-section">
          <h1 className="heading">
            Latest<br />in Lighting
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas elit amet, odio id sit eget.
          </p>
          <button className="cta-button">Check All Collections</button>
        </div>
      </main>
    </div>
  );
};

export default LightingHero;