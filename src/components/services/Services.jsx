import React from 'react'
import { servicesData } from '../../assets/servicesData'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Services() {
    return (
        <>
            <Container fluid='lg' style={{ margin: "50px auto" }}>
                <div className="heading_content_div">
                    <h5>Our Featured Services</h5>
                    <h2>We Provide The Best Services</h2>
                    <p>We commence these services only after identifying the given details of our clients.</p>
                </div>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        servicesData.map((elem, ind) => {
                            return <Col key={ind} style={{marginBottom:'32px'}}>
                                <Card style={{border: '0'}}>
                                    <Card.Img variant="top" src={elem.img} style={{padding:'16px'}}/>
                                    <Card.Body>
                                        <Card.Title>{elem.title}</Card.Title>
                                        <Card.Text>{elem.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </>
    )
}
