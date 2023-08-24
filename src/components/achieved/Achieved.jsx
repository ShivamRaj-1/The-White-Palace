import React from 'react';
import './Achiever.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { GiTrophyCup } from 'react-icons/gi';
import { BsPersonGear } from 'react-icons/bs';
import { MdOutlineCelebration } from 'react-icons/md';
import { ImSmile } from 'react-icons/im';
import pic1 from './1.png'
import pic2 from './2.png'
import pic3 from './3.png'



export default function Achieved() {
    return (
        <>
            <Container fluid='true' style={{maxWidth: '98.9vw', overflowX: 'hidden' }}>
                <Row xs={1} md={1} lg={2}>
                    <Col lg={8}>
                        <Container fluid='true' >
                            <Stack >
                                <img src="https://images.pexels.com/photos/273920/pexels-photo-273920.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" height='601' style={{ zIndex: '5' }} />
                            </Stack>
                            <Stack>
                                <Row className="justify-content-lg-center">
                                    <Col lg={8}>
                                        <Carousel data-bs-theme="dark" controls='false'>
                                            <Carousel.Item>
                                                <img src={pic1} className=" w-80" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={pic2} className=" w-80" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={pic3} className="d-block w-80" />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                            </Stack>
                        </Container>
                    </Col>
                    <Col lg={4} style={{ backgroundColor: 'rgb(237, 245, 247)', marginLeft: '-190px' }} className='achieved-details_heading_main'>
                        <Stack className='achieved-details_heading' style={{ paddingTop: '100px', paddingRight: '150px', paddingLeft: '70px' }}>
                            <h4 style={{ zIndex: '10' }}>Who We Are</h4>
                            <h2 style={{ zIndex: '10' }}>What We Have Achieved</h2>
                        </Stack>
                        <Row className="justify-content-lg-end">
                            <Col lg={7} className='achieved-content'>
                                <div className="achieved-details">
                                    <div><BsPersonGear /></div>
                                    <div>
                                        <h1>25+</h1>
                                        <p>Team Members</p>
                                    </div>
                                </div>
                                <div className="achieved-details">
                                    <div><GiTrophyCup /></div>
                                    <div>
                                        <h1>19+</h1>
                                        <p>Winning Awards</p>
                                    </div>
                                </div>
                                <div className="achieved-details">
                                    <div><MdOutlineCelebration /></div>
                                    <div>
                                        <h1>485+</h1>
                                        <p>Completed Events</p>
                                    </div>
                                </div>
                                <div className="achieved-details">
                                    <div><ImSmile /></div>
                                    <div>
                                        <h1>315+</h1>
                                        <p>Clients Feedback</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
