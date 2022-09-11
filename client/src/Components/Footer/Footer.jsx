import React from "react";
import CopyrightArea from "./CopyrightArea";
import TopFooter from "./TopFooter";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <>
         <footer className="footer-section">
                <div className="container">
                        <TopFooter />
                        <div className="footer-content pt-5 pb-5">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-logo">
                                            <h2 className="footer_logo">MedKit</h2>
                                        </div>
                                        <div className="footer-text">
                                            <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="footer-social-icon">
                                            <span>Follow us</span>
                                            <Link to="#"><i className="fab fa-facebook-f facebook-bg"></i></Link>
                                            <Link to="#"><i className="fab fa-twitter twitter-bg"></i></Link>
                                            <Link to="#"><i className="fab fa-google-plus-g google-bg"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul>
                                            <li><Link to="#">Home</Link></li>
                                            <li><Link to="#">about</Link></li>
                                            <li><Link to="#">services</Link></li>
                                            <li><Link to="#">Contact</Link></li>
                                            <li><Link to="#">About us</Link></li>
                                            <li><Link to="#">Our Services</Link></li>
                                            <li><Link to="#">Expert Team</Link></li>
                                            <li><Link to="#">Contact us</Link></li>
                                            <li><Link to="#">Latest Blogs</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Subscribe</h3>
                                        </div>
                                        <div className="footer-text mb-25">
                                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                        </div>
                                        <div className="subscribe-form">
                                            <form action="#">
                                                <input type="text" placeholder="Email Address" />
                                                <button><i className="fab fa-telegram-plane"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <CopyrightArea />
             </footer>
             
            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script> */}
        </>
    )
    
}

export default Footer;