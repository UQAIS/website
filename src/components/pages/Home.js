import React from 'react';
import "./Pages.css";
import Footer from '../Footer';
import Cards from "../Cards";
import HeroSection from "../HeroSection";



export default function Home() {
  return (
  <>
    <HeroSection />
    <Cards />
    <Footer />
  </>
  )
}
