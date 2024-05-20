import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../data/store/slice/couterSlice";


export default function Counter(){
 
    const dispatch = useDispatch();
const value= useSelector(state=>state.counter.value);
//const value= useSelector(state=>state)
console.log(value);
    const IncrementData=()=>{
        dispatch(increment());
    }
  
    return(
        <>
        <h1>{value}</h1>

       <Button onClick={IncrementData}>+</Button>
        </>
    )
}