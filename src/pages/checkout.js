import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styling/checkout.css';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const [processing, setProcessing] = useState(false);

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.length <= 19) { // 16 digits + 3 spaces
      setPaymentInfo(prev => ({
        ...prev,
        cardNumber: formatted
      }));
    }
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiryDate(e.target.value);
    if (formatted.length <= 5) { // MM/YY
      setPaymentInfo(prev => ({
        ...prev,
        expiryDate: formatted
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      clearCart();
      navigate('/order-success', { 
        state: { 
          orderInfo: {
            items: cartItems,
            total: getCartTotal(),
            customerInfo
          }
        }
      });
    }, 2000);
  };

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08; // 8% tax
  const shipping = cartItems.length > 0 ? 5.99 : 0;
  const total = subtotal + tax + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="empty-checkout">
            <h2>Your cart is empty</h2>
            <p>Add some vinyl records to proceed with checkout.</p>
            <button onClick={() => navigate('/library')} className="continue-shopping-btn">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1>Checkout</h1>
        
        <div className="checkout-content">
          <div className="checkout-forms">
            <form onSubmit={handleSubmit} className="checkout-form">
              {/* Customer Information */}
              <div className="form-section">
                <h3>Shipping Information</h3>
                <div className="form-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={customerInfo.firstName}
                    onChange={handleCustomerInfoChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={customerInfo.lastName}
                    onChange={handleCustomerInfoChange}
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={customerInfo.email}
                  onChange={handleCustomerInfoChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={customerInfo.phone}
                  onChange={handleCustomerInfoChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={customerInfo.address}
                  onChange={handleCustomerInfoChange}
                  required
                />
                <div className="form-row">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={customerInfo.city}
                    onChange={handleCustomerInfoChange}
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={customerInfo.state}
                    onChange={handleCustomerInfoChange}
                    required
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={customerInfo.zipCode}
                    onChange={handleCustomerInfoChange}
                    required
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="form-section">
                <h3>Payment Information</h3>
                <input
                  type="text"
                  name="cardholderName"
                  placeholder="Cardholder Name"
                  value={paymentInfo.cardholderName}
                  onChange={handlePaymentInfoChange}
                  required
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={paymentInfo.cardNumber}
                  onChange={handleCardNumberChange}
                  required
                />
                <div className="form-row">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={paymentInfo.expiryDate}
                    onChange={handleExpiryChange}
                    required
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={paymentInfo.cvv}
                    onChange={handlePaymentInfoChange}
                    maxLength="4"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="place-order-btn"
                disabled={processing}
              >
                {processing ? 'Processing...' : `Place Order - $${total.toFixed(2)}`}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                    <p className="item-price">
                      ${(typeof item.price === 'string' 
                        ? parseFloat(item.price.replace('$', '')) 
                        : item.price).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="summary-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="total-row total-final">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;