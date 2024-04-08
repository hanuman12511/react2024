import { Col, Container, Row } from "react-bootstrap"
import {shop} from '../data/data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Shop(){
    const [product,setProduct] = useState('')

console.log("product",product);

    const nav =useNavigate()
    
    useEffect(()=>{
        setProduct(shop)

    },[])


    return(
        <>
        <Container>
            <Row>
                {
                  product&&product.map(value=>(
                        <Col lg={3} md={6} sm={6} onClick={()=>nav('/details',{state:value})}>
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























