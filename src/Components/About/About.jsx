import React from "react";
import './About.css'

const About = ()=>{
    return(
        <div className="about"> 
            <div className="about-title">
                <h1>About Me</h1>
                <div className="background-img"></div>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img className="about-img" src="./src/assets/lapulga.jpg" alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I am a passionate and driven junior
                            software engineering student with a strong
                            foundation in programming and software
                            development.
                        </p>
                        <p>
                            I am committed to
                            contributing positively to any team I join,
                            while gaining valuable hands-on experience. 

                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p> <hr style={{width:"50%"}} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p> <hr style={{width:"70%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Javascript</p> <hr style={{width:"60%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Python</p> <hr style={{width:"50%"}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                    <div className="about-achievement">
                        <h1> 2+</h1>
                        <p>
                            Years of experience
                        </p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1> 20+</h1>
                        <p>
                            Projects Completed
                        </p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1> 10+</h1>
                        <p>
                            Happy Clients
                        </p>
                    </div>
                </div>
        </div>
    )
}
export default About;