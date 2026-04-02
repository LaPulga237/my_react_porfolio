import React from 'react'
import './services.css'
import projects  from "../data/data";
import arrowIcon from '../../assets/arrow-forward.svg';
const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <hr className='services-hr'/>
        </div>
        <div className="services-container">

            {projects.map((project, index) => (
                <div key={index} className="services-format">
                    <h3>{`0${index + 1}`}</h3>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrowIcon} alt="arrow" />
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Services