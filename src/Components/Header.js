import React from "react";
import logo from "../../src/Logo1.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="logo" width="40px" height="40px" />
        </Link>
      </div>
      <div className="header-tabs">
        <div className="tabs-item">
          <Link to="/" className="tabs-name">
            Home
          </Link>
        </div>
        <div className="tabs-item">
          <Link to="/other-articles" className="tabs-name">
            Other Articles
          </Link>
        </div>
        <div className="tabs-item">
          <Link to="/books-reviews" className="tabs-name">
            Books Reviews
          </Link>
        </div>
        <div className="tabs-item">
          <Link to="/about-us" className="tabs-name">
            About Us
          </Link>
        </div>
        <div className="tabs-item">
          <Link to="/contact-us" className="tabs-name">
            Contact Us
          </Link>
        </div>
        <div className="tabs-item">
          <Link to="/feedback" className="tabs-name">
            Feedback
          </Link>
        </div>
      </div>
      <div className="header-search">
        <input type="search" placeholder="Search" />
      </div>
    </div>
  );
}

export default Header;
