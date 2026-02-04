import React from 'react'

export default function Cart() {
  return (
    <>
    
    {cart.map((item)=>(
      <div key={item.id}>
        <h2>{item.name}</h2>
        <p>Price: {item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    ))}
    
    </>
  )
}
