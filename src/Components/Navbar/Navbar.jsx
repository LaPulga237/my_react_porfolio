import React from "react";
import './navbar.css'
const Navbar = () => {

    return (
        <div className="navbar">
            <img src="./src/assets/lapulga3.jpg" alt="img not found" className="navLogo" />
            <ul className="navUl">
                <li className="navLinks"><a href="" className="links">Home</a></li>
                <li className="navLinks"><a href="" className="links">Services</a></li>
                <li className="navLinks"><a href="" className="links">Contact</a></li>
                <li className="navLinks"><a href="" className="links">About</a></li>
            </ul>
            <button className="navButton"><a href="" className="navButtonLink">Contact Me</a></button>
        </div>
    )
}

export default Navbar;