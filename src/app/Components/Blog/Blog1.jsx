import Image from "next/image";
import Link from "next/link";

const Blog1 = () => {
    return (
        <section className="blog-area style-two space bg-theme2">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="title-upper_area">
                        <span className="title">( News & Blog )</span>
                        <h3 className="title-info_text">Read our blog and try to see everythingfrom every perspective. Ourpassion liesin making everything accessible andaesthetic for everyone.</h3>
                    </div>
                </div>
            </div>
            <div className="row gx-60 justify-content-center">
                <div className="col-lg-6">
                    <div className="blog-card">
                        <div className="blog-thumb">
                            <Link href="/blog/blog-details">
                            <Image src="/assets/images/blog/blog-2_1.jpg" alt="img" width={560} height={375}   />
                            </Link>
                        </div>
                        <div className="blog-content">
                            <div className="post-meta-item blog-meta">
                                <a href="#">May 05, 2024</a>
                                <a href="#">Design Trends</a>
                                <a href="#">0 Comments</a>
                            </div>
                            <h4 className="blog-title">
                                <Link href="/blog/blog-details">The Best Kept Secrets of Medspa Web Design</Link>
                            </h4>
                            <Link href="/blog/blog-details" className="link-btn2">
                                <span>Read More</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="blog-card">
                        <div className="blog-thumb">
                            <Link href="/blog/blog-details">
                               <Image src="/assets/images/blog/blog-2_2.jpg" alt="img" width={560} height={375}   />
                            </Link>
                        </div>
                        <div className="blog-content">
                            <div className="post-meta-item blog-meta">
                                <a href="#">May 05, 2024</a>
                                <a href="#">Design Trends</a>
                                <a href="#">0 Comments</a>
                            </div>
                            <h4 className="blog-title">
                                <Link href="/blog/blog-details">The Best Kept Secrets of Medspa Web Design</Link>
                            </h4>
                            <Link href="/blog/blog-details" className="link-btn2">
                                <span>Read More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <div className="btn-wrap btn-bounce-1 mt-30">
                        <Link href="/blog" className="link-btn">
                            <span className="link-effect">
                                <span className="effect-1">View All Blog</span>
                                <span className="effect-1">View All Blog</span>
                            </span>
                            <Image src="/assets/images/icons/arrow-left-top.svg" alt="img" width={10} height={26}   />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Blog1;