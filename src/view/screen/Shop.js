import { Col, Container, Row } from "react-bootstrap"
import {shop} from '../data/data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function Shop(){
    const nav =useNavigate()
    return(
        <>
        <Container>
            <Row>
                {
                    shop.map(value=>(
                        <Col lg={3} md={6} sm={6} onClick={()=>nav('/details')}>
                             <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={value.img} />
                            <Card.Body>
                                <Card.Title>{value.name}</Card.Title>
                                
                                <Button variant="primary">Add To Cart</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    ))
               
                }
            </Row>

        </Container>

        </>
    )
}
export default Shop























