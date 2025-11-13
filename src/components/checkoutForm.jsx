import React, { useState } from 'react';

// Note: This is a demo checkout form component
// For real Stripe integration, you would need:
// 1. Stripe API keys configured
// 2. Backend endpoint to create payment intent
// 3. Proper error handling and validation

const CheckoutFormDemo = ({ total, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Demo: Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      onSuccess?.();
    }, 2000);
  };

  return (
    <div className="demo-checkout-form">
      <h3>Payment Information</h3>
      <p className="demo-notice">
        🚧 This is a demo payment form. No real charges will be made.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="cardholderName"
            placeholder="Cardholder Name"
            value={cardInfo.cardholderName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={cardInfo.cardNumber}
            onChange={handleInputChange}
            maxLength="19"
            required
          />
        </div>
        
        <div className="form-row">
          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            value={cardInfo.expiryDate}
            onChange={handleInputChange}
            maxLength="5"
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="123"
            value={cardInfo.cvv}
            onChange={handleInputChange}
            maxLength="4"
            required
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="demo-pay-btn"
        >
          {loading ? 'Processing...' : `Pay $${total?.toFixed(2) || '0.00'}`}
        </button>
      </form>
    </div>
  );
};

export default CheckoutFormDemo;
