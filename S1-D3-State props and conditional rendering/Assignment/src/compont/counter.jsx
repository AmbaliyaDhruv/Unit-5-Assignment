
import { useState } from "react"


export function Counter(prop){
  const[counter,setCounter]=useState(1);
  // const counterController=(value)=>{
  //         setCounter(counter*value)
  // }
  
    return <>
      <h1>Counter : {counter}</h1>
      <button onClick={()=>{setCounter(counter*2)}}>Increment</button>
      <br />
      <button onClick={()=>{
        if(counter>2){
          setCounter(counter-2)
        }
        else{
          setCounter(1)
        }
        }}>Decrement</button>
  </> 
}