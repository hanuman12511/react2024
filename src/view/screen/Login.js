import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Login(){

const[email,setmail] = useState('')
const[password,setPassword] = useState('')

const isEmail=(event)=>{
    setmail(event.target.value)

}

const isPassword=(event)=>{
setPassword(event.target.value)
}

const onPressLogin=()=>{
    console.log(email);
    console.log(password);
    console.log("login");

    const param = {
        email:email,
        password:password
    }

localStorage.setItem("user",param)
    console.log(param);
    setmail("")
    setPassword("")
window.location="/"
}

    return(
        <Container className="" style={{backgroundColor:'lightcoral',padding:50}}>
            <Row>
                <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={isEmail} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={isPassword} placeholder="Password" />
                    </Form.Group>
                   
                    <Button variant="primary" type="button" onClick={onPressLogin}>
                        Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}