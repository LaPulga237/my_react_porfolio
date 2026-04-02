import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com'
import mailIcon from '../../assets/contact_mail.svg'
import phoneIcon from '../../assets/phone_forwarded.svg'
import locationIcon from '../../assets/location_on.svg'

const Contact = () => {
      const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_foguvaf",     // from EmailJS dashboard
      "template_03loe9h",    // from EmailJS dashboard
      e.target,              // the form itself
      "BksuzwOejoCReDBUP"      // from EmailJS dashboard
    ).then(
      (result) => {
        console.log("Email sent:", result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log("Error:", error.text);
        alert("Failed to send message.");
      }
    );
  };
  return (
    <div className='contact'>
       <div className="contact-title">
            <h1>Get in Touch</h1>
       </div> 
       <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>
                I'm currently available to take on new projects,
                so feel free to contact me as soon as possible for your projects.
            </p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mailIcon} alt="email" /> <p>dieudonneonana30@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={phoneIcon} alt="phone" /> <p>+237 658-70-36-71</p>
                </div>
                <div className="contact-detail">
                    <img src={locationIcon} alt="location" /> <p>Yaounde, Cameroon</p> 
                </div>
            </div>
        </div>
        <form className="contact-right" onSubmit={sendEmail}>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your Name' name='name' required/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your Email' name='email' required/>
            <label htmlFor="">Write your message here...</label>
            <textarea name="message" rows="7" placeholder='Enter your message' required></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
       </div>
    </div>
  )
}

export default Contact