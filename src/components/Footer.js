import "./FooterStyle.css";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome  size= {20} style={{ "color": "#fff", "marginRight": "2rem" }} />
            <div>
              <p>Calle Jose Contreras #91 (la julia)</p>
              <p>Republica Dominicana</p>
            </div>
          </div>
          <div className="phone">
          <h4>
          <FaPhone  size= {20} style={{ color: "#fff", marginRight: "2rem" }} />
          +18295483357
          </h4>
          </div>
          <div className="mail">
          <FaMailBulk  size= {20} style={{ color: "#fff", marginRight: "2rem" }} />
          <p>jamesguerrier@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>This is me James Guerrier. the CEO & Founder of SunshineTech. I realy like to built new project and design challenges</p>
          <div className="social">
          <FaFacebook  size= {30} style={{ color: "#fff", marginRight: "1rem" }} />
          <FaTwitter  size= {30} style={{ color: "#fff", marginRight: "1rem" }} />
          <FaLinkedin  size= {30} style={{ color: "#fff", marginRight: "1rem" }} />
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer