"use client"
import { useLayoutEffect, useRef, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const ServiceDetails = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
    
    const handleItemClick = index => {
        if (index === openItemIndex) {
            setOpenItemIndex(-1);
        } else {
            setOpenItemIndex(index);
        }
    };

    useLayoutEffect(() => {
        if (firstItemOpen) {
            setOpenItemIndex(0);
            setFirstItemOpen(false);
        }
    }, [firstItemOpen]);

    useLayoutEffect(() => {
        loadBackgroudImages();
    }, []);

    const faqContent = [
        {
            title:'Why should I choose nabhan', 
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered some form, by injected humour, or randomised words which do not look even slightly believable.'              
        },
        {
            title:'Talented, professional & expert team', 
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered some form, by injected humour, or randomised words which do not look even slightly believable.'
        },
        {
            title:'We build and activate brands', 
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered some form, by injected humour, or randomised words which do not look even slightly believable.'              
        }     
    ]; 

    return (
        <div>
        <section className="breadcumb-wrapper text-center pb-90 md-pb-50 vxs-pb-30 bg-theme2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="sec-title mb-30 md-mb-15">Application Design</h2>
                            <div className="sec-icon"><i className="fa-regular fa-chevron-down"></i></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service__details-area space-bottom bg-theme2">
                <div className="container">
                    <div className="service__inner-wrap">
                        <div className="row gx-35 lg-gx-25">
                            <div className="col-lg-8">
                                <div className="service__details-wrap">
                                    <div className="service__details-thumb">
                                    <Image src="/assets/images/service/service-details1.jpg" alt="img" width={796} height={496}   />
                                    </div>
                                    <p className="mb-25">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugits, sed quia dolores eo voluptatem 
                                        sequi nesciunt. Neque porro quisquam st, qui dolorem ipsum quia dolor sit amet, consectetur, incidunt labore 
                                        et dolore magnam aliquam quaerat voluptatem. enim ad minima veniam,</p>
                                    <p className="mb-55">Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod placeat facer 
                                        possimus, omnis voluptas assumenda est omnis dolor repellendus. Temporibus autem quibusdam edebitis is 
                                        rerum necessitatibus saepe eveniet ut et voluptates repudiandae</p>
                                    <div className="service__details-content">
                                        <h3 className="title">Design process based on best practices and methodologies that deliver</h3>
                                        <p className="mb-35">There are many variations of passagess of Lorem Ipsum available, but the majority have suffered some form
                                            injected humour, or randomised words which do not look even slightly believable. If you are going Ipsum, need 
                                            to be sure there is not anything embarrassing hidden in the middle of text. </p>
                                        <div className="service__details-thumb mb-55">
                                        <Image src="/assets/images/service/service-details2.jpg" alt="img" width={796} height={496}   />
                                        </div>
                                        <h3 className="title">Specialization & Working Process</h3>
                                        <p className="mb-35">There are many variations of passagess of Lorem Ipsum available, but the majority have suffered some form
                                            injected humour, or randomised words which do not look even slightly believable. If you are going Ipsum, need 
                                            to be sure there is not anything embarrassing hidden in the middle of text. </p>
  
                                        <div className="video-wrap">
                                            <div className="jarallax" data-background="/assets/images/service/service-details3.jpg"> </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-area-1">
                                    <h3 className="faq-title">Any Questions find here</h3>
                                    <ul className="accordion-box style-2 faq-area">

                                    {faqContent.map((item, index) => (
                                        <li key={index} className={`accordion block ${index === openItemIndex ? "active" : "" }`} >
                                            <div onClick={() => handleItemClick(index)} className="acc-btn">{item.title}
                                                <i className="fa-solid fa-arrow-down"></i>
                                            </div>
                                            <div ref={accordionContentRef} className="acc-content">
                                                <div className="content">
                                                    <div className="text">{item.content}</div>
                                                </div>
                                            </div>
                                        </li>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="service__sidebar">
                                    <div className="sidebar__widget">
                                        <div className="sidebar__service-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/service/service-details">Application Design</Link></li>
                                                <li><Link href="/service/service-details">Web Development</Link></li>
                                                <li><Link href="/service/service-details">Web UI/UX Design</Link></li>
                                                <li><Link href="/service/service-details">Brand Identity</Link></li>
                                                <li><Link href="/service/service-details">Digital Marketing</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar__widget">
                                        <div className="sidebar__contact-info">
                                            <figure className="thumb mb-25"> <Image className="br-10" src="/assets/images/service/details-thumb.jpg" alt="img" width={347} height={354}   /></figure>
                                            <h4 className="sidebar__widget-title">Contact Me</h4>
                                            <ul className="contact-info-list">
                                                <li className="item">
                                                    <div className="icon"> <Image src="/assets/images/service/location-icon.png" alt="img" width={35} height={35}   /></div>
                                                    <span className="text">4353 Delaware Avenue, San <br/> Francisco, USA</span>
                                                </li>
                                                <li className="item">
                                                    <div className="icon"> <Image src="/assets/images/service/message-icon.png" alt="img" width={35} height={35}   /></div>
                                                    <a href="mailto:contact999@gmail.com"><span className="text">contact999@gmail.com</span></a>
                                                </li>
                                                <li className="item">
                                                    <div className="icon"> <Image src="/assets/images/service/phone-icon.png" alt="img" width={35} height={35}   /></div>
                                                    <a href="tel:+13685678954"><span className="text">+1 (368) 567 89 54</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>           
        </div>
    );
};

export default ServiceDetails;
