import React from 'react';
import logo from "../../Asset/logo.png";
import {Link} from "react-router-dom";
import "./signin.css"

const Signin = () => {
  return (
    <div className='signin'>
      <div>
        <div className="login-form">
          <img id='signin-logo' src={logo} alt="Logo" />
          <div>
            <input type="email" name='email' id='email' placeholder='Email' />
          </div>

          <div>
            <input type="password" id='password' name='password' placeholder='Password' />
          </div>

          <input type="submit" id='login-btn' value="Sign In" />
        </div>

        <div className="login-form2">
        Don't have an Account ?
          <Link to="/signup">
          <span style={{color:"blue", cursor:"pointer"}}> Sign Up</span>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Signin