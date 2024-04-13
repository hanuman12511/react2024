import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
export default function Addtocart(){
    const loc=useLocation()
    
    console.log(loc.state);
    return(
        <Container>
            <Row>
                <Col>
                
                </Col>
                <Col>
                
                </Col>
                 
            </Row>
        </Container>
    )
}
