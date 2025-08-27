import React from 'react'
import './contact.css'

const Contact = () => {
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
                    <img src="./src/assets/contact_mail.svg" alt="" /> <p>dieudonneonana30@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src="./src/assets/phone_forwarded.svg" alt="" /> <p>+237 658-70-36-71</p>
                </div>
                <div className="contact-detail">
                    <img src="./src/assets/location_on.svg" alt="" /> <p>Yaounde, Cameroon</p> 
                </div>
            </div>
        </div>
        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your Name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your Email' name='email'/>
            <label htmlFor="">Write your message here...</label>
            <textarea name="message" rows="7" placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
       </div>
    </div>
  )
}

export default Contact