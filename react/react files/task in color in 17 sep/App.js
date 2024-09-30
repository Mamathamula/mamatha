import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState("React");
  const [color, setColor] = useState('blue'); 

  const handler = (e) => {
    const value = e.target.value.toLowerCase();
    setState(value);

    
    if (value === 'red') {
      setColor('red');
    } else if (value === 'green') {
      setColor('green');
    } else if (value === 'blue') {
      setColor('blue');
    } else {
      setColor('black'); 
    }
  };

  return (
    <>
      <h2 style={{ background: color }}>{state}</h2>
      <input
        type="text"
        value={state}
        onChange={handler}
       
      />
    </>
  );
}
