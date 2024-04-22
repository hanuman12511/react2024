
import { useEffect, useState } from 'react'
import {Row,Col, Button} from 'react-bootstrap'

const data =[
    {name:"Delivery",color:"blue"},
    {name:"Confirmation",color:"blue"},
    {name:"Payment",color:"blue"},
    {name:"Finish",color:"blue"},
]
export default  function Payment(){
    const[next1,setNext1] = useState("")
    const[color,setColor] = useState("")
    const[key,setKey] = useState(0)
    const[colordata,setDataColor] = useState("")
    
    useEffect(()=>{
            setDataColor(data)
    },[data])

    function onClickNext1(){
        console.log("next");
        setColor("pink")
       
        if(key<3){
            data[key].color="pink"
        setKey(key+1)
        }
    }
    
    function onClickBack1(){
        console.log("next");
        setColor("pink")
       
        if(key>=0){
        setKey(key-1)
        data[key].color="blue"
        }
       
    }
    console.log(key);
    console.log(data);

    function fun1(){
        return(
            <h1>fun1</h1>
        )
    }

    function fun2(){
        return(
            <h1>fun2</h1>
        )
    }

    function fun3(){
        return(
            <h1>fun3</h1>
        )
    }

    function fun4(){
        return(
            <h1>fun4</h1>
        )
    }
    return(
    <>
        <Row>
            {colordata&&colordata.map(d=>(
                <Col>
                <div style={{width:'100%',height:10,backgroundColor:d.color }}></div>
                <h2 style={{color:d.color}}>{d.name}</h2>
                </Col>
            )) 
           
        }
        </Row>
        <Row style={{marginTop:200,marginBottom:200}}>
            <Col>
            {key==0?fun1():key==1?fun2():key==2?fun3():fun4()}
            </Col>
            <Col style={{textAlign:'right'}}>
            <Button onClick={onClickBack1}>Back</Button>
            
            <Button onClick={onClickNext1}>Next</Button>
            </Col>
        </Row>
        </>
    )
}