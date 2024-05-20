
import { useEffect, useState } from 'react'
import {Row,Col, Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
const data =[
    {name:"Delivery",color:"pink"},
    {name:"Confirmation",color:"blue"},
    {name:"Payment",color:"blue"},
    {name:"Finish",color:"blue"},
]
export default  function Payment(){
    const[next1,setNext1] = useState("")
    const[color,setColor] = useState("")
    let[key,setKey] = useState(1)
    const[colordata,setDataColor] = useState("")
    
    useEffect(()=>{
            setDataColor(data)
    },[data])

    function onClickNext1(){
        
       
        if(key<3){
            data[key].color="pink"
        setKey(key+1)
        }
    }
    
    function onClickBack1(){
        
       
        if(key>1){
            key-=1
        setKey(key)
        data[key].color="blue"
        }
       
    }
    console.log(key);
    console.log(data);

    function fun1(){
        return(
            <Row>
                <Col>
                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter fullname "/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Addres" />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" />
      </Form.Group>
      
    
    </Form>
                </Col>
            </Row>
        )
    }

    function fun2(){
        return(
            <Row>
            <Col>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter OTP</Form.Label>
    <Form.Control type="text" placeholder="Otp "/>
   
  </Form.Group>

  

</Form>
            </Col>
        </Row>
        ) 
    }

    function fun3(){
        return(
            <Row>
            <Col>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>CardHolders Name</Form.Label>
    <Form.Control type="text" placeholder=" "/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Card Number</Form.Label>
    <Form.Control type="text" placeholder=" "/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Valid Month/Year</Form.Label>
    <Form.Control type="text" placeholder="MM/YY "/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>CVV/CVC</Form.Label>
    <Form.Control type="text" placeholder=" "/>
   
  </Form.Group>

  

</Form>
            </Col>
        </Row>
        )
    }

    function fun4(){
        return(
            <h1>fun4</h1>
        )
    }
    return(
    <>
        <Row style={{marginLeft:100,marginRight:100}}>
            {colordata&&colordata.map(d=>(
                <Col>
                <div style={{transition:'2s',width:'100%',height:10,backgroundColor:d.color }}></div>
                <h2 style={{color:d.color,transition:'2s ease' }}>{d.name}</h2>
                </Col>
            )) 
           
        }
        </Row>
        <Row style={{marginTop:20,marginBottom:20,marginLeft:100,marginRight:100}}>
            <Col>
            {key==1?fun1():key==2?fun2():key==3?fun3():fun4()}
            </Col>
           
        </Row>
        <Row style={{marginLeft:100,marginRight:100}}>
        <Col style={{textAlign:''}}>
            <Button onClick={onClickBack1}>Back</Button>
            </Col>
            <Col style={{textAlign:'right'}}>
            <Button onClick={onClickNext1}>Next</Button>
            </Col>
        </Row>
        <Row>
        <Col style={{marginBottom:100}}>
        </Col>
        </Row>
        </>
    )
}