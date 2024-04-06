import { Card, Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function FooterComponent(){
    return(
        <>
        <Container>
            <Row>
                <Col lg={3} md={6}>
                    <p>About</p>
                    <span>In case you are using Sass the simplest way is to include the Bootstrap’s source Sass files in your main Sass file and then require it on your src/index.js or App.js file. This applies to a typical create-react-app application in other use cases you might have to setup the bundler of your choice to compile Sass/SCSS stylesheets to CSS.</span>
                </Col> 
                <Col lg={3} md={6}>
                    <p>OUR POLICIES</p>
                   
                   <a href="#"> Shipping Details</a><br/>
                   <a href="#">Return & Exchange Policy</a><br/>
                   <a href="#">Return & Exchange Policy</a><br/>
                   <a href="#">Order Cancellation</a><br/>
                   <a href="#">Privacy Policy</a><br/>
                   <a href="#">Terms Of Service</a><br/>
                   <a href="#">Refund Policy</a><br/>
                    
                </Col> 
                <Col lg={3} md={6}>
                    <p>EXPLORE US</p>
                    <a href="#"> About Us</a><br/>
                    <a href="#">Contact Us</a><br/>
                    <a href="#"> Terms And Conditions</a><br/>
                </Col> 
                <Col lg={3} md={6}>
                    <p>SIGN UP AND SAVE</p>
                    
                    <p>In case you are using Sass the simplest way is to include the Bootstrap’s source Sass files </p>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                       
                    </Form.Group>

                   
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col> 
            </Row>
        </Container>
        </>
    )
}

export default FooterComponent