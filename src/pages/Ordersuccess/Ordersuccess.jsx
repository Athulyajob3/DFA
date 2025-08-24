// src/pages/OrderSuccess/OrderSuccess.jsx
import React from 'react';
import './OrderSuccess.css';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="order-success">
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Thank you for your purchase. Your order will be delivered soon.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default OrderSuccess;
