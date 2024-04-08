import { Col, Container, Image, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Accordion from 'react-bootstrap/Accordion';
import {bestseller} from '../data/data'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function Details(){
    const loc = useLocation()
    const[productdetails ,setProductDetails] = useState('')

    useEffect (()=>{
        console.log(loc.state);
        setProductDetails(loc.state)
    },[])

    console.log(productdetails);
    return(
        <Container>
        <Row>
            <Col lg={6}>
                <Image src={productdetails.img} fluid/>
            </Col>
            <Col lg={6}>
                <Row>
                    <Col><p>Dark Grey Colour Lycra Pants</p></Col>
                    <Col><p>Rs. 1,399.00</p></Col>
                </Row>
                <Row>
                    <Col>
                        <Image src={require('../image/Logo/icons8-star-100.png')} style={{width:20}}/>
                        <Image src={require('../image/Logo/icons8-star-100.png')} style={{width:20}}/>
                        <Image src={require('../image/Logo/icons8-star-100.png')} style={{width:20}}/>
                        <Image src={require('../image/Logo/icons8-star-100.png')} style={{width:20}}/>
                        <Image src={require('../image/Logo/icons8-star-100.png')} style={{width:20}}/>
                        <span>23 reviews</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>size</p>
                    <Row>
                        <Col>
                        <Button variant="outline-primary">S</Button>{'     '}
                        <Button variant="outline-primary">S</Button>{'     '}
                        <Button variant="outline-primary">S</Button>{'     '}
                        <Button variant="outline-primary">S</Button>{'     '}
                        <Button variant="outline-primary">S</Button>{'     '}
                        <Button variant="outline-primary">S</Button>{'     '}
                        </Col>
                    </Row>

                    <Row>
                    <Col>
                    <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Size Chart</Accordion.Header>
                        <Accordion.Body>
                        <Image src={require('../image/sizechart.webp')} fluid/>
         
                        </Accordion.Body>
                    </Accordion.Item>
                    
                    </Accordion>
                    </Col>

                    </Row>
                    <Row>
                        <Col>
                        <p>Colors</p>
                        <Button variant="primary" style={{width:30,height:30}}></Button>{' '}
                        <Button variant="secondary" style={{width:30,height:30}}></Button>{' '}
                        <Button variant="success" style={{width:30,height:30}}></Button>{' '}
                        <Button variant="warning" style={{width:30,height:30}}></Button>{' '}
                        <Button variant="danger" style={{width:30,height:30}}></Button>{' '}
                        <Button variant="info" style={{width:30,height:30}}></Button>{' '}
                        <Button variant="light" style={{width:30,height:30}}></Button>{' '}
                        <Button variant="dark" style={{width:30,height:30}}></Button>
                       
                        </Col>
                    </Row>
                        <Row>
                            <Col>
                            <Button variant="primary" style={{width:"100%"}}>Add To Cart</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Button variant="primary" style={{width:"100%"}}>Buy It Now</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row>
            <Col>
                <h1>Best Seller</h1>
            </Col>
            <Row>
                {
                    bestseller.map(value=>(
                        <Col lg={4}>
                             <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={value.img} />
                            <Card.Body>
                                <Card.Title style={{fontSize:16}}>{value.name}</Card.Title>
                               
                                <Button variant="primary">Add To Cart</Button>
                            </Card.Body>
                            </Card> 
                       </Col>
                    ))
               
                }
            </Row>




        </Row>

                <Row>
                    <Col>
                    <Image src={require('../image/banner4 1600565 (1) (1).webp')} fluid />
                    </Col>

                </Row>
        </Container>
    )
}

export default Details