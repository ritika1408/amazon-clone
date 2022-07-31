import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <h5>Get to Know Us</h5>
                            <ul>
                                <li>About Us </li>
                                <li><a href='https://amazon.jobs/en/'>Careers</a></li>
                                <li>Press Releases</li>
                                <li>Amazon Cares</li>
                                <li>Gift a Smile</li>
                                <li>Amazon Science</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h5>Connect with Us</h5>
                            <ul>
                                <li><a href='https://www.facebook.com/AmazonIN'> Facebook </a></li>
                                <li><a href='https://twitter.com/AmazonIN'> Twitter </a></li>
                                <li><a href='https://www.instagram.com/amazondotin/'> Instagram </a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h5>Make Money with Us</h5>
                            <ul>
                                <li>Sell on Amazon </li>
                                <li>Sell under Amazon </li>
                                <li>Amazon Global Selling </li>
                                <li>Become an Affiliate</li>
                                <li>Advertise Your Products</li>
                                <li>Amazon Pay on Merchants</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h5>Let Us Help You</h5>
                            <ul>
                                <li>COVID-19 and Amazon </li>
                                <li>Amazon App Download</li>
                                <li>Amazon Assistant </li>
                                <li>Your account</li>
                                <li>Returns Centre</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>
                           <hr className='footer__line'/>
                           <div className="mt-5">
                               <p className='main-hero-para text-center w-100'>Copyright @2022 all rights reserved</p>
                           </div>

                </div>
            </div>
        </div>
    </footer>
        
    
    
   
  )
}

export default Footer