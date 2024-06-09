const NoTFoundPage = () => {
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
                                    <h2 className="title">Page Not Found</h2>
                                    <ul className="breadcrumb-link">
                                        <li><a href="index.html">Home</a></li>
                                        <li className="active" aria-current="page">404</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <div className="error-404-section section-gap-tb-165">
                <div className="error-404-box">
                    <div className="container">
                        <div className="row align-items-center flex-md-row flex-column-reverse">
                            <div className="col-xl-5 col-md-6">
                                <div className="error-404-content">
                                    <h2 className="title">Sorry!</h2>
                                    <h4 className="sub-title">This Page is Not Found.</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and dard dummy text ever since the 1500 when an uniknown specimen book has not only five.</p>

                                    <a href="index.html" className="btn btn-md btn-outline-one icon-space-right"><i className="icofont-double-left"></i> Back To Home</a>
                                </div>
                            </div>
                            <div className="col-xl-6 offset-xl-1 col-md-6">
                                <div className="image">
                                    <img className="img-fluid" src="/404-error.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default NoTFoundPage