import React from 'react'
import { featureData } from '../../assets/featureData'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Feature() {
    return (
        <>
            <Container fluid='lg' style={{ borderBottom: '1px solid gray' }}>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        featureData.map((elem, ind) => {
                            return (
                                <Col key={ind} style={{ marginBottom: '50px', marginTop: '100px' }}>
                                    <Card style={{ border: '0',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Card.Img variant="top" src={elem.img} style={{ padding: '16px', height: '100px', width: '100px' }} />
                                        <Card.Body style={{textAlign: 'center'}}>
                                            <Card.Title style={{fontFamily: 'Cormorant, sans-serif', fontSize: '26px'}}>{elem.title}</Card.Title>
                                            <Card.Text style={{fontFamily: 'Hind, sans-serif', fontSize: '15px'}}>{elem.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

        </>
    )
}
