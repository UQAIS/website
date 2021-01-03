import React from "react";
import "./Pages.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Stats from "../Stats";

function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
