import React from "react";

const CartComponent = ({ cartItems, onRemoveItem, onUpdateQuantity, onCheckout }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = typeof item.price === 'string' 
        ? parseFloat(item.price.replace('$', '')) 
        : parseFloat(item.price);
      return total + (price * (item.quantity || 1));
    }, 0).toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty</h2>
        <p>Add some vinyl records to get started!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart ({cartItems.length} items)</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-description">{item.description}</p>
              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                    disabled={(item.quantity || 1) <= 1}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity || 1}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <span className="cart-item-price">
                  ${typeof item.price === 'string' ? item.price.replace('$', '') : item.price}
                </span>
                <button 
                  onClick={() => onRemoveItem(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-total">
          <strong>Total: ${calculateTotal()}</strong>
        </div>
        <button onClick={onCheckout} className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartComponent;