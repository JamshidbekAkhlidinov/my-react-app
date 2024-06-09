import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NoTFoundPage from "./pages/NoTFoundPage";


import './assets/css/vendor/vendor.min.css';
import './assets/css/plugins/plugins.min.css';
import './assets/css/style.min.css';

import './assets/images/favicon.ico';
import logo from './assets/images/logo/logo.png';




function App() {
    return (
        <>
            <Router>
                <main className="main-wrapper">
                    <header className="header-section sticky-header d-none d-lg-block">
                        <div className="header-wrapper">
                            <div className="container">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col">
                                        <Link to="/" className="header-logo">
                                            <img src={logo} alt=""/>
                                        </Link>
                                    </div>
                                    <div className="col-auto">
                                        <ul className="header-nav">
                                            <li>
                                                <Link to="/">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link to="/service">
                                                    Service
                                                </Link>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link to="/blog">
                                                    Blog
                                                </Link>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link to="/about">
                                                    About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <div className="header-btn-link text-end">
                                            <Link to="/contact" className="btn btn-sm btn-outline-one icon-space-left">
                                                Hire Me <i className="icofont-double-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="mobile-header d-block d-lg-none">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col">
                                    <div className="mobile-logo">
                                        <a href="index.html">
                                            <img src={logo} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mobile-action-link text-end">
                                        <a href="#mobile-menu-offcanvas" className="offcanvas-toggle offside-menu"><i
                                            className="icofont-navigation-menu"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="mobile-menu-offcanvas"
                         className="offcanvas offcanvas-rightside offcanvas-mobile-menu-section">
                        <div className="offcanvas-header text-end">
                            <button className="offcanvas-close"><i className="icofont-close-line"></i></button>
                        </div>
                        <div className="offcanvas-mobile-menu-wrapper">
                            <div className="mobile-menu-bottom">
                                <div className="offcanvas-menu">
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <span>Home</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
                                                <span>Services</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">
                                                <span>Blog</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about">
                                                <span>About</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">
                                                <span>Contact</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mobile-contact-info text-center">
                                <ul className="social-link">
                                    <li><a target="_blank" href="https://example.com/"><i
                                        className="icofont-facebook"></i></a>
                                    </li>
                                    <li><a target="_blank" href="https://example.com/"><i
                                        className="icofont-twitter"></i></a>
                                    </li>
                                    <li><a target="_blank" href="https://example.com/"><i className="icofont-skype"></i></a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="offcanvas-overlay"></div>

                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/contact" element={<ContactPage/>}/>
                        <Route path="*" element={<NoTFoundPage/>}/>
                    </Routes>


                    <footer className="footer-section section-bg overflow-hidden pos-relative">
                        <div className="footer-inner-shape-top-left"></div>
                        <div className="footer-inner-shape-top-right"></div>
                        <div className="footer-section-top section-gap-t-165">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">

                                        <div className="section-content pos-relative text-center">
                                            <span className="section-tag">Get Latest Updates</span>
                                            <h2 className="section-title">Subscribe For Newsletter</h2>
                                        </div>

                                    </div>
                                </div>
                                <div className="footer-top-wrapper text-center">
                                    <div className="row">
                                        <div className="col-12">
                                            <form action="#" className="footer-newsletter">
                                                <input type="email" placeholder="demo@example.com"/>
                                                <button className="submit-btn" type="submit">Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-center section-gap-tb-165">
                            <div className="container">
                                <div className="row justify-content-between align-items-center mb-n5">
                                    <div className="col-auto mb-5">

                                        <div className="footer-single-info">
                                            <a href="tel:+0123456789" className="info-box">
                                                <span className="icon"><i className="icofont-phone"></i></span>
                                                <span className="text">0123456789</span>
                                            </a>
                                        </div>

                                    </div>
                                    <div className="col-auto mb-5">

                                        <div className="footer-single-info">
                                            <a href="mailto:demo@example.com" className="info-box">
                                                <span className="icon"><i className="icofont-envelope-open"></i></span>
                                                <span className="text">demo@example.com</span>
                                            </a>
                                        </div>

                                    </div>
                                    <div className="col-auto mb-5">

                                        <div className="footer-single-info">
                                            <ul className="social-link">
                                                <li><a href="https://www.example.com/" target="_blank"><i
                                                    className="icofont-facebook"></i></a></li>
                                                <li><a href="https://www.example.com/" target="_blank"><i
                                                    className="icofont-dribbble"></i></a></li>
                                                <li><a href="https://www.example.com/" target="_blank"><i
                                                    className="icofont-linkedin"></i></a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="container">
                                <div
                                    className="row justify-content-center justify-content-md-between align-items-center flex-column-reverse flex-md-row">
                                    <div className="col-auto">
                                        <div className="footer-copyright">
                                            <p className="copyright-text">&copy; 2021 <a
                                                href="index.html">Lendex</a> Made
                                                with <i className="icofont-heart"></i> by <a
                                                    href="https://hasthemes.com/"
                                                    target="_blank">HasThemes</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <a href="index.html" className="footer-logo">
                                            <div className="logo">
                                                <img src={logo} alt=""/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>


                    <button className="material-scrolltop" type="button"></button>
                </main>

            </Router>
        </>
    )
        ;
}

export default App;
