
import React from 'react';
import { useState, useEffect } from 'react';
 
export default function App() {
  const [state, setState] = useState([]);
 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);
 
  return (
    <>
      <div className='container'>
        <div className='row'>
          {state.map((list) => {
            return (
              <div className="card col-lg-6 bg-warning" style={{ height: '600px' }} key={list.id}>
                <h5 className="card-title">Id: {list.id}</h5>
                <img
                  src={list.image}
                  className="card-img-top"
                  alt="..."
                  style={{ height: '50%', borderRadius: '50%' }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Price: {list.price}
                    <br />
                    {list.category}
                  </p>
                  <p>Additional paragraph with more information about the product.</p> {/* New paragraph */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}