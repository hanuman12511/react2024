import{Container,Row,Col, Image} from 'react-bootstrap'
import{product} from '../data/data'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
function Home(){

return(
<>
<Container>
    <Row>
      <Col>
        <Carousel>
          <Carousel.Item>
             <Image  src={require('../image/banner3 happigo 1600565 (1) (1).webp')} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    
    <Row>
        <Col>
            <h1>Our Product</h1>
            <Row>
                {
           product.map(d=>(
                    <Col >
                       <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={d.img} />
                        <Card.Body>
                          <Card.Title>{d.name}</Card.Title>
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
        
        </Col>
    </Row>
</Container>
</>
    )
}
export default Home