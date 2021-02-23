import React from "react";
import "../App.css";
import { Button } from "./essentials/Button";
import "./HeroSection.css";
import { Parallax } from "react-parallax";
import home_image from "../images/Data_Analytics_Concept2.jpg";

function HeroSection() {
  return (
    <Parallax
      height="435px"
      bgImage={home_image}
      bgImageAlt="Home Page"
      strength={-200}
    >
      <div className="hero-container">
        <div className="welcome">
          <p>Welcome to</p>
          <h1>
            University of Queensland <br /> Association for Information Systems
          </h1>
          <section>
            <div className="hero-btns">
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                LEARN MORE
              </Button>
              <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                onClick={console.log("hey")}
              >
                UPCOMING EVENTS <i className="far fa-calendar-alt"></i>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </Parallax>
  );
}

export default HeroSection;
