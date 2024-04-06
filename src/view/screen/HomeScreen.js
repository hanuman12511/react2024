import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
function HomeScreen() {
  return (
    <Container fluid>
    <Carousel>
      <Carousel.Item>
      <Image src={require('../image/banner3 happigo 1600565 (1) (1).webp')} fluid />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require('../image/banner4 1600565 (1) (1).webp')} fluid />
      
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require('../image/banner3 happigo 1600565 (2).webp')} fluid />
      
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Row>
        <Col>
        <h1>Shop by Categories</h1>
        </Col>
        <Row>
        { [1,2,3,4,5,6].map(d=>(
            <Col>
            <Card style={{ width: '19rem' }}>
        <Card.Img variant="top" src={require('../image/Cheesy blast roasted makhana.png')} />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
        ))
        
    }
        </Row>
    </Row>
    <Row>
        <Col>
        <Image src={require('../image/Untitled design (5).png')} fluid />;
        </Col>
    </Row>

    <Row>
        <Col xs={6} md={4}>
        <Image src={require('../image/Jalapeno oasted makhana.png')} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src={require('../image/himalayan pink salt & pepper roasted makhana.png')} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src={require('../image/Cheesy blast roasted makhana.png')} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;