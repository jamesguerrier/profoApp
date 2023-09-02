import "./HeroImgStyles.css";

import React from 'react';
import introimg from "../assets/image12.jpg";
import { Link } from 'react-router-dom';
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={ introimg } alt="men" />
      </div>
      <div className="content">
        <p> HI, I'M A FREELANCER ok.</p>
        <h1>Full Stack Developper.</h1>
        <div>
          <Link to="/project" className="btn">Project</Link>
          <Link to="/contact" className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg;