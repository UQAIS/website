import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Explore our past Events/News!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/videos/aginic.jpg"
              text="Gain insights from Rob Leane, a Delivery Manager at Aginic"
              label="BIS Talks"
              path="/events"
            />
            <CardItem
              src="/videos/rba.png"
              text="Network with the CIO of the Reserve Bank of Australia - Gayan Benedict"
              label="BIS Talks"
              path="/events"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/videos/tanda.png"
              text="Learn about AI and programming from the CTO at Tanda - Colin McCririck"
              label="BIS Talks"
              path="/services"
            />
            <CardItem
              src="/videos/mercy.jpg"
              text="Discover how workplace culture is essential to a happy work/life balance - John Kilbride"
              label="BIS Talks"
              path="/products"
            />
            <CardItem
              src='/videos/aws.jpg'
              text="Hear from a Software Development Engineer at Amazon Web Services - Chris Truong"
              label="BIS Talks"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
