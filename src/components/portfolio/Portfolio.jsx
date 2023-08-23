import React from 'react'

import { portfolioData } from '../../assets/portfoliData'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Portfolio() {
    return (
        <>
            <Container fluid='lg' style={{padding:"100px 0"}}>
                <div className="heading_content_div">
                    <h5>Our Work Portfolio</h5>
                    <h2>Our Portfolio</h2>
                    <p>Must take a look at our portfolio to understand how we execute these services.</p>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        portfolioData.map((elem, ind) => {
                            return <Col key={ind}>
                                <Card>
                                    <Card.Img variant="top" src={elem.img} alt='image' height={'270px'}/>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </>
    )
}
