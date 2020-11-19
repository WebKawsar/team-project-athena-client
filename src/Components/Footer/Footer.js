import React from 'react';
import './Footer.css';
import logo from '../../athena-design-resources/Illustration/Group 86.png';
import facebook from '../../athena-design-resources/Illustration/facebook-logo-in-circular-shape@2x.png';
import twitter from '../../athena-design-resources/Illustration/twitter (4)@2x.png';
import linkedin from '../../athena-design-resources/Illustration/linkedin (2)@2x.png';
import dribbble from '../../athena-design-resources/Illustration/dribbble (1)@2x.png';
import behance from '../../athena-design-resources/Illustration/behance.svg';

const Footer = () => {
    return (
        <div className='bg-color'>
            <div className="container pb-5">
                <div className="topPart text-center pt-5">
                    <h1 style={{ fontFamily: 'normal' }}>Get your design right, right now</h1>
                    <h5 className='text-muted mt-3'>Be the first know our latest offers and updates!</h5>
                    <div className="d-flex">
                        <input className='input form-control mt-5 mb-5 p-4' type="email" placeholder="Enter your email address" />
                        <button className='getStarted'>Get Started</button>
                    </div>
                </div>
                <div className="bottomPart mt-5 pt-3">
                    <div className="row">
                        <div className="col-md-4 pl-5 ml-3">
                            <img className='logoImg' src={logo} alt="" />
                            <div className="d-flex">
                                <img className='socialIcon' src={facebook} alt="" />
                                <img className='socialIcon' src={twitter} alt="" />
                                <img className='socialIcon' src={linkedin} alt="" />
                                <img className='socialIcon' src={dribbble} alt="" />
                                <img className='socialIcon' src={behance} alt="" />
                            </div>
                        </div>
                        <div className="col-md-2 text-muted ml-3 mt-3">
                            <h6>Features</h6>
                            <h6>Enterprise</h6>
                            <h6>Pricing</h6>
                        </div>
                        <div className="col-md-2 text-muted ml-3 mt-3">
                            <h6>Blog</h6>
                            <h6>Help Center</h6>
                            <h6>Contact Us</h6>
                            <h6>Status</h6>
                        </div>
                        <div className="col-md-2 text-muted ml-3 mt-3">
                            <h6>About Us</h6>
                            <h6>Terms of Service</h6>
                            <h6>Security</h6>
                            <h6>Login</h6>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;