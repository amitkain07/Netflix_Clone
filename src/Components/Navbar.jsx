import React from 'react'
import './compo.css'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import bell_icon from '../assets/bell_icon.svg'
import profile_img from '../assets/profile_img.png'
import caret_icon from '../assets/caret_icon.svg'
const Navbar = () => {
  return (
    <div className='navbar '>
        <div className="navbar-left">
            <img src={logo} alt="netflix_logo" />
            <ul>
                <li>Home</li>
                <li>Tv Show</li>
                <li>Moives</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse By Languages</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search_icon} alt='search_icon' className='icon'/>
            <p>Children</p>
            <img src={bell_icon} alt='bell_icon' className='icon'/>
            <div className="navbar-profile">
            <img src={profile_img} alt='bell_icon' className='Profile'/> 
            <img src={caret_icon} alt='bell_icon' />
            <div className="dropdown">
                <p>Sign out of netfilx</p>
            </div> 
            </div>
        </div>
    </div>
  )
}

export default Navbar