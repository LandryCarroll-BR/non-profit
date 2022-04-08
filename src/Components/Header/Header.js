import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        document.querySelector(".header").className = "header scroll";
      } else {
        document.querySelector(".header").className = "header";
      }
    });
  });

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <h1>🌎</h1>
        <h4>
          Company
          <br />
          <span>Name</span>
        </h4>
      </Link>
      <nav className="header__DesktopNav">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="ourImpact">Our Impact</Link>
        <Link to="/">Registration</Link>
        <Link to="/">Contact</Link>
      </nav>

      <Drawer anchor="right" open={menu}>
        <div className="header__mobileMenu">
          <div className="header__closeIcon">
            <CloseIcon fontSize="large" onClick={toggleMenu} />
          </div>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/ourImpact" onClick={toggleMenu}>
            Our Impact
          </Link>
          <Link to="#" onClick={toggleMenu}>
            Registration
          </Link>
          <Link to="#" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </Drawer>

      <div className="header__buttons">
        {/* <a href="#">Register</a> */}
        <a href="/">Sign In</a>
      </div>

      <div className="header__menuIcon">
        <MenuIcon fontSize="large" onClick={toggleMenu} />
      </div>
    </header>
  );
}

export default Header;
