import React from "react";
import './navbar.css'
import logo from '../../assets/lapulga3.jpg'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'About', href: '#about' }
]

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navLogo" />
      <ul className="navUl">
        {NAV_ITEMS.map((item) => (
          <li key={item.label} className="navLinks">
            <a href={item.href} className="links">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="navButton navButtonLink">
        Contact Me
      </a>
    </nav>
  )
}

export default Navbar;