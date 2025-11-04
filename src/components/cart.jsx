import React, { useState } from "react";

const CartComponent = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (vinyl) => {
    setCart([...cart, vinyl]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={() => addToCart("vinyl")}>Add to Cart</button>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartComponent;