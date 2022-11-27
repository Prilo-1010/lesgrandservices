import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../styles/Navbar.css'

function Navbar() {
    //Fist state
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    //state after
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(true);

    const changeBackground = () => {
        if (window.scrollY >= 1) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <div className={navbar ? 'navbar act' : 'navbar'}>
                <div className="image">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div onClick={handleClick}>
                    <ul className={click ? 'navLinks active' : 'navLinks'}>
                        <li><NavLink className="links hoverLink" onClick={closeMenu} to="/">Home</NavLink></li>
                        <li><NavLink className="links hoverLink" onClick={closeMenu} to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink className="links hoverLink" onClick={closeMenu} to="/blogs">Blogs</NavLink></li>
                        <li><NavLink className="links hoverLink" onClick={closeMenu} to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar