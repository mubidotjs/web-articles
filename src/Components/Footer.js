import React from "react";
import logo from "../../src/Logo1.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="header-logo">
          <img src={logo} alt="logo" width="40px" height="40px" />
        </div>
        <div className="footer-tabs">
          <Link to="/about-us" className="tabs-name">
            About Us
          </Link>
          <Link to="/contact-us" className="tabs-name">
            Contact Us
          </Link>
          <Link to="/feedback" className="tabs-name">
            Feedback
          </Link>
        </div>
      </div>
      <div className="rights-reserved">
        <p>
          Copyright © {new Date().getFullYear()} Articles. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
