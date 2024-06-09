import React from 'react';

function ContactPage() {
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
                                    <h2 className="title">Contact Me</h2>
                                    <ul className="breadcrumb-link">
                                        <li><a href="index.html">Home</a></li>
                                        <li className="active" aria-current="page">Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-section section-gap-tb-165">
                <div className="contact-box pos-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">

                                <div className="map">
                                    <div className="gmap-box">
                                        <iframe id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row flex-lg-row flex-column-reverse">
                            <div className="col-lg-4">
                                <div className="contact-sidebar-wapper">
                                    <div className="contact-sidebar">

                                        <ul className="contact-sidebar-list-item">

                                            <li className="contact-sidebar-single-box">
                                                <h6 className="title-text">Phone:</h6>
                                                <a href="tel:+0123456789" className="link">0123456789</a>
                                            </li>


                                            <li className="contact-sidebar-single-box">
                                                <h6 className="title-text">Email:</h6>
                                                <a href="mailto:demo@example.com" className="link">demo@example.com</a>
                                            </li>


                                            <li className="contact-sidebar-single-box">
                                                <h6 className="title-text">Website:</h6>
                                                <a href="https://www.example.com/" className="link">www.example.com</a>
                                            </li>


                                            <li className="contact-sidebar-single-box">
                                                <h6 className="title-text">Address:</h6>
                                                <span className="text"> Your address goes here.</span>
                                            </li>

                                        </ul>

                                    </div>

                                    <div className="sidebar-widget-single-area ">
                                        <h3 className="title">Follow Me</h3>
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
                            <div className="col-lg-7 offset-lg-1">
                                <div className="contact-form-wrapper section-mt-165">

                                    <div className="content">
                                        <span className="section-tag">Get In Touch</span>
                                        <h2 className="title">If you have any porject or need help. Contact me</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting emndustry
                                            lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown print only five centuries, but also the leap into
                                            electronic.</p>
                                    </div>


                                    <div className="contact-form-box">
                                        <form id="contact-form" className="default-form contact-form"
                                              action="https://whizthemes.com/mail-php/jaber/contact.php" method="post">
                                            <div className="row mb-n6">
                                                <div className="col-xl-6 mb-6">
                                                    <div className="default-form-group">
                                                        <label htmlFor="">
                                                            <input name="name" type="text" placeholder="Name" required/>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 mb-6">
                                                    <div className="default-form-group">
                                                        <label htmlFor="">
                                                            <input name="email" type="email" placeholder="Email"
                                                                   required/>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 mb-6">
                                                    <div className="default-form-group">
                                                        <label htmlFor="">
                                                            <input name="phone" type="tel" placeholder="Phone"
                                                                   required/>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 mb-6">
                                                    <div className="default-form-group">
                                                        <label htmlFor="">
                                                            <input name="subject" type="text" placeholder="Subject"
                                                                   required/>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 mb-6">
                                                    <div className="default-form-group">
                                                        <textarea name="message" placeholder="Comment"
                                                                  required></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-6">
                                                    <div className="default-form-group tex-center">
                                                        <button type="submit"
                                                                className="btn btn-lg btn-outline-one">Submit Message
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="form-messege"></p>
                                            </div>
                                        </form>
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

export default ContactPage;
