import React from 'react'
import './Styles.css'
import {Link} from "react-router-dom";

function Register() {
    return (
        <div className="register">
            <div className="register-wrap">
                <h6>ACCOUNT</h6>
                <h2>Register</h2>
                <form action="">
                    <input type="text" name="fname" placeholder="First Name" id="fname" className="all" required/><br/>
                    <input type="text" name="lname" placeholder="Last Name" id="lname" className="all"/><br/>
                    <input type="tel" name="phone" placeholder="Phone Number" id="phone" className="all" required/><br/>
                    <input type="email" name="Email" placeholder="Email" id="email" className="all" required/><br/>
                    <input type="password" name="password" placeholder="Password" id="password" className="all" required/><br/>
                    <input type="password" name="cpassword" placeholder="Confirm Password" id="cpassword" className="all" required/><br/>
                    <button type="submit">Register</button>
                </form>
                <div className="line"></div>
                <p>Already have an account?</p><br/>
                <Link to="/Login" id="login-btn">LOGIN</Link>
            </div>
        </div>
    )
}
export default Register