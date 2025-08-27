import React from "react";
import './hero.css';
const Hero = () =>{

    return(
        <div className="hero">
            
            <img src="./src/assets/onana.jpg" alt="img not found" className="hero-img"/>
            <h1> <span>I am Onana Dieudonne,</span> a Frontend Developer based in Cameroon.</h1>
            <p>
                I am a passionate and driven junior
                software engineering student with a strong
                foundation in programming and software
                development.
            </p>
            <div className="hero-action">
                <div className="hero-connect">Connect with Me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero;