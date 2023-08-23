import React from 'react'
import './Footer.css'
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa"; 
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { portfolioData } from '../../assets/portfoliData';

export default function Footer() {
    return (
        <>
            <div className="footer-main_container">
                <div className="footer-imgDiv">
                    <img src="https://weblifeinfo.co/demo/master/html/the-white-palace/images/logo.png" alt="Site Logo" width="190px" />
                </div>
                <div className="footer-contactDiv">
                    <div>
                        <h4>Our Address</h4>
                        <p>Opp. Panoasis Society, Near SRS Hospital, Basai Village, Sector - 70, Noida, Uttar Pradesh</p>
                    </div>
                    <div>
                        <h4>Talk To Expert</h4>
                        <p>+91-9540666661</p>
                    </div>
                    <div>
                        <h4>Email Us</h4>
                        <p>ravi.basista07@gmail.com</p>
                    </div>
                </div>
                <div className='footer-signupDiv'>
                    <div>
                        <FaRegEnvelope />
                        <input type="email" placeholder='Your Email Address.' />
                        <button>Submit </button>
                    </div>
                </div>
                <section className='footer-details'>
                    <div className="footer-detail_container">

                        <div className="footer-about">
                            <h4>About The White Palace By Khanak</h4>
                            <p>We’ve delivered fabulous wedding event experiences over the last two decades and are now poised to chart out a whole new growth story.</p>
                            <div>
                                <span><Link to='https://www.facebook.com/'><FaFacebookF /></Link></span>
                                <span><Link to='https://twitter.com/'><FaTwitter /></Link></span>
                                <span><Link to='https://www.instagram.com/'><FaInstagram /></Link></span>
                                <span><Link to='https://www.youtube.com/'><FaYoutube /></Link></span>
                            </div>
                        </div>
                        <div className="footer-services">
                            <h4>Our Services</h4>
                            <p><AiOutlineRight/> &nbsp; <span>Event Management</span></p>
                            <p><AiOutlineRight/> &nbsp; <span>Wedding Planner</span></p>
                            <p><AiOutlineRight/> &nbsp; <span>Live Music & Dj</span></p>
                            <p><AiOutlineRight/> &nbsp; <span>Dinner & Drinks</span></p>
                            <p><AiOutlineRight/> &nbsp; <span>Birthday Party</span></p>
                            <p><AiOutlineRight/> &nbsp; <span>Kitty Party</span></p>
                        </div>
                        <div className="footer-links">
                        <h4>Quick Links</h4>
                            <p><AiOutlineRight/> &nbsp; <span>Home</span></p>
                            <p><AiOutlineRight/> &nbsp; <span>About Us</span></p>
                            <p><AiOutlineRight/> &nbsp; <span>Portfolio</span></p>
                            <p><AiOutlineRight/> &nbsp; <span>Videos</span></p>
                            <p><AiOutlineRight/> &nbsp; <span>Contact Us</span></p>
                        </div>
                        <div className="footer-gallery">
                            <h4>Our Gallery</h4>
                            <div>
                            {
                                portfolioData.filter((e,i) => i < 6).map((elem, ind)=> {
                                    return (
                                        <img key={ind} src={elem.img} alt="image" width={'70px'} height={'50px'} />
                                    )
                                })
                            }
                            </div>
                        </div>

                    </div>
                </section>

                <div className='footer-copywrite'>
                    <p>Copyright ©2023. All rights reserved by The White Palace By Khanak. Designed And Developed by  <span><Link to={'http://webtechindiasolutions.com/'}>Webtech India Solutions</Link></span></p>
                </div>
            </div>
        </>
    )
}
