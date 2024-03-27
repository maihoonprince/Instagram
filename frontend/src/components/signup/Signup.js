import React from "react";
import logo from "../../Asset/logo.png";
import "./signup.css";
import {Link} from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <div className="form-container">
        <div className="form">

          <img className="signup-logo" src={logo} alt="" />

          <p className="loginPara">
            Sign up to see photos and videos <br /> from your friends
          </p>

          <div>
            <input type="email" name="email" id="email" placeholder="E-mail" />
          </div>

          <div>
            <input type="text" name="name" id="name" placeholder="Full Name" />
          </div>

          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="User Name"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <p className="loginPara" style={{fontSize:"12px", margin:"3px 0px"}}>
            By signing up, You agree to our Term, <br /> Privacy Policy and
            Cookies Policy.
          </p>

          <input type="submit" id="submit-btn" value="Sign Up" />
        </div>

        <div className="form2">
          Already have account ? 
          <Link to="/signin">
          <span style={{color:"blue", cursor:"pointer"}}> Sign In</span>
          </Link>  
        </div>
      </div>
    </div>
  );
};

export default Signup;
