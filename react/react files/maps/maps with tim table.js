import React from 'react';
const App=()=>{
  const arr=[1,2,3,4,5,6,7,8,9,10]
  return(
    <>
    <h1>React Map</h1>
    <table border="1px">
     
      {arr.map((x)=>{
        return  <tr>
             <td>2</td>
             <td> x</td>
             <td>{x}</td>
             <td>=</td>
             <td>{2*x}</td>
              </tr>
      })}
     
     
    </table>
    </>
  )
}
export default App