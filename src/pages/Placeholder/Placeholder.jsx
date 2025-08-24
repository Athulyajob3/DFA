 import React, { useContext } from 'react'
import './Placeholder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Placeholder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  const navigate = useNavigate()

  const handleProceed = (e) => {
    e.preventDefault()  
    navigate("/payment")  
  }

  return (
    <form className='place-order'>
      <div className="placeholder-left">
        <p className='title'> Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="Email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className='multi-fields'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="placeholder-right">
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() + 5}</b>
            </div>
          </div>
          <button onClick={handleProceed}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeholder
