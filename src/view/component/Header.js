import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return (
        <Container fluid>
            <Row>
                <marquee>HappiGo- Your Favourite Roasted Makhana - Starting at Rs 175 Only ! FREE shipping on orders > Rs 250!</marquee>
      
      
      
      <Navbar expand="lg" className="bg-body-tertiary">
       
        <Container fluid>
          <Navbar.Brand href="home">Happigo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
           
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Shop</Nav.Link>
              <Nav.Link href="#action2">Best Sell</Nav.Link>
              <NavDropdown title="Policy" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Policy</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              
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
      </Row>
      </Container>
    );
  }