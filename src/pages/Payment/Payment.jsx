import React, { useContext } from "react";
import "./Payment.css";
import { StoreContext } from "../../context/StoreContext";

const Payment = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const handlePayment = () => {
    alert("✅ Payment Successful!\nThank you for your order.");
    
  };

  return (
    <div className="payment-container">
      <h1>Checkout</h1>
      <p>Total Amount: <strong>₹{getTotalCartAmount()}</strong></p>
      
      <div className="payment-options">
        <label>
          <input type="radio" name="payment" defaultChecked /> Cash on Delivery
        </label>
        <label>
          <input type="radio" name="payment" /> UPI / Wallet
        </label>
        <label>
          <input type="radio" name="payment" /> Debit / Credit Card
        </label>
      </div>

      <button className="pay-btn" onClick={handlePayment}>
        Confirm Payment
      </button>
    </div>
  );
};

export default Payment;
