import React from 'react'
import './Topbar.css';
import { Link } from 'react-router-dom';

// icons 
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";


export default function Topbar() {
  return (
    <div className="topbar-main_container">
        <div className="topbar-container">
            <div>
                <FaPhoneAlt/> <span>+91-9540666661</span>
            </div>
            <div>
                <FaRegEnvelope/> <span>ravi.basista07@gmail.com</span>
            </div>
            <div></div>
            <div>
                <LuClock3/> <span>Working Hours: 09:00 AM - 10:00 PM</span>
            </div>
            <div className="topbar-socials">
                <div className="topbar-socials_left">
                    <span><Link to='https://www.facebook.com/'><FaFacebookF/></Link></span>
                    <span><Link to='https://twitter.com/'><FaTwitter/></Link></span>
                    <span><Link to='https://www.instagram.com/'><FaInstagram/></Link></span>
                    <span><Link to='https://www.youtube.com/'><FaYoutube/></Link></span>
                </div>
                <div className="topbar-socials_right">
                    Get A Quote 
                </div>
            </div>
        </div>
    </div>
  )
}
