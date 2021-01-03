import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/videos/home_page_5.jpeg' alt='unavaliable' className='home-photo'/> 
      <p>Welcome to</p>
      <h1>University of Queensland <br/> Association for Information Systems</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LEARN MORE
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          UPCOMING EVENTS <i class="far fa-calendar-alt"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
