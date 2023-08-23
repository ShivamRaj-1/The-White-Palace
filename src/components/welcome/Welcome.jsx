import React from 'react'
import './Welcome.css'
import { Container } from 'react-bootstrap'
import { CiMapPin } from "react-icons/ci";


export default function Welcome() {
    return (
        <>
            <Container fluid style={{
                width: '98.9vw',
                backgroundImage: 'url("https://images.pexels.com/photos/4946676/pexels-photo-4946676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}>

                <div className="heading_content_div welcome_content" >
                    <h5>Welcome To</h5>
                    <h2>The White Palace By Khanak</h2>
                    <p>The White Palace By Khanak in Noida, Uttar Pradesh is one of the most trusted venue to host your wedding or party. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Uttar Pradesh. Over the course of its journey, this business has established a firm foothold in it’s industry.</p>

                    <div className='welcome_innerDiv'>
                        <div><CiMapPin/></div>
                        <div>
                            <h3>Food & Beverages</h3>
                            <p>We provide different types of food and beverages according to the needs and demand of our clients.</p>
                        </div>
                    </div>
                    <div className='welcome_innerDiv'>
                        <div><CiMapPin height='50px'/></div>
                        <div>
                            <h3>Event Organisation</h3>
                            <p>Supported by highly accomplished crew of employees, we are rendering these Services.</p>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}
