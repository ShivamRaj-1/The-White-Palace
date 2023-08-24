import React from 'react'
import { videoData } from '../../assets/videoData'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Videos() {
  return (
    <>
        <Container fluid='lg' style={{margin:"50px auto"}}>
                <div className="heading_content_div">
                    <h5>Our Work Videos</h5>
                    <h2>Our Videos</h2>
                    <p>Must take a look at our videos to understand how we execute these services.</p>
                </div>
                <Row xs={1} md={2} lg={3} xl={3} className="g-4">
                    {
                        videoData.map((elem, ind) => {
                            return <Col key={ind} >
                                <Card style={{height: '240px'}}>
                                <video controls style={{height:"100%", width:'100%'}}>
                                    <source src={elem.mp4} type="video/mp4"/>
                                    <source src={elem.ogg} type="video/ogg"/>
                                </video>
                                </Card> 
                            </Col>
                        })
                    }
                </Row>
            </Container>
    </>
  )
}
