
import { useState } from "react"


export function Counter(prop){
  const[counter,setCounter]=useState(0);

  const hendalCount=(value)=>{
    setCounter(counter+value)
 }
    return <>
    <h1>
        counter:{counter}
    </h1>
    <button onClick={()=>{
        hendalCount(1)
    }}>Add 1</button>
    <button onClick={()=>{
        hendalCount(-1)
    }} >
     Subtrect 1
    </button>
  </> 
}