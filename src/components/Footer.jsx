import React from 'react'
import Logo from '../images/logo.png';
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import { Button } from './Button';

function Footer() {

    const scrollToSection = () =>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }

    return (
        <>
            <div className='footer'>
                <div className='footer1'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='footer-diagonal'> </div>
                <div className='footer-light'>
                    <div className='footer2'>
                        <div className='ftext'>
                            <h3>Let us make your service great</h3>
                        </div>
                        <Link to="/contact">
                            <Button
                                buttonStyle='btn-other'
                                buttonSize='btn-medium'
                                type='submit'
                            >
                                Get In Touch
                            </Button>
                        </Link>
                        <p>©2022 Le Grand Service Inc. </p>
                        <ul className='footerSocial'>
                            <a className='flinks' href='https://www.instagram.com/les_grand_services'>
                                <li><i className="fa-brands fa-instagram"></i></li>
                            </a>
                            <a className='flinks' href="https://twitter.com/L_G_Services">
                                <li><i className="fa-brands fa-twitter"></i></li>
                            </a>
                            <a className='flinks' href="https://www.facebook.com/le_grand_service-101815039261076">
                                <li><i className="fa-brands fa-facebook"></i></li>
                            </a>
                        </ul>
                    </div>
                    <div className='footer3'>
                        <h2>Quick Links</h2>
                        <ul className="footerLinks">
                            <li ><Link  onClick={scrollToSection} className="flinks hoverLink" to="/">Home</Link></li>
                            <li><Link className="flinks hoverLink" to="/portfolio">Portfolio</Link></li>
                            <li><Link className="flinks hoverLink" to="/services">Services</Link></li>
                            <li><Link className="flinks hoverLink" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer