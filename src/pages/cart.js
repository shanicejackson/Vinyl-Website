import React from 'react';
import CartComponent from '../components/cart';
import { useCart } from '../context/CartContext';
import '../styling/cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleCheckout = () => {
    // Navigate to checkout or handle checkout logic
    alert('Proceeding to checkout...');
    // You could navigate to a checkout page here:
    // navigate('/checkout');
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