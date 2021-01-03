import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';
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
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="nav-uqais" src={logo} alt="Logo" />
            UQAIS
          </Link>
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

            <li className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
              <Link
                to="/about_us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us <i className='fas fa-caret-down' />
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
