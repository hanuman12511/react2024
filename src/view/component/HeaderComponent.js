import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from "react";
export default function HeaderComponent(){

  const[user,setUser] = useState('')

  useEffect(()=>{
    setUser(localStorage.getItem('user'))

  },[])
    return(
        <Container>
            <Row>
                <Col>
                    <marquee>hello</marquee>
                </Col>
            </Row>
            <Row>
                <Col>
                <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="shop">Shop</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            {
              user?
                  <Nav.Link href="/logout" >
                  Logout
                </Nav.Link>
              :
              <>
            <Nav.Link href="/login" >
              Login
            </Nav.Link>
            <Nav.Link href="/register" >
              Register
            </Nav.Link>
            </>
            
            
          }
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                
                </Col>
            </Row>

           {/*  <Row>
                <Col>
                    <h2>Web</h2>
                </Col>
                <Col>
                    <Link to="/" className="nav">Home</Link>
                    <Link to="/product" className="nav" >Product</Link>
                    <Link to="/login" className="nav">Login</Link>
                    <Link to="/register" className="nav">Register</Link>
                  </Col>
            </Row> */}
        </Container>
    )
}

