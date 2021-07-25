import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { SocialIcon } from 'react-social-icons';
import {NavbarNavigation, NavbarCategories} from './Data'

function Footer({style}) {
    return (
        <footer style={style}>
            <div className="footer-container">
                <div className="footer-shop">
                    <h5>SHOP</h5>
                    {NavbarCategories.map((item, index) => {
                        return (
                            <Link key={index} to={item.path}>
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
                <div className="footer-navigation">
                    <h5>NAVIGATION</h5>
                    {NavbarNavigation.map((item, index) => {
                        return (
                            <Link key={index} to={item.path}>
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
                <div className="social-icons">
                    <h5>CONNECT</h5>
                    <SocialIcon url="https://www.facebook.com/" style={{ height: 28, width: 28, display: 'flex' }} target="_blank" rel="noopener"/>
                    <SocialIcon url="https://www.instagram.com/" style={{ height: 28, width: 28, display: 'flex' }} target="_blank" rel="noopener"/>
                </div>
            </div>
            <div className="footer-rights">
                © 2021 Ring and Bling All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer
