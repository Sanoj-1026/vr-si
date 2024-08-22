import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import bgImage from "./assets/bg.jpg"; 
import logo from "./assets/logo.png"; 

function Home() {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#service">Service</Link></li>
            <li><Link to="/#clients">Clients</Link></li>
            <li><Link to="/#careers">Careers</Link></li>
          </ul>
        </nav>
      </header>
      <main className="hero-section">
        <div className="hero-content">
          <h1>
            Transforming <span className="highlighted-text">Dream</span> Into Augmented and <br />
            <span className="highlighted-text-alt">Virtual Reality</span>
          </h1>
          <a href="#explore" className="explore-button">Explore</a>
        </div>
      </main>
    </div>
  );
}

export default Home;
