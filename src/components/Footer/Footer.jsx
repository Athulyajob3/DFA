import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <p> Tomato is your trusted companion for quick, fresh, and affordable food delivery. From local favorites to international cuisines, we bring delicious meals right to your doorstep with just a few taps. Our mission is to connect you with the best restaurants in town, ensuring quality, hygiene, and timely service every single time. Whether you’re craving a hot meal, a sweet treat, or a late-night snack, Tomato makes it easy, fast, and reliable.</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy POLICY</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>80893987444</li>
                        <li>contacttomato@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved</p>
        </div>
    )
}

export default Footer