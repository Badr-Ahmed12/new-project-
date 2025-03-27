"use client"
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const HeroBanner1 = ({ number, email,  title1, title2, title3, title4, title5, btnname, btnurl }) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="hero-wrapper hero-2" id="hero-2">
            {/* عناصر التواصل والخبرة متخفية على الشاشات الصغيرة */}
            <div className="hero-left-wrapper">
                <div className="contact">
                    <a href="tel:+201067683447">{number}</a>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
            <div className="container">
                <div className="hero-style2">
                    <div className="row align-items-center flex-wrap-reverse">
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="hero-left">
                                <div className="hero-content tp_text_anim p-relative z-index-1">
                                    <p className="hero-sub_title">
                                        {title1}{" "}
                                        <Image src="/assets/images/hero/hand.png" alt="img" width={40} height={40} />{title2}
                                    </p>
                                    <div className="hero-title_wrapper">
                                        <h1 className="hero-title cd-headline title_anim">{title3}</h1>
                                        <div className="hero-title_shape"></div>
                                    </div>
                                    <div className="hero-title_wrapper upper">
                                        <div className="hero-place">
                                            <Image src="/assets/images/hero/arrow.svg" alt="img" width={158} height={39} />
                                            <p>{title4}</p>
                                        </div>
                                        <h1 className="hero-title font2 cd-headline title_anim">{title5}</h1>
                                    </div>
                                    
                                    {/* تغليف ال Link والصورة في div باستخدام flex */}
                                    <div className="see-more-container" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                        <Link href={btnurl} className="link-btn bg-black2">
                                            <span className="link-effect">
                                                <span className="effect-1">{btnname}</span>
                                                <span className="effect-1">{btnname}</span>
                                            </span>
                                            <Image src="/assets/images/icons/arrow-left-top.svg" alt="img" width={10} height={26} />
                                        </Link>
                                        {/* منع تغيير حجم الصورة بإضافة flexShrink: 0 */}
                                        <div style={{ flexShrink: 0 }}>
                                            <Image src="/assets/images/img/Full_Logo .png" alt="img" width={500} height={300} sizes="100vw" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12">
                            <div className="hero-thumb-wrapper text-center text-lg-end p-relative z-index-1">
                                <div className="hero-thumb">
                                    <Image
                                        src="/assets/images/img/My_Photo.png"
                                        alt="img"
                                        width={windowWidth < 1199 ? windowWidth : 800}
                                        height={windowWidth < 1199 ? windowHeight : 1000}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
            <style jsx>{`
                /* تحسين الاستجابة على الشاشات المختلفة */
                @media (max-width: 1199px) {
                    .hero-left-wrapper, .hero-experience-wrapper {
                        display: none;
                    }
                }
                @media (max-width: 767px) {
                    .hero-style2 .row {
                        flex-direction: column-reverse;
                        align-items: center;
                    }
                    .see-more-container {
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default HeroBanner1;

