import React from "react";
import "./Infobar.css";

function Infobar() {
  return (
    <>
      <info className="infobar">
        <div className="infobar-container">
          <div className="info-email">
            <i class="far fa-envelope"></i> uqaisstudentchapter@gmail.com
          </div>
          <div className="info-social-icons">
            <a 
              
              href="https://www.facebook.com/uqaisstudentclub"
              classname="info-social-icon-link facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>

            <a
              href="https://www.instagram.com/uq_ais/"
              classname="info-social-icon-link instagram"
            >
              <i class="fab fa-instagram" />
            </a>

            <a
              href="https://www.linkedin.com/company/ais-uq-studentchapter/"
              classname="info-social-icon-link twitter"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </info>
    </>
  );
}

export default Infobar;
