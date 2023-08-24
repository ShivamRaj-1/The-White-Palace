import React from 'react'
import './Intro.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';


export default function Intro() {
    return (
        <>
            <Container fluid='lg' >
                <Row xs={1} md={1} lg={3}>
                    <Col lg={2} className='my-5'>
                        <Card className='intro-cardLeft intro_card' style={{ border: '0' }}>
                            <h4>01</h4>
                            <h3>Corporate</h3>
                            <p>With the aid of well-informed team, we are occupied in rendering Corporate Event Services. These services are vastly well-liked among our clients for their timely completion</p>
                            <Card.Img variant='bottom' src='https://weblifeinfo.co/demo/master/html/the-white-palace/images/services/single-001.jpg' />
                        </Card>
                    </Col>
                    <Col lg={8} >
                        <Container className='card_center_main' fluid style={{ backgroundColor: 'rgb(237, 245, 247)', height: '140vh' }}>
                            <Stack className="col-lg-9 mx-auto" style={{ textAlign: 'center' }}>
                                <h4>What We Do</h4>
                                <h2>Premier Catering And Event Planning Company</h2>
                            </Stack>
                            <Stack className="col-lg-6 mx-auto" >
                                <Card className='intro_card' style={{ border: '0', backgroundColor: 'inherit' }}>
                                    <h4>02</h4>
                                    <h3>Parties</h3>
                                    <p>We are amid one of the renowned names involved in organising all types of Parties. A crew of dexterous professionals confirms to render these services.</p>
                                    <Card.Img variant='bottom' src='https://weblifeinfo.co/demo/master/html/the-white-palace/images/services/single-002.jpg' />
                                </Card>
                            </Stack>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignContent: 'center',
                            }}>
                                <Button className='mt-5 mx-auto' variant="outline-dark">Learn More</Button>

                            </div>
                        </Container>
                    </Col>
                    <Col lg={2} className='my-5'>
                        <Card className='intro-cardRight intro_card' style={{ border: '0' }}>
                            <h4>03</h4>
                            <h3>Wedding</h3>
                            <p>Riding on high capacities of industrial ability and understanding, we are providing Wedding Planning Services. These services are delivered in agreement with the clients requisites to achieve client gratification.</p>
                            <Card.Img variant='bottom' src='https://weblifeinfo.co/demo/master/html/the-white-palace/images/services/single-003.jpg' />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
