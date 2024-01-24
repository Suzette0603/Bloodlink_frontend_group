import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/style.css'
import bloodgroup from '../assets/Group 16blood-donation.svg'
import {Link} from "react-router-dom"

const Home = () => {
  return (
   
    <>
        <div className='body'>
                <header id="header" class="fixed-top d-flex align-items-center">
                <div class="container d-flex align-items-center justify-content-between">

                <div class="logo">
                    <h1 class="text-light"><a href="index.html"><span>Logo</span></a></h1>
                
                    <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
                </div>

                <nav id="navbar" class="navbar">
                    <ul>
                    <li>
                        <Link to="/home" className='link'>Home</Link>
                    </li>
                    <li>
                    <Link to="/about" className='link'>About Us</Link>
                    </li>
                    <li>
                    <Link to="/services" className='link'>Servives</Link>
                    </li>
                    <li>
                    <Link to="/documentation" className='link'>Documentation</Link>
                    </li>
                    <li>
                    <Link to="/contact" className='link'>Our Contact</Link>
                    </li>

                    <li><a class="getstarted scrollto" href="#about">Login/Register</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
                </header>
        <section id="hero" class="d-flex align-items-center">

            <div class="container">
            <div class="row gy-4">
                <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1>Filling The Gap ...</h1>
                    <h2>Net Blood Safe Lives</h2>
                    <p>Our mission is to fill the gap between blood donors and recipients, 
                    providing a seamless and efficient encounter for both parties.
                    A reliable source, providing you the best experience....</p>

                <div>
                <a href="#about" class="btn-find-donor scrollto">Find a Donor</a>
                </div>
                </div>
                <div class="col-md-6 order-1 order-md-4 hero-img">
                <img src={bloodgroup} class="img-fluid animated" alt=""/>
                </div>
            </div>
            </div>

        </section>
        

            <footer id="footer">
        
                    <div class="footer-top">
                    <div class="container">
                        <div class="row">

                        <div class="col-lg-3 col-md-6 footer-contact">
                            <h3>Ninestars</h3>
                            <p>
                            A108 Adam Street <br/>
                            New York, NY 535022<br/>
                            United States <br/><br/>
                            <strong>Phone:</strong> +1 5589 55488 55<br/>
                            <strong>Email:</strong> info@example.com<br/>
                            </p>
                        </div>


                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                            <div class="social-links mt-3">
                            <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                            <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                            <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                            <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>

                    <div class="container py-4">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Ninestars</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                    
                        <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                    </div>
            </footer>

            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
            </div>
        </>
  )
}

export default Home