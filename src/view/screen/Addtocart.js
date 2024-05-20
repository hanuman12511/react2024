import { useEffect, useState } from "react";
import { Col, Container, Row ,Image, Button} from "react-bootstrap";
import { useLocation ,useNavigate} from "react-router-dom";
export default function Addtocart(){
    const nav = useNavigate()
    const[qty,setQty] = useState(1)
    const[rate,setRate] = useState('')
    const[productdetails,setProductDetails] = useState('')
    const loc=useLocation()
    useEffect(()=>{
        setProductDetails(loc.state)
    },[])
    console.log(productdetails);

    function QtyAdd(){
        setQty(qty+1)
    }
    function QtySub(){
        if(qty>1)
        setQty(qty-1)
    }


    function Paymentget(){
        if(localStorage.getItem("user")!==null){
            nav("/payment")
            }
            else{
                nav("/login")
            }
        
    }
    return(
        <Container style={{marginTop:30,marginBottom:50}}>
            <Row>
                <Col>
                <Image src={productdetails.img}  width={200} height={200}/>
                </Col>
                <Col lg={4}>
                    <p>{productdetails.name}</p>
                    <p>Rs.{productdetails.rate}/-</p>
                </Col>
                <Col>
               
                    <Row>
                        <Col><Button onClick={QtyAdd}>+</Button></Col>
                        <Col>{qty}</Col>
                        <Col><Button onClick={QtySub}>-</Button></Col>
                        <Col>  <Image src={require('../image/delete.png')}  width={20} height={20}/></Col>
                    </Row>
                    
                </Col>
                <Col>
                  
                    <p>Rs.{productdetails.rate*qty}/-</p>
                </Col>
                 
            </Row>
            <Row>
                <Col style={{textAlign:'right'}}>
                <p>Estimated total Rs. {productdetails.rate*qty}/-</p>

                <p>Taxes, discounts and shipping calculated at checkout</p>
                <Button variant="primary" onClick={Paymentget}>{'Check out'}</Button>
                </Col>
            </Row>
        </Container>
    )
}
