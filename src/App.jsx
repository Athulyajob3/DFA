 import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeholder from './pages/Placeholder/Placeholder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Admin from './pages/Admin/Admin'
import Payment from './pages/Payment/Payment'
import OrderSuccess from './pages/OrderSuccess/OrderSuccess'   // ✅ Import OrderSuccess
import StoreContextProvider from './context/StoreContext'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <StoreContextProvider>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeholder />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/order-success' element={<OrderSuccess />} /> {/* ✅ Added OrderSuccess */}
        </Routes>
      </div>
      <Footer />
    </StoreContextProvider>
  )
}

export default App
