"use client"
import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from "react";

const Services1 = () => {

    const serviceContent = [
        {title:'Web <br> Development', service1:'Wordpress', service2:'Brand', service3:'Laravel', img:'/assets/images/service/service-1_1.jpg', addclass:'service-title'},
        {title:'Application <br> Design', service1:'Wordpress', service2:'Brand', service3:'Laravel', img:'/assets/images/service/service-1_2.jpg', addclass:'service-title mr-25'},
        {title:'UI/UX Mobile <br> Design', service1:'Wordpress', service2:'Brand', service3:'Laravel', img:'/assets/images/service/service-1_3.jpg', addclass:'service-title mr-5'},
        {title:'Brand <br> Identity', service1:'Wordpress', service2:'Brand', service3:'Laravel', img:'/assets/images/service/service-1_4.jpg', addclass:'service-title mr-75'},
        {title:'Digital <br> Marketing', service1:'Wordpress', service2:'Brand', service3:'Laravel', img:'/assets/images/service/service-1_5.jpg', addclass:'service-title mr-40'},
      ]; 

    useEffect(() => {

        // Select all service items with the specified style and the main thumbnail element
        const serviceItems = document.querySelectorAll('.service-item.style-2');
        const mainThumb = document.querySelector('.service-thumb-wrapper .hover-thumb img');

        if (serviceItems && mainThumb) {
            serviceItems.forEach(serviceItem => {
                const hoverThumb = serviceItem.querySelector('.hover-thumb img');

                // Ensure hoverThumb exists
                if (hoverThumb) {
                    const imageUrl = hoverThumb.getAttribute('src');
                    serviceItem.addEventListener('mouseenter', () => {
                        // Avoid redundant animations if the image is already set
                        if (mainThumb.getAttribute('src') === imageUrl) return;
                        mainThumb.style.transition = 'opacity 0.5s, transform 0.5s';
                        mainThumb.style.opacity = '0';
                        mainThumb.style.transform = 'scale(0.8)';

                        setTimeout(() => {
                            mainThumb.setAttribute('src', imageUrl);
                            mainThumb.style.opacity = '1';
                            mainThumb.style.transform = 'scale(1)';
                        }, 500); 
                    });
                }
            });
        }
        
      }, []);


    return (
        <div className="service-area style-two space-minimize bg-theme2">
                <div className="big-title-wrap text-center">
                    <h2 className="big-title mb-0" data-count="[ 5 ]">Services</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="service-thumb-wrapper">
                                <figure className="hover-thumb"><Image src="/assets/images/service/service-1_1.jpg" alt="img" width={375} height={435}   /></figure>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="service-item-wrapper style-2">
                            {serviceContent.map((item, i) => (
                                <div key={i} className="service-item style-2">
                                    <div className="service-inner">
                                        <div className="service-left">
                                            <h3 className={item.addclass}><Link href="/service/service-details">{parse(item.title)}</Link></h3>
                                            <ul className="service-list">
                                                <li>+ {item.service1}</li>
                                                <li>+ {item.service2}</li>
                                                <li>+ {item.service3}</li>
                                            </ul>
                                        </div>
                                        <div className="service-btn-wrapper">
                                            <Link className="service-btn" href="/service/service-details">
                                                <span><i className="bi bi-arrow-up-right"></i><i className="bi bi-arrow-up-right"></i></span>
                                             </Link>
                                        </div>
                                    </div>
                                    <div className="hover-thumb"><Image src={item.img} alt="img" width={375} height={435}   /></div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Services1;