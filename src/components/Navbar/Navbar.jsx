import { useState } from 'react'
import React from 'react'
import './Navbar.css'
import img from './../../assets/image/logo.svg'

export default function Navbar() {
        const [Toggle ,setToggle ] = useState (false)
        const toggleHandler = () => {
            setToggle(!Toggle)
        };
  return (
    <nav>
    <div className="logo">
        <img src={img} alt="logo-image"/>
        <p>Digital marketing agency</p>
    </div>
    <ul className={Toggle?'active':""}>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Service">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Clients & Partners">Clients & Partners</a></li>
        <li><a href="#X-Academy">X Academy</a></li>
        <li>
            <a href="#About">About US</a>
            <i class="fa-solid fa-chevron-down down-icon"></i>
        </li>
        <li><a href="#Let's-Talk">Let's Talk</a></li>
    </ul>
    <i class="fa-solid fa-bars bars-icon" onClick={toggleHandler}></i>
</nav>
  )
}
