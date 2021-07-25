import React from 'react'
import { Link } from "react-router-dom";
import {NavbarNavigation, NavbarCategories} from './Data'
import './Header.css'

function FixedMenu(props) {
    return (
        <div className={props.cname1}>
            <div className={props.cname2}>
                <h6>SHOP</h6>
                <div className="navbar-categories">
                    {NavbarCategories.map((item, index) => {
                        return (
                            <Link key={index} to={item.path} onClick={props.close}>
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
                <h6>NAVIGATION</h6>
                {NavbarNavigation.map((item, index) => {
                    return (
                        <Link key={index} to={item.path} onClick={props.close}>
                            {item.title}
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}
export default FixedMenu