import React from 'react'
import './Navbar.css';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
// icons 
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    return (
        <>
            <div className='navbar-main_conatiner'>
                <div className='navbar-container'>
                    <div>
                        <p className='hover-underline-animation'>HOME</p>
                    </div>
                    <div>
                        <p className='hover-underline-animation'>ABOUT US</p>
                    </div>
                    <div>
                        <p className='hover-underline-animation'>SERVICES</p>
                    </div>
                    <div>
                        <img src="https://weblifeinfo.co/demo/master/html/the-white-palace/images/logo.png" alt="Site Logo" />
                    </div>
                    <div>
                        <p className='hover-underline-animation'>PORTFOLIO</p>
                    </div>
                    <div>
                        <p className='hover-underline-animation'>VIDEOS</p>
                    </div>
                    <div>
                        <p className='hover-underline-animation'>CONTACT US</p>
                    </div>
                </div>

                <div className='navbar-Rcontainer'>
                    <div>
                        <img src="https://weblifeinfo.co/demo/master/html/the-white-palace/images/logo.png" alt="Site Logo" width={'190px'} />
                    </div>
                    <div class="dropdown">
                        <a href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                            <GiHamburgerMenu />
                        </a>

                        <ul class="dropdown-menu">
                            <li><span class="dropdown-item" href="#">Home</span></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><span class="dropdown-item" href="#">About Us</span></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li>
                                <div class="dropdown-item" href="#">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Services</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><span class="dropdown-item" href="#">Portfolio</span></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><span class="dropdown-item" href="#">Videos</span></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><span class="dropdown-item" href="#">Contact Us</span></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
