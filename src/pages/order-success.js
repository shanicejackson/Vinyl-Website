import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styling/order-success.css';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderInfo = location.state?.orderInfo;

  if (!orderInfo) {
    return (
      <div className="order-success-page">
        <div className="order-success-container">
          <div className="no-order">
            <h2>No order information found</h2>
            <button onClick={() => navigate('/library')} className="continue-shopping-btn">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  const orderNumber = `NV${Date.now().toString().slice(-6)}`;

  return (
    <div className="order-success-page">
      <div className="order-success-container">
        <div className="success-header">
          <div className="success-icon">✅</div>
          <h1>Order Confirmed!</h1>
          <p>Thank you for your purchase, {orderInfo.customerInfo.firstName}!</p>
        </div>

        <div className="order-details">
          <div className="order-info">
            <h3>Order Details</h3>
            <div className="info-row">
              <span>Order Number:</span>
              <span>#{orderNumber}</span>
            </div>
            <div className="info-row">
              <span>Email:</span>
              <span>{orderInfo.customerInfo.email}</span>
            </div>
            <div className="info-row">
              <span>Total Amount:</span>
              <span>${(orderInfo.total + (orderInfo.total * 0.08) + 5.99).toFixed(2)}</span>
            </div>
          </div>

          <div className="shipping-info">
            <h3>Shipping Address</h3>
            <div className="address">
              <p>{orderInfo.customerInfo.firstName} {orderInfo.customerInfo.lastName}</p>
              <p>{orderInfo.customerInfo.address}</p>
              <p>{orderInfo.customerInfo.city}, {orderInfo.customerInfo.state} {orderInfo.customerInfo.zipCode}</p>
            </div>
          </div>
        </div>

        <div className="ordered-items">
          <h3>Items Ordered</h3>
          <div className="items-list">
            {orderInfo.items.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <div className="item-price-qty">
                    <span>Qty: {item.quantity}</span>
                    <span className="price">
                      ${(typeof item.price === 'string' 
                        ? parseFloat(item.price.replace('$', '')) 
                        : item.price).toFixed(2)} each
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="next-steps">
          <h3>What's Next?</h3>
          <div className="steps">
            <div className="step">
              <div className="step-icon">📧</div>
              <div className="step-text">
                <h4>Confirmation Email</h4>
                <p>We've sent a confirmation email to {orderInfo.customerInfo.email}</p>
              </div>
            </div>
            <div className="step">
              <div className="step-icon">📦</div>
              <div className="step-text">
                <h4>Processing</h4>
                <p>Your order will be processed within 1-2 business days</p>
              </div>
            </div>
            <div className="step">
              <div className="step-icon">🚚</div>
              <div className="step-text">
                <h4>Shipping</h4>
                <p>Estimated delivery: 5-7 business days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button onClick={() => navigate('/library')} className="continue-shopping-btn">
            Continue Shopping
          </button>
          <button onClick={() => navigate('/home')} className="home-btn">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;