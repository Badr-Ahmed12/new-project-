import Image from "next/image";
import Link from "next/link";

const Footer2 = () => {
    return (
        <footer className="footer-wrapper footer-layout1">
        <div className="main-area space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="contact-title wow text-anim-left mb-25 mt--10">Got a project in mind?</h1>
                        <h1 className="contact-title title-font2 text-lg-end wow text-anim-right mb-0"><a href="mailto:hellowcontacts@gmail.com">hellowcontacts@gmail.com</a></h1>
                    </div>
                </div>
                <div className="row position-relative mt-60 mb-40 md-mb-50">
                    <div className="col-lg-12">
                        <div className="contact-btn_wrapper">
                            <div className="contact-btn btn-bounce-1 text-lg-end pr-120 home-circle-btn">
                                <Link className="circle-btn btn gsap-magnetic" href="/project">
                                    <span className="link-effect">
                                        <span className="effect-1">See All Works</span>
                                        <span className="effect-1">See All Works</span>
                                    </span>
                                    <Image src="/assets/images/icons/arrow-left-top.svg" alt="img" width={10} height={10}   />
                                </Link>
                            </div>
                            <span className="contact-inner-border"></span>
                        </div>
                    </div>
                </div>
                <div className="row gx-30">
                    <div className="col-lg-3 col-md-6">
                        <div className="social-item">
                            <h5 className="title"><a href="https://www.behance.net/">Behance</a></h5>
                            <a href="https://www.behance.net/">
                                <span className="link-effect">
                                <span className="effect-1"><i className="bi bi-behance"></i></span>
                                <span className="effect-1"><i className="bi bi-behance"></i></span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="social-item">
                            <h5 className="title"><a href="https://instagram.com/">Instagram</a></h5>
                            <a href="https://instagram.com/">
                                <span className="link-effect">
                                <span className="effect-1"><i className="bi bi-instagram"></i></span>
                                <span className="effect-1"><i className="bi bi-instagram"></i></span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="social-item">
                            <h5 className="title"><a href="https://twitter.com/">Twitter</a></h5>
                            <a href="https://twitter.com/">
                                <span className="link-effect">
                                <span className="effect-1"><i className="bi bi-twitter-x"></i></span>
                                <span className="effect-1"><i className="bi bi-twitter-x"></i></span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="social-item">
                            <h5 className="title"><a href="https://dribbble.com/">Dribbble</a></h5>
                            <a href="https://dribbble.com/">
                                <span className="link-effect">
                                <span className="effect-1"><i className="bi bi-dribbble"></i></span>
                                <span className="effect-1"><i className="bi bi-dribbble"></i></span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-wrap">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-7 col-md-6 mb-3 mb-md-0 text-center text-md-start">
                        <p className="copyright-text">©2024 - All Rights Reserved 
                        <a href="https://themeforest.net/user/themeservices">Themeservices</a>
                        </p>
                    </div>
                    <div className="col-lg-5 col-md-6 text-center text-md-end">
                        <ul className="footer-menu-list">
                            <li>
                                <Link href="/project">
                                    <span className="link-effect">
                                        <span className="effect-1">Terms &amp; Conditions</span>
                                        <span className="effect-1">Terms &amp; Conditions</span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <span className="link-effect">
                                        <span className="effect-1">Privacy Policy</span>
                                        <span className="effect-1">Privacy Policy</span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="link-effect">
                                        <span className="effect-1">Legal</span>
                                        <span className="effect-1">Legal</span>
                                    </span>
                                </a>
                            </li>
                        </ul>   
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer2;