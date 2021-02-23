import React, { useState, useEffect } from "react";
import { Button } from "./essentials/Button";
import { Link } from "react-router-dom";
import Dropdown from "./essentials/Dropdown";
import Logo from "../images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo-small">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={Logo} alt="No Logo" height="50px" />
          </Link>
        </div>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            UQAIS
          </Link>

          <a
            href="https://www.facebook.com/uqaisstudentclub"
            className="nav-links-social"
          >
            <i className="fab fa-facebook-square" />
          </a>

          <a
            href="https://www.instagram.com/uq_ais/"
            className="nav-links-social"
          >
            <i className="fab fa-instagram" />
          </a>

          <a
            href="https://www.linkedin.com/company/ais-uq-studentchapter/"
            className="nav-links-social"
          >
            <i className="fab fa-linkedin" />
          </a>

          <a
            href="tel:uqaisstudentchapter@gmail.com"
            className="nav-links-social"
          >
            <i className="far fa-envelope" />
          </a>

          <a href="https://github.com/UQAIS" className="nav-links-social">
            <i className="fab fa-github-square" />
          </a>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>

            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/about_us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
                <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>

            <li>
              <Link
                to="/membership"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Become a Member
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline">Become a Member</Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
