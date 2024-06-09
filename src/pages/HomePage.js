import React, {useRef} from 'react';

// import photo from '../assets/images/portrait/portrait-hero.png';
import photo from '../assets/images/portrait/my_photo.png';

import slider_1 from '../assets/images/project/project-slider-img-1.jpg';
import slider_2 from '../assets/images/project/project-slider-img-2.jpg';
import slider_3 from '../assets/images/project/project-slider-img-3.jpg';
import slider_4 from '../assets/images/project/project-slider-img-4.jpg';

import company_logo_1 from '../assets/images/company-logo/company-logo-1.png';
import slcompany_1 from '../assets/images/company-logo/1.png';

import company_logo_2 from '../assets/images/company-logo/company-logo-2.png';
import slcompany_2 from '../assets/images/company-logo/2.png';

import company_logo_3 from '../assets/images/company-logo/company-logo-3.png';
import slcompany_3 from '../assets/images/company-logo/3.png';

import company_logo_4 from '../assets/images/company-logo/company-logo-4.png';
import slcompany_4 from '../assets/images/company-logo/4.png';

import service_1 from '../assets/images/icon/service-icon-1.png';
import service_2 from '../assets/images/icon/service-icon-2.png';
import service_3 from '../assets/images/icon/service-icon-3.png';

import counterup_1 from '../assets/images/icon/counterup-icon-1.png';
import counterup_2 from '../assets/images/icon/counterup-icon-2.png';
import counterup_3 from '../assets/images/icon/counterup-icon-3.png';

import blog_1 from '../assets/images/blog/blog-feed-img-1.jpg';
import blog_2 from '../assets/images/blog/blog-feed-img-2.jpg';
import blog_3 from '../assets/images/blog/blog-feed-img-3.jpg';
import blog_4 from '../assets/images/blog/blog-feed-img-4.jpg';


import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination} from "swiper/modules";

