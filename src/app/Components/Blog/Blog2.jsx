import Link from "next/link";

const Blog2 = () => {
    return (
<section className="blog-area space-bottom bg-theme2">
            <div className="blog-title text-center mb-60 md-mb-40">
                <h2 className="big-title mb-0 mt--15">OUR BLOG <span className="font2 ml-50 md-ml-0 xs-d-none">Our News</span></h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="blog-item-wrapper">
                            <div className="blog-item hover-reveal-item">
                                <div className="blog-inner d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                                    <div className="blog-meta mb-md-0">
                                        <span className="blog-meta_title">UX/UI</span>
                                        <p className="blog-meta_date">APRIL 20, 2024</p>
                                    </div>
                                    <h3 className="blog-title mb-4 mb-md-0"><Link href="/blog/blog-details">Key Factors to Consider When <br/> Choosing a UX Design Agency</Link></h3>
                                    <div className="blog-btn-wrapper">
                                        <Link className="blog-btn" href="/blog/blog-details">
                                            <span><i className="bi bi-arrow-up-right"></i><i className="bi bi-arrow-up-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="hover-reveal-bg" data-background="/assets/images/blog/blog-1_1.jpg"></div>
                            </div>
                            <div className="blog-item hover-reveal-item">
                                <div className="blog-inner d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                                    <div className="blog-meta mb-md-0">
                                        <span className="blog-meta_title">HTML</span>
                                        <p className="blog-meta_date">APRIL 22, 2024</p>
                                    </div>
                                    <h3 className="blog-title mb-4 mb-md-0"><Link href="/blog/blog-details">What Is UX Design? Fourmeta’s <br/> Comprehensive Guide 2024</Link></h3>
                                    <div className="blog-btn-wrapper">
                                        <Link className="blog-btn" href="/blog/blog-details">
                                        <span><i className="bi bi-arrow-up-right"></i><i className="bi bi-arrow-up-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="hover-reveal-bg" data-background="/assets/images/blog/blog-1_2.jpg"></div>
                            </div>
                            <div className="blog-item hover-reveal-item">
                                <div className="blog-inner d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                                    <div className="blog-meta mb-md-0">
                                        <span className="blog-meta_title">WORDPRESS</span>
                                        <p className="blog-meta_date">APRIL 24, 2024</p>
                                    </div>
                                    <h3 className="blog-title mb-4 mb-md-0"><Link href="/blog/blog-details">What Is UX Design? Fourmeta’s <br/> Comprehensive Guide</Link></h3>
                                    <div className="blog-btn-wrapper">
                                        <Link className="blog-btn" href="/blog/blog-details">
                                        <span><i className="bi bi-arrow-up-right"></i><i className="bi bi-arrow-up-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="hover-reveal-bg" data-background="/assets/images/blog/blog-1_3.jpg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog2;