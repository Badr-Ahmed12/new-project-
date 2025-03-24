"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import Link from "next/link";
import Image from "next/image";

const HeroBanner1 = ({ number, email, expnum, expcontent, title1, title2, title3, title4, title5, btnname, btnurl }) => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="hero-wrapper hero-2" id="hero-2">
            <div className="hero-left-wrapper d-none d-xxl-block">
                <div className="contact">
                    <a href="tel:++201067683447">{number}</a>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
            <div className="hero-experience-wrapper d-none d-xxl-block">
                <div className="inner" style={{ backgroundColor: "#1d1b1b" }}>
                    <h2 className="year">
                        <span className="count-number">{expnum}</span>+
                    </h2>
                    <span className="text">{parse(expcontent)}</span>
                </div>
            </div>
            <div className="container">
                <div className="hero-style2">
                    <div className="row align-items-end">
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
                                    
                                    {/* تغليف ال Link والصورة في div بنستخدم له flex */}
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
                                            <Image src="/assets/images/img/Full_Logo .png" alt="img" width={500} height={300} sizes={"100vw"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 mt-20 mt-lg-0">
                            <div className="hero-thumb-wrapper text-center text-lg-end p-relative z-index-1">
                                <div className="hero-thumb">
                                    <Image src="/assets/images/img/My_Photo.png" alt="img" width={800} height={1000} />
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </section>
    );
};

export default HeroBanner1;
