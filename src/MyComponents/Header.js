import React,{useState} from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import { BsList, BsX } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import FixedMenu from './FixedMenu';

function Header() {
    const [sidebar, setSidebar] = useState(false)
    const [searchbar, setSearchbar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const showSearchbar = () => setSearchbar(!searchbar)
    return (
        <>
            <div className={sidebar ? 'left-menu-active' : 'menu' }>
                <div className={sidebar ? 'left-menu-container' : 'menu-container' }>
                <BsX size={25} className="close-icon" onClick={showSidebar}/>
                    <div className="menu-wrap">
                        <FixedMenu close={showSidebar}/>
                    </div>
                </div>
                <div className="menu-close" onClick={showSidebar}></div>
            </div>
            <div className={searchbar ? 'searchBar' : 'search-bar'} >
                <input type="text" name="search" placeholder="Search" />
                <div className="closebtn" onClick={showSearchbar}></div>
            </div>
            <div className="nav">
                <div className="nav-left">
                    <button type="button" onClick={showSidebar}>
                        <BsList/>
                        <div>MENU</div>
                    </button>
                    <span onClick={showSearchbar}><FaSearch size={14} color="grey" cursor="pointer"/></span>
                </div>
                <div className="nav-mid">
                    <Link to="/"><h3>RING AND BLING</h3></Link>
                </div>
                <div className="nav-right">
                    <Link to="/Login">Login</Link>
                    <Link to="/Register">Register</Link>
                    <Link to="">Cart</Link>
                </div>
            </div>
        </>
    )
}
export default Header