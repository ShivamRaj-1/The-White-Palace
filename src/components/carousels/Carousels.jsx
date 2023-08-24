import React from 'react'
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';

export default function Carousels() {
    return (
        <>
            <Carousel >
                <Carousel.Item style={{ position: 'relative' }} interval={5000}>
                    <img
                        className="d-block w-100"
                        src="https://weblifeinfo.co/demo/master/html/the-white-palace/images/slides/postslider-1.jpg"
                        alt="First slide"
                    />
                    <ContentDiv />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="https://weblifeinfo.co/demo/master/html/the-white-palace/images/slides/postslider-2.jpg"
                        alt="First slide"
                    />
                    <ContentDiv />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="https://weblifeinfo.co/demo/master/html/the-white-palace/images/slides/postslider-3.jpg"
                        alt="First slide"
                    />
                    <ContentDiv />
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export function ContentDiv() {
    return (
        <div style={{
            height: "50%",
            width: "50%",
            textAlign: "center",
            backgroundColor: '#ffffffeb',
            color: 'black',
            zIndex: "10",
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }} className='carousel-innerDiv slide-up-fade-in container'>
            <div style={{
                width: '50%',
                margin: 'auto',
            }}>
                <h4 style={{
                    fontFamily: "Hind, sans-serif",
                    fontSize: "15px",
                    color: '#b5882b',
                }}>We Are</h4>
                <h1 style={{
                    fontFamily: "Cormorant, sans-serif",
                    fontWeight: "bold",

                }}>The White Palace By Khanak</h1>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <button>More Services</button>
                    <button>Contact Us</button>
                </div>
            </div>
        </div>
    )
}
