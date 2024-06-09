import React from 'react';

function AboutPage() {
    return (
        <>


            <div className="breadcrumb-section section-bg overflow-hidden pos-relative">
                <div className="breadcrumb-shape-top-left"></div>
                <div className="breadcrumb-shape-bottom-right"></div>
                <div className="breadcrumb-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-content">
                                    <h2 className="title">About Us</h2>
                                    <ul className="breadcrumb-link">
                                        <li><a href="index.html">Home</a></li>
                                        <li className="active" aria-current="page">About</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="video-info-display-section section-gap-tb-165">
                <div className="video-info-display-box">
                    <div className="container">
                        <div className="video-info-display-wrapper">
                            <div className="row align-items-center">
                                <div
                                    className="col-xl-5 col-lg-6 col-md-6 col-sm-8 col-10 offset-1 offset-sm-2 offset-md-3 offset-lg-0">
                                    <div className="video-card">
                                        <a className="wave-btn" href="https://youtu.be/MKjhBO2xQzg" data-autoplay="true"
                                           data-vbtype="video">
                                            <div className="ripple"><i className="icofont-ui-play"></i></div>
                                        </a>

                                        <a href="#" className="btn btn-xl btn-outline-one icon-space-left">Get Resume <i
                                            className="icofont-download"></i></a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-8 offset-md-2 offset-lg-0 offset-xl-1">
                                    <div className="video-info-content">
                                        <h2 className="title">I’m Mirta Akins</h2>

                                        <h3 className="sub-title">
                                            UI/UX designer specializing in shopify & webflow.
                                        </h3>

                                        <p>Lorem Ipsum is simply dummy text of the printing and pesetting industry has
                                            been the industry's standard dummy text ever since the 1500s, when an unkn
                                            own printer took galley of type and scrambled.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="resume-info-display-section  section-gap-tb-165 section-bg">
                <div className="resume-info-display-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ul className="resume-tab nav">
                                    <li className="nav-item">
                                        <button className="nav-link active" data-bs-toggle="tab"
                                                data-bs-target="#education-tab">Education
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" data-bs-toggle="tab"
                                                data-bs-target="#experience-tab">Experience
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="resume-info-display-wrapper">
                            <div className="row">
                                <div className="col-12">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="education-tab" role="tabpanel">
                                            <ul className="resume-list">

                                                <li className="resume-tab-list-single-item">
                                                    <div className="content">
                                                        <div className="left">
                                                            <span className="year">2009 - 2010</span>
                                                        </div>
                                                        <div className="right">
                                                            <h3 className="title">Bachelor of Business
                                                                Administration </h3>
                                                            <span className="institute-name">University of California, Berkeley</span>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and
                                                                typesetting industry. Lorem Ipsum has been indus dard
                                                                dummy text ever since the 1500 when an uniknown prnter
                                                                took galley of type and scrambled
                                                                make specimen book has not only five centuries the into
                                                                electronic.</p>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li className="resume-tab-list-single-item">
                                                    <div className="content">
                                                        <div className="left">
                                                            <span className="year">2012 - 2014</span>
                                                        </div>
                                                        <div className="right">
                                                            <h3 className="title">Masters of Business
                                                                Administration </h3>
                                                            <span className="institute-name">University of California, Berkeley</span>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and
                                                                typesetting industry. Lorem Ipsum has been indus dard
                                                                dummy text ever since the 1500 when an uniknown prnter
                                                                took galley of type and scrambled
                                                                make specimen book has not only five centuries the into
                                                                electronic.</p>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li className="resume-tab-list-single-item">
                                                    <div className="content">
                                                        <div className="left">
                                                            <span className="year">2015 - 2018</span>
                                                        </div>
                                                        <div className="right">
                                                            <h3 className="title">Bachelor of Graphic Arts</h3>
                                                            <span className="institute-name">University of California, Berkeley</span>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and
                                                                typesetting industry. Lorem Ipsum has been indus dard
                                                                dummy text ever since the 1500 when an uniknown prnter
                                                                took galley of type and scrambled
                                                                make specimen book has not only five centuries the into
                                                                electronic.</p>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="tab-pane fade" id="experience-tab" role="tabpanel">
                                            <ul className="resume-list">

                                                <li className="resume-tab-list-single-item">
                                                    <div className="content">
                                                        <div className="left">
                                                            <span className="year">2016 - 2018</span>
                                                        </div>
                                                        <div className="right">
                                                            <h3 className="title">Web Designer</h3>
                                                            <span className="institute-name">Graphic Dev</span>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and
                                                                typesetting industry. Lorem Ipsum has been indus dard
                                                                dummy text ever since the 1500 when an uniknown prnter
                                                                took galley of type and scrambled
                                                                make specimen book has not only five centuries the into
                                                                electronic.</p>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li className="resume-tab-list-single-item">
                                                    <div className="content">
                                                        <div className="left">
                                                            <span className="year">2018 - 2019</span>
                                                        </div>
                                                        <div className="right">
                                                            <h3 className="title">Junior Web Developer</h3>
                                                            <span className="institute-name">Acme Lab</span>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and
                                                                typesetting industry. Lorem Ipsum has been indus dard
                                                                dummy text ever since the 1500 when an uniknown prnter
                                                                took galley of type and scrambled
                                                                make specimen book has not only five centuries the into
                                                                electronic.</p>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li className="resume-tab-list-single-item">
                                                    <div className="content">
                                                        <div className="left">
                                                            <span className="year">2019 - 2020</span>
                                                        </div>
                                                        <div className="right">
                                                            <h3 className="title">Senior Web Developer</h3>
                                                            <span className="institute-name">Devtwist</span>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and
                                                                typesetting industry. Lorem Ipsum has been indus dard
                                                                dummy text ever since the 1500 when an uniknown prnter
                                                                took galley of type and scrambled
                                                                make specimen book has not only five centuries the into
                                                                electronic.</p>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="counter-display-section section-gap-tb-165 section-bg-2">
                <div className="counter-display-wrapper">
                    <div className="container">
                        <div className="row justify-content-center justify-content-sm-start">
                            <div className="d-block d-md-flex justify-content-md-start col-12 col-sm-4 col-md-4">

                                <div className="counterup-single-item">
                                    <div className="icon">
                                        <img src="assets/images/icon/counterup-icon-1.png" alt=""/>
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
                                        <img src="assets/images/icon/counterup-icon-2.png" alt=""/>
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
                                        <img src="assets/images/icon/counterup-icon-3.png" alt=""/>
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


            <div className="company-logo-display    section-gap-tb-165">
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

                                            <div className="swiper-wrapper">

                                                <div className="company-logo-single-item swiper-slide">
                                                    <a href="#" className="image">
                                                        <img src="assets/images/company-logo/company-logo-1.png"
                                                             alt=""/>
                                                        <img src="assets/images/company-logo/1.png" alt=""/>
                                                    </a>
                                                </div>


                                                <div className="company-logo-single-item swiper-slide">
                                                    <a href="#" className="image">
                                                        <img src="assets/images/company-logo/company-logo-2.png"
                                                             alt=""/>
                                                        <img src="assets/images/company-logo/2.png" alt=""/>
                                                    </a>
                                                </div>


                                                <div className="company-logo-single-item swiper-slide">
                                                    <a href="#" className="image">
                                                        <img src="assets/images/company-logo/company-logo-3.png"
                                                             alt=""/>
                                                        <img src="assets/images/company-logo/3.png" alt=""/>
                                                    </a>
                                                </div>


                                                <div className="company-logo-single-item swiper-slide">
                                                    <a href="#" className="image">
                                                        <img src="assets/images/company-logo/company-logo-4.png"
                                                             alt=""/>
                                                        <img src="assets/images/company-logo/4.png" alt=""/>
                                                    </a>
                                                </div>

                                            </div>
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

export default AboutPage;
