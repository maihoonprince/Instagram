import React from 'react';

import logo from '../../Asset/logo.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <ul>
            <li>Signin</li>
            <li>Signup</li>
            <li>Profile</li>
        </ul>
    </div>
  )
}

export default Navbar