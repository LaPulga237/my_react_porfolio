import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-top">
            <div className="footer-top-left">
                <img className='footer-img' src="./src/assets/lapulga2.jpg" alt="" />
                <p>
                   I am a frontend developer with 2+ years of experience in companies like Nephus
                </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src="./src/assets/contact_mail.svg" alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
       </div> 
       <hr />
       <div className="footer-bottom">
            <p className="footer-bottom-left">
               &copy; 2025 Onana Dieudonné. All rights reserved. 
            </p>
            <div className="footer-bottom-right">
                <a href="https://github.com/LaPulga237"><img src="./src/assets/icons8.svg" alt="" /></a>
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
       </div>
    </div>
  )
}

export default Footer