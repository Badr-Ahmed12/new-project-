import Image from "next/image";
import Link from "next/link";

const Blog3 = () => {
    return (
            <section className="blogs-area space bg-theme2">
                <div className="container">
                    <div className="blog__inner-wrap">
                        <div className="row gx-35 lg-gx-25 gy-35 flex-lg-row flex-column-reverse">
                            <div className="col-lg-8">
                                <div className="blog__details-wrap">
                                    <div className="single-blog-box">
                                        <a className="meta" href="#"> Branding . 20 April, 2024 </a>
                                        <h3 className="blog-title">
                                            <Link href="/blog/blog-details">10 things nobody told you about being a web and mobile designer</Link>
                                        </h3>
                                        <figure className="blog-thumb"><Image src="/assets/images/blog/blogs-1_1.jpg" alt="img" width={798} height={448}   /></figure>
                                        <div className="blog-content">
                                            <p className="blog-text">There are many variations of passages of Lorem Ipsum available, but the majority have
                                                suffered alteration in
                                                by injected humour, or randomised words even slightly believable.</p>
                                    
                                            <Link href="/blog/blog-details" className="link-btn3">
                                                <span className="link-effect">
                                                    <span className="effect-1">Read More</span>
                                                    <span className="effect-1">Read More</span>
                                                </span>
                                                <div className="btn-circle">
                                                    <span><i className="bi bi-arrow-up-right"></i><i className="bi bi-arrow-up-right"></i></span>
                                                 </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-box">
                                        <a className="meta" href="#"> Marketing . 20 April, 2024 </a>
                                        <h3 className="blog-title">
                                            <Link href="/blog/blog-details">7 Ways to improve website usability and accessibility</Link>
                                        </h3>
                                        <figure className="blog-thumb"><Image src="/assets/images/blog/blogs-1_2.jpg" alt="img" width={798} height={448}   /></figure>
                                        <div className="blog-content">
                                            <p className="blog-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in by injected humour, or randomised words even slightly believable.</p>
                                            <Link href="/blog/blog-details" className="link-btn3">
                                                <span className="link-effect">
                                                    <span className="effect-1">Read More</span>
                                                    <span className="effect-1">Read More</span>
                                                </span>
                                                <div className="btn-circle">
                                                <span><i className="bi bi-arrow-up-right"></i><i className="bi bi-arrow-up-right"></i></span>
                                                 </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-box">
                                        <a className="meta" href="#"> Creative . 20 April, 2024 </a>
                                        <h3 className="blog-title">
                                            <Link href="/blog/blog-details">Creative process within agencies thrives on collaboration</Link>
                                        </h3>
                                        <figure className="blog-thumb"><Image src="/assets/images/blog/blogs-1_3.jpg" alt="img" width={798} height={448}   /></figure>
                                        <div className="blog-content">
                                            <p className="blog-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in by injected humour, or randomised words even slightly believable.</p>
                                            <Link href="/blog/blog-details" className="link-btn3">
                                                <span className="link-effect">
                                                    <span className="effect-1">Read More</span>
                                                    <span className="effect-1">Read More</span>
                                                </span>
                                                <div className="btn-circle">
                                                <span><i className="bi bi-arrow-up-right"></i><i className="bi bi-arrow-up-right"></i></span>
                                                 </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-box">
                                        <a className="meta" href="#"> Branding . 20 April, 2024 </a>
                                        <h3 className="blog-title">
                                            <Link href="/blog/blog-details">How design Is changing all industries and why you need to keep up</Link>
                                        </h3>
                                        <figure className="blog-thumb"><Image src="/assets/images/blog/blogs-1_4.jpg" alt="img" width={798} height={448}   /></figure>
                                        <div className="blog-content">
                                            <p className="blog-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in by injected humour, or randomised words even slightly believable.</p>
                                            <a href="/blog/blog-details" className="link-btn3">
                                                <span className="link-effect">
                                                    <span className="effect-1">Read More</span>
                                                    <span className="effect-1">Read More</span>
                                                </span>
                                                <div className="btn-circle">
                                                <span><i className="bi bi-arrow-up-right"></i><i className="bi bi-arrow-up-right"></i></span>
                                                 </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="single-blog-box">
                                        <a className="meta" href="#"> Branding . 20 April, 2024 </a>
                                        <h3 className="blog-title">
                                            <Link href="/blog/blog-details">10 things nobody told you about being a web and mobile designer</Link>
                                        </h3>
                                        <figure className="blog-thumb"><Image src="/assets/images/blog/blogs-1_5.jpg" alt="img" width={798} height={448}   /></figure>
                                        <div className="blog-content">
                                            <p className="blog-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in by injected humour, or randomised words even slightly believable.</p>
                                            <Link href="/blog/blog-details" className="link-btn3">
                                                <span className="link-effect">
                                                    <span className="effect-1">Read More</span>
                                                    <span className="effect-1">Read More</span>
                                                </span>
                                                <div className="btn-circle">
                                                <span><i className="bi bi-arrow-up-right"></i><i className="bi bi-arrow-up-right"></i></span>
                                                 </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="blog__sidebar">
                                    <div className="sidebar__widget sidebar__widget-two">
                                        <div className="sidebar__search">
                                            <h4 className="sidebar__widget-title">Search</h4>
                                            <form action="#">
                                                <input type="text" placeholder="Search" />
                                                <button type="submit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                        <path d="M19.0002 19.0002L14.6572 14.6572M14.6572 14.6572C15.4001 13.9143 15.9894 13.0324 16.3914 12.0618C16.7935 11.0911 17.0004 10.0508 17.0004 9.00021C17.0004 7.9496 16.7935 6.90929 16.3914 5.93866C15.9894 4.96803 15.4001 4.08609 14.6572 3.34321C13.9143 2.60032 13.0324 2.01103 12.0618 1.60898C11.0911 1.20693 10.0508 1 9.00021 1C7.9496 1 6.90929 1.20693 5.93866 1.60898C4.96803 2.01103 4.08609 2.60032 3.34321 3.34321C1.84288 4.84354 1 6.87842 1 9.00021C1 11.122 1.84288 13.1569 3.34321 14.6572C4.84354 16.1575 6.87842 17.0004 9.00021 17.0004C11.122 17.0004 13.1569 16.1575 14.6572 14.6572Z" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="sidebar__widget">
                                        <h4 className="sidebar__widget-title">Categories</h4>
                                        <div className="sidebar__cat-list">
                                            <ul className="list-wrap">
                                                <li>
                                                    <a href="#">Business <span>(30)</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">Lifestyle <span>(05)</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">Creative <span>(15)</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">Wordpress <span>(25)</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">UI/UX Design <span>(07)</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar__widget">
                                        <h4 className="sidebar__widget-title">Recent Post</h4>
                                        <div className="sidebar__post-list">
                                            <div className="sidebar__post-item">
                                                <div className="sidebar__post-thumb">
                                                    <Link href="/blog/blog-details"><Image src="/assets/images/blog/post1.jpg" alt="img" width={100} height={100}   /></Link>
                                                </div>
                                                <div className="sidebar__post-content">
                                                    <h5 className="title"><Link href="/blog/blog-details">The Main Thing For The Designer</Link></h5>
                                                    <span className="date">April 20, 2024</span>
                                                </div>
                                            </div>
                                            <div className="sidebar__post-item">
                                                <div className="sidebar__post-thumb">
                                                    <Link href="/blog/blog-details"><Image src="/assets/images/blog/post2.jpg" alt="img" width={100} height={100}   /></Link>
                                                </div>
                                                <div className="sidebar__post-content">
                                                    <h5 className="title"><Link href="/blog/blog-details">The Main Thing For The Designer</Link></h5>
                                                    <span className="date">April 20, 2024</span>
                                                </div>
                                            </div>
                                            <div className="sidebar__post-item">
                                                <div className="sidebar__post-thumb">
                                                    <Link href="/blog/blog-details"><Image src="/assets/images/blog/post3.jpg" alt="img" width={100} height={100}   /></Link>
                                                </div>
                                                <div className="sidebar__post-content">
                                                    <h5 className="title"><Link href="/blog/blog-details">The Main Thing For The Designer</Link></h5>
                                                    <span className="date">April 20, 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar__widget">
                                        <h4 className="sidebar__widget-title">Tags</h4>
                                        <div className="sidebar__tag-list">
                                            <ul className="list-wrap">
                                                <li><a href="#">Creative</a></li>
                                                <li><a href="#">Business</a></li>
                                                <li><a href="#">Digital</a></li>
                                                <li><a href="#">Wordpress</a></li>
                                                <li><a href="#">Dark & Light</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Blog3;