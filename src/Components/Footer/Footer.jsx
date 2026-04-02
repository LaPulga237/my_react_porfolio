import React from 'react'
import './Footer.css'
import footerPhoto from '../../assets/lapulga2.jpg'
import contactIcon from '../../assets/contact_mail.svg'
import githubIcon from '../../assets/icons8.svg'
const Footer = () => {
    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - startYear;

    
  return (
    <div className='footer'>
       <div className="footer-top">
            <div className="footer-top-left">
                <img className='footer-img' src={footerPhoto} alt="Footer" />
                <p>
                   I am a frontend developer with {yearsOfExperience}+ years of experience 
                </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={contactIcon} alt="email" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
       </div> 
       <hr />
       <div className="footer-bottom">
            <p className="footer-bottom-left">
               &copy; {currentYear} Onana Dieudonné. All rights reserved. 
            </p>
            <div className="footer-bottom-right">
                <a href="https://github.com/LaPulga237" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
       </div>
    </div>
  )
}

export default Footer