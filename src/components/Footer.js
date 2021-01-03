import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import fb from "../images/fb.png";
import linkedin from "../images/linkedin.png";
import insta from "../images/insta.png";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our mailing list to receive updates about our upcoming events!
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about/our_mission">Our Mission</Link>
            <Link to="/about/our_team">Our Team</Link>
            <Link to="/about/contact_us">Contact Us</Link>
            <Link to="/about/terms">Terms and Conditions</Link>
          </div>
          <div className="footer-link-items">
            <h2>Membership</h2>
            <Link to="/">Become a Member</Link>
            <Link to="/">Member Benefits</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Events</h2>
            <Link to="/">Upcoming Events </Link>
            <Link to="/">Past Events</Link>
            <Link to="/">Suggest an Event</Link>
            <Link to="/">Feedback</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.facebook.com/uqaisstudentclub">Facebook</a>
            <a href="https://www.instagram.com/uq_ais/">Instagram</a>
            <a href="https://www.linkedin.com/company/ais-uq-studentchapter/">LinkedIn</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img className="nav-uqais" src={logo} alt="Logo" />
              UQAIS
            </Link>
          </div>
          <small className="website-rights">UQAIS © 2021</small>
          <div className="social-icons">
            <a
              classname="social-icon-link facebook"
              href="https://www.facebook.com/uqaisstudentclub"
            >
              <img  className='media-icon' src={fb} alt="FB" />
            </a>

            <a
              href="https://www.instagram.com/uq_ais/"
              classname="social-icon-link instagram"
            >
              <img  className='media-icon' src={insta} alt="Instagram" />
            </a>

            <a
              href="https://www.linkedin.com/company/ais-uq-studentchapter/"
              classname="social-icon-link twitter"
            >
              <img  className='media-icon' src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
