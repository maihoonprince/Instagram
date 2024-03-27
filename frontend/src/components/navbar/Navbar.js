import React from 'react';
import "./Navbar.css";
import logo from '../../Asset/logo.png';

import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='Navbar'>
            <img src={logo} alt='Logo' className='logo' />
            <ul>
                {/* <Link to="/"></Link> */}

                <Link to="/Signup">
                    <li>SignUp</li>
                </Link>

                <Link to="/Signin">
                    <li>SignIn</li>
                </Link>

                <Link to="/Profile">
                    <li>Profile</li>
                </Link>

            </ul>
        </div>
    )
}

export default Navbar