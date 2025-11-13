import React from 'react';
import CartComponent from '../components/cart';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styling/cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <CartComponent
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default Cart;