function HomePage() {
    const paginationRef = useRef(null);

    return (
        <>
            <div className="hero-section section-dark-blue-bg">
                <div className="hero-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-7">
                                <div className="hero-content">
                                    <h3 className="title-big">Hello! I’m</h3>
                                    <h2 className="title-large">Jamshidbek <br/><span
                                        className="shape-mark">Akhlidinov</span></h2>
                                    <p> Web developer, UI/UX Designer</p>

                                    <a href="#" className="btn btn-xl btn-outline-one icon-space-left">Get Resume <i
                                        className="icofont-download"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-shape hero-top-shape">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="hero-shape hero-bottom-shape">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="hero-portrait">
                        <div className="image">
                            <img className="img-fluid" src={photo} alt=""/>

                            <div className="image-half-round-shape"></div>
                            <div className="social-link">
                                <a href="https://www.example.com/" target="_blank"><i
                                    className="icofont-facebook"></i></a>
                                <a href="https://www.example.com/" target="_blank"><i
                                    className="icofont-dribbble"></i></a>
                                <a href="https://www.example.com/" target="_blank"><i
                                    className="icofont-behance"></i></a>
                                <a href="https://www.example.com/" target="_blank"><i
                                    className="icofont-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="service-display-section section-gap-tb-165 pos-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-content">
                                <span className="section-tag">My Services</span>
                                <h2 className="section-title">Service Provide For My Clients.</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service-display-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="service-display-slider">

                                    <Swiper
                                        spaceBetween={10}
                                        slidesPerView="auto"
                                        navigation={false}
                                        loop={true}
                                        autoplay={{delay: 30000}}
                                        modules={[Navigation, Pagination, Autoplay]}
                                        pagination={{
                                            clickable: true,
                                            el: paginationRef.current, // Pagination elementini belgilash
                                        }}
                                    >
                                        <SwiperSlide className="service-box-single-item" style={null}>
                                            <div className="inner-shape inner-shape-top-right"></div>
                                            <div className="icon"><img
                                                src={service_1} alt=""/></div>
                                            <h4 className="title"><a href="service-details.html">UI/UX
                                                Design</a></h4>
                                            <ul className="list-item">
                                                <li>Landing Pages</li>
                                                <li>User Flow</li>
                                                <li>Wireframing</li>
                                                <li>Prototyping</li>
                                                <li>Mobile App Design</li>
                                            </ul>
                                            <div className="inner-shape inner-shape-bottom-right"></div>
                                        </SwiperSlide>

                                        <SwiperSlide className="service-box-single-item " style={null}>
                                            <div className="inner-shape inner-shape-top-right"></div>
                                            <div className="icon"><img
                                                src={service_2} alt=""/></div>
                                            <h4 className="title"><a href="service-details.html">Development</a>
                                            </h4>
                                            <ul className="list-item">
                                                <li>HTML/CSS</li>
                                                <li>JavaScript</li>
                                                <li>Animation</li>
                                                <li>WordPress</li>
                                                <li>React</li>
                                            </ul>
                                            <div className="inner-shape inner-shape-bottom-right" style={null}></div>
                                        </SwiperSlide>

                                        <SwiperSlide className="service-box-single-item " style={null}>
                                            <div className="inner-shape inner-shape-top-right"></div>
                                            <div className="icon"><img
                                                src={service_3} alt=""/></div>
                                            <h4 className="title"><a
                                                href="service-details.html">Illustration</a></h4>
                                            <ul className="list-item">
                                                <li>Character Design</li>
                                                <li>Icon Set</li>
                                                <li> Illustration Guide</li>
                                                <li>Illustration Set</li>
                                                <li>Motion Graphic</li>
                                            </ul>
                                            <div className="inner-shape inner-shape-bottom-right"></div>
                                        </SwiperSlide>

                                        <SwiperSlide className="service-box-single-item ">
                                            <div className="inner-shape inner-shape-top-right"></div>
                                            <div className="icon"><img
                                                src={service_3} alt=""/></div>
                                            <h4 className="title"><a
                                                href="service-details.html">Illustration</a></h4>
                                            <ul className="list-item">
                                                <li>Character Design</li>
                                                <li>Icon Set</li>
                                                <li> Illustration Guide</li>
                                                <li>Illustration Set</li>
                                                <li>Motion Graphic</li>
                                            </ul>
                                            <div className="inner-shape inner-shape-bottom-right"></div>
                                        </SwiperSlide>

                                    </Swiper>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-display-dots d-flex justify-content-center" style={{'bottom': '10px'}}
                         ref={paginationRef}></div>
                </div>
            </div>


            <div className="counter-display-section section-gap-tb-165 section-bg-2">
                <div className="counter-display-wrapper">
                    <div className="container">
                        <div className="row justify-content-center justify-content-sm-start">
                            <div className="d-block d-md-flex justify-content-md-start col-12 col-sm-4 col-md-4">
                                <div className="counterup-single-item">
                                    <div className="icon">
                                        <img src={counterup_1} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h2 className="number"><span className="counter">2,58</span>+</h2>
                                        <span className="text">Happy Clients</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block d-md-flex justify-content-md-center col-12 col-sm-4 col-md-4">
                                <div className="counterup-single-item">
                                    <div className="icon">
                                        <img src={counterup_2} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h2 className="number"><span className="counter">590</span>K</h2>
                                        <span className="text">Project Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block d-md-flex justify-content-md-end col-12 col-sm-4 col-md-4">
                                <div className="counterup-single-item">
                                    <div className="icon">
                                        <img src={counterup_3} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h2 className="number"><span className="counter">28</span>+</h2>
                                        <span className="text">Years of Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-display-section section-gap-tb-165">
                <div className="project-display-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-xl-12 d-block d-md-flex justify-content-between">
                                <div className="section-content pos-relative">
                                    <span className="section-tag">Awesome Portfolio</span>
                                    <h2 className="section-title">My Complete Projects</h2>
                                </div>

                                <div className="default-nav-style mt-6 mb-6 mb-md-0 ">
                                    <div className="slider-button button-prev"><i
                                        className="icofont-double-left"></i></div>
                                    <div className="slider-button button-next"><i
                                        className="icofont-double-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-display-wrapper">
                        <div className="project-display-slider">
                            <div className="swiper-container">
                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView="auto"
                                    navigation={
                                        {
                                            nextEl: '.button-next', // "Next" tugmasining klass nomini o'zgartirish
                                            prevEl: '.button-prev',
                                        }
                                    }
                                    loop={true}
                                    autoplay={{delay: 30000}}
                                    modules={[Navigation, Pagination, Autoplay]}
                                    pagination={{
                                        clickable: true,
                                        el: paginationRef.current, // Pagination elementini belgilash
                                    }}
                                >
                                    <SwiperSlide className="project-box-single-item" style={null}>
                                        <div className="img-box">
                                            <div className="bg-overlay"></div>
                                            <div className="bg-image">
                                                <img src={slider_1} alt=""/>
                                            </div>
                                            <div className="image">
                                                <img src={slider_1} alt=""/>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4 className="title"><a href="project-details.html">Givest - Non Profit
                                                PSD Template</a></h4>

                                            <ul className="catagory-nav-item">
                                                <li><a href="#">Chairty</a></li>
                                                <li><a href="#">Fund Rising</a></li>
                                                <li><a href="#">Non Profit</a></li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="project-box-single-item" style={null}>
                                        <div className="img-box">
                                            <div className="bg-overlay"></div>
                                            <div className="bg-image">
                                                <img src={slider_2} alt=""/>
                                            </div>
                                            <div className="image">
                                                <img src={slider_2} alt=""/>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4 className="title"><a href="project-details.html">Musion - Gardening
                                                Website Template</a></h4>

                                            <ul className="catagory-nav-item">
                                                <li><a href="#">Gardeining</a></li>
                                                <li><a href="#">Landscaping</a></li>
                                                <li><a href="#">Greem</a></li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="project-box-single-item" style={null}>
                                        <div className="img-box">
                                            <div className="bg-overlay"></div>
                                            <div className="bg-image">
                                                <img src={slider_3} alt=""/>
                                            </div>
                                            <div className="image">
                                                <img src={slider_3} alt=""/>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4 className="title"><a href="project-details.html">SEOLLY - SEO
                                                Marketing & Digital Agency</a></h4>

                                            <ul className="catagory-nav-item">
                                                <li><a href="#">Chairty</a></li>
                                                <li><a href="#">Fund Rising</a></li>
                                                <li><a href="#">Non Profit</a></li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="project-box-single-item" style={null}>
                                        <div className="img-box">
                                            <div className="bg-overlay"></div>
                                            <div className="bg-image">
                                                <img src={slider_4} alt=""/>
                                            </div>
                                            <div className="image">
                                                <img src={slider_4} alt=""/>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4 className="title"><a href="project-details.html">Virtuf - Creative
                                                Agency Bootstrap 5 Template</a></h4>

                                            <ul className="catagory-nav-item">
                                                <li><a href="#">Gardeining</a></li>
                                                <li><a href="#">Landscaping</a></li>
                                                <li><a href="#">Greem</a></li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="testimonial-display-section section-gap-tb-165 section-bg">
                <div
                    className="testimonial-display-box d-flex flex-column align-items-center d-xl-block pos-relative">
                    <div className="container overflow-hidden">
                        <div className="row">
                            <div className="col d-xl-flex justify-content-xl-end">

                                <div className="section-content pos-relative">
                                    <span className="section-tag">Testimonial</span>
                                    <h2 className="section-title">Satisfied Clients Say</h2>
                                </div>

                            </div>
                        </div>

                        <div className="testimonial-display-wrapper">
                            <div className="row">
                                <div className="col-12">
                                    <div className="testimonial-display-slider">

                                        <div className="swiper-container" style={{overflow: 'visible !important'}}>

                                            <Swiper
                                                spaceBetween={10}
                                                slidesPerView="auto"
                                                navigation={
                                                    {
                                                        nextEl: '.button-next2', // "Next" tugmasining klass nomini o'zgartirish
                                                        prevEl: '.button-prev2',
                                                    }
                                                }
                                                loop={true}
                                                autoplay={{delay: 30000}}
                                                modules={[Navigation, Pagination, Autoplay]}
                                                style={{overflow: "visible !important"}}
                                                className="overflow_visible"
                                            >
                                                <SwiperSlide className="testimonial-slider-single-item">
                                                    <div className="inner-shape inner-shape-top-right"></div>
                                                    <div className="content">
                                                        <span className="icon">“</span>
                                                        <p className="text">Lorem Ipsum simpy dummy text of the
                                                            printing and types industry has been the industr
                                                            standard dummy.</p>
                                                        <div className="info">
                                                            <div className="author">
                                                                <h4 className="name">Raleigh Friend</h4>
                                                                <span className="designation">CEO, Seoly</span>
                                                            </div>
                                                            <ul className="review">
                                                                <li className="fill"><i
                                                                    className="icofont-star"></i></li>
                                                                <li className="fill"><i
                                                                    className="icofont-star"></i></li>
                                                                <li className="fill"><i
                                                                    className="icofont-star"></i></li>
                                                                <li className="fill"><i
                                                                    className="icofont-star"></i></li>
                                                                <li className="blank"><i
                                                                    className="icofont-star"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide className="testimonial-slider-single-item">
                                                    <div className="inner-shape inner-shape-top-right"></div>
                                                    <div className="content">
                                                        <span className="icon">“</span>
                                                        <p className="text">Lorem Ipsum simpy dummy text of the
                                                            printing and types industry has been the industr
                                                            standard dummy.</p>
                                                        <div className="info">
                                                            <div className="author">
                                                                <h4 className="name">Raleigh Friend</h4>
                                                                <span className="designation">CEO, Seoly</span>
                                                            </div>
                                                            <ul className="review">
                                                                <li className="fill"><i
                                                                    className="icofont-star"></i></li>
                                                                <li className="fill"><i
                                                                    className="icofont-star"></i></li>
                                                                <li className="fill"><i
                                                                    className="icofont-star"></i></li>
                                                                <li className="fill"><i
                                                                    className="icofont-star"></i></li>
                                                                <li className="blank"><i
                                                                    className="icofont-star"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide className="testimonial-slider-single-item">
                                                    <div className="inner-shape inner-shape-top-right"></div>
                                                    <div className="content">
                                                        <span className="icon">“</span>
                                                        <p className="text">Lorem Ipsum simpy dummy text of the
                                                            printing and types industry has been the industr
                                                            standard dummy.</p>
                                                        <div className="info">
                                                            <div className="author">
                                                                <h4 className="name">Raleigh Friend</h4>
                                                                <span className="designation">CEO, Seoly</span>
                                                            </div>
                                                            <ul className="review">
                                                                <li className="fill"><i
                                                                    className="icofont-star"></i></li>
                                                                <li className="fill"><i
                                                                    className="icofont-star"></i></li>
                                                                <li className="fill"><i
                                                                    className="icofont-star"></i></li>
                                                                <li className="fill"><i
                                                                    className="icofont-star"></i></li>
                                                                <li className="blank"><i
                                                                    className="icofont-star"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>


                                            </Swiper>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="default-nav-style mt-5 mt-xl-0">

                        <div className="slider-button button-prev2"><i className="icofont-double-left"></i></div>
                        <div className="slider-button button-next2"><i className="icofont-double-right"></i></div>
                    </div>
                </div>
            </div>


            <div className="company-logo-display section-mt-165 ">
                <div className="company-logo-display-box">
                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <div className="section-content pos-relative">
                                    <span className="section-tag">Favourite Clients</span>
                                    <h2 className="section-title">Work With Trusted Comapny.</h2>
                                </div>

                            </div>
                        </div>

                        <div className="company-logo-display-wrapper">
                            <div className="row">
                                <div className="col">
                                    <div className="company-logo-display-slider">

                                        <div className="swiper-container">


                                            <Swiper
                                                spaceBetween={10}
                                                slidesPerView="auto"
                                                loop={true}
                                                autoplay={{delay: 30000}}
                                                modules={[Navigation, Pagination, Autoplay]}
                                            >
                                                <SwiperSlide className="company-logo-single-item">
                                                    <a href="#" className="image">
                                                        <img src={company_logo_1}
                                                             alt=""/>
                                                        <img src={slcompany_1} alt=""/>
                                                    </a>
                                                </SwiperSlide>
                                                <SwiperSlide className="company-logo-single-item">
                                                    <a href="#" className="image">
                                                        <img src={company_logo_2}
                                                             alt=""/>
                                                        <img src={slcompany_2} alt=""/>
                                                    </a>
                                                </SwiperSlide>
                                                <SwiperSlide className="company-logo-single-item">
                                                    <a href="#" className="image">
                                                        <img src={company_logo_3}
                                                             alt=""/>
                                                        <img src={slcompany_3} alt=""/>
                                                    </a>
                                                </SwiperSlide>
                                                <SwiperSlide className="company-logo-single-item">
                                                    <a href="#" className="image">
                                                        <img src={company_logo_4}
                                                             alt=""/>
                                                        <img src={slcompany_4} alt=""/>
                                                    </a>
                                                </SwiperSlide>
                                                <SwiperSlide className="company-logo-single-item">
                                                    <a href="#" className="image">
                                                        <img src={company_logo_2}
                                                             alt=""/>
                                                        <img src={slcompany_2} alt=""/>
                                                    </a>
                                                </SwiperSlide>


                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="blog-feed-display-section section-gap-tb-165">
                <div className="blog-feed-display-box">
                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <div className="section-content pos-relative text-center">
                                    <span className="section-tag">Blog Post</span>
                                    <h2 className="section-title">Latest Tips & Tricks</h2>
                                </div>

                            </div>
                        </div>

                        <div className="blog-feed-display-wrapper">
                            <div className="row mb-n5">
                                <div className="col-12 mb-5">

                                    <div className="blog-feed-single-item">
                                        <div className="inner-shape inner-shape-top-right"></div>
                                        <a href="blog-details-sidebar-left.html" className="image">
                                            <img src={blog_1} alt=""/>
                                        </a>
                                        <div className="content-box">
                                            <div className="content">
                                                <div className="post-meta">
                                                    <a href="#" className="catagory">Business</a>
                                                    <a href="#" className="date">07 February, 2021</a>
                                                </div>
                                                <h4 className="title"><a href="blog-details-sidebar-left.html">Don't
                                                    wait until you officially started
                                                    business to line these up.</a></h4>
                                            </div>
                                            <a href="blog-details-sidebar-left.html"
                                               className="btn btn-md btn-outline-one icon-space-left">Read More<i
                                                className="icofont-double-right"></i></a>
                                        </div>

                                    </div>

                                </div>
                                <div className="col-12 mb-5">

                                    <div className="blog-feed-single-item">
                                        <div className="inner-shape inner-shape-top-right"></div>
                                        <a href="blog-details-sidebar-left.html" className="image">
                                            <img src={blog_2} alt=""/>
                                        </a>
                                        <div className="content-box">
                                            <div className="content">
                                                <div className="post-meta">
                                                    <a href="#" className="catagory">Business</a>
                                                    <a href="#" className="date">07 February, 2021</a>
                                                </div>
                                                <h4 className="title"><a href="blog-details-sidebar-left.html">Don't
                                                    wait until you officially started
                                                    business to line these up.</a></h4>
                                            </div>
                                            <a href="blog-details-sidebar-left.html"
                                               className="btn btn-md btn-outline-one icon-space-left">Read More<i
                                                className="icofont-double-right"></i></a>
                                        </div>

                                    </div>

                                </div>
                                <div className="col-12 mb-5">

                                    <div className="blog-feed-single-item">
                                        <div className="inner-shape inner-shape-top-right"></div>
                                        <a href="blog-details-sidebar-left.html" className="image">
                                            <img src={blog_3} alt=""/>
                                        </a>
                                        <div className="content-box">
                                            <div className="content">
                                                <div className="post-meta">
                                                    <a href="#" className="catagory">Business</a>
                                                    <a href="#" className="date">07 February, 2021</a>
                                                </div>
                                                <h4 className="title"><a href="blog-details-sidebar-left.html">Don't
                                                    wait until you officially started
                                                    business to line these up.</a></h4>
                                            </div>
                                            <a href="blog-details-sidebar-left.html"
                                               className="btn btn-md btn-outline-one icon-space-left">Read More<i
                                                className="icofont-double-right"></i></a>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
