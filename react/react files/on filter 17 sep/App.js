import React from "react";
import { useState } from "react";
export default function App() {
  const data= ['Apple','banana','grapes','Watermelon']
const [fruit,setFruit]=useState(data)
 
 
  return (
    <>
  {
    fruit.filter(x=>x.includes('p')).map((list)=>{
      return(
        <>
        <li>{list}</li>
        </>
      )
    }
  )
  }
    </>
  );
}
 