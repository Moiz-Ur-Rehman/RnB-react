import React from 'react'
import './Styles.css'
import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <div className="login">
            <div className="login-wrap">
                <h6>ACCOUNT</h6>
                <h2>Login</h2>
                <form action="">
                    <input type="email" name="Email" placeholder="Email" id="email" className="all" required/><br/>
                    <input type="password" name="password" placeholder="Password" id="password" className="all" required/><br/>
                    <Link to="" id="forgot-pass">Forgot Password?</Link><br/>
                    <button type="submit">login</button>
                </form>
                <div className="line"></div>
                <p>Need to sign up?Click below to register.</p><br/>
                <Link to="/Register" id="register-btn">REGISTER</Link>
            </div>
        </div>
    )
}
