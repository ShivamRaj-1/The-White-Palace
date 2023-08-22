import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
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
    </div>
  )
}
