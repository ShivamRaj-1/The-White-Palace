import React, { useState } from 'react'
import './Navbar.css';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
// icons 
import { GiHamburgerMenu } from "react-icons/gi";
import { HiChevronDown } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className='navbar-main_conatiner'>
                <div className='navbar-container'>
                    <div>
                        <Link to='/'><p className='hover-underline-animation'>HOME</p></Link>
                    </div>
                    <div>
                        <Link to='/about-us'><p className='hover-underline-animation'>ABOUT US</p></Link>
                    </div>
                    <div>
                        <p className='hover-underline-animation'>
                            <Dropdown className="d-inline mx-2">
                                <Dropdown.Toggle id="dropdown-autoclose-true" variant='secondary'>
                                    Services
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ width: '30vw' }}>
                                    <Dropdown.Item href="#">Event Management</Dropdown.Item>
                                    <Dropdown.Item href="#">Wedding Planner</Dropdown.Item>
                                    <Dropdown.Item href="#">Live Music & Dj</Dropdown.Item>
                                    <Dropdown.Item href="#">Dinner & Drinks</Dropdown.Item>
                                    <Dropdown.Item href="#">Birthday Party</Dropdown.Item>
                                    <Dropdown.Item href="#">Kitty Party</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </p>
                    </div>
                    <div>
                        <img src="https://weblifeinfo.co/demo/master/html/the-white-palace/images/logo.png" alt="Site Logo" />
                    </div>
                    <div>
                        <Link to='/portfolio'><p className='hover-underline-animation'>PORTFOLIO</p></Link>
                    </div>
                    <div>
                        <Link to='/videos'><p className='hover-underline-animation'>VIDEOS</p></Link>
                    </div>
                    <div>
                        <Link to='/contact-us'><p className='hover-underline-animation'>CONTACT US</p></Link>
                    </div>
                </div>

                <div className='navbar-Rcontainer'>
                    <div>
                        <img src="https://weblifeinfo.co/demo/master/html/the-white-palace/images/logo.png" alt="Site Logo" width={'190px'} />
                    </div>
                    <div class="dropdown">
                        <a href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false" onClick={() => setShowMenu(!showMenu)}>
                            {
                                showMenu ? <HiXMark /> : <GiHamburgerMenu />
                            }

                        </a>

                        <ul class="dropdown-menu">
                            <li><span class="dropdown-item" href="#">Home</span></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><span class="dropdown-item" href="#">About Us</span></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li>
                                <div class="dropdown-item">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Services &nbsp; <HiChevronDown /></Accordion.Header>
                                            <Accordion.Body>
                                                <Dropdown.Item href="#">Event Management</Dropdown.Item>
                                                <Dropdown.Item href="#">Wedding Planner</Dropdown.Item>
                                                <Dropdown.Item href="#">Live Music & Dj</Dropdown.Item>
                                                <Dropdown.Item href="#">Dinner & Drinks</Dropdown.Item>
                                                <Dropdown.Item href="#">Birthday Party</Dropdown.Item>
                                                <Dropdown.Item href="#">Kitty Party</Dropdown.Item>
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
