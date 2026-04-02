import React from "react";
import './hero.css';
import heroImage from '../../assets/onana.jpg';

const heroContent = {
  title: 'I am Onana Dieudonne, a FullStack Developer based in Cameroon.',
  description:
    'I am a passionate and driven junior software engineering student with a strong foundation in programming and software development.',
  ctaConnect: 'Connect with Me',
  ctaResume: 'My Resume'
}

const Hero = () => {
  return (
    <section className="hero" id="home">
      <img src={heroImage} alt="Onana Dieudonne" className="hero-img" />
      <h1>
        <span>{heroContent.title.split(',')[0]},</span> {heroContent.title.split(',')[1]}
      </h1>
      <p>{heroContent.description}</p>
      <div className="hero-action">
        <a href="#contact" className="hero-connect">
          {heroContent.ctaConnect}
        </a>
        <a href="/resume.pdf" className="hero-resume" target="_blank" rel="noreferrer">
          {heroContent.ctaResume}
        </a>
      </div>
    </section>
  )
}

export default Hero;