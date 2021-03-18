import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
function HeroSection() {
  return (
    <div className='hero-container'>
      <img className="main-image" src='/images/anush-gorak.jpg' alt=""/>
      <h1>TRAIN WITH US</h1>
      <p></p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
