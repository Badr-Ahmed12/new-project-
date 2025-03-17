"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Project2 = () => {

    const categoryMenu = [
        {
          title: 'Branding App',
          category: 'Branding',
        },
        {
          title: 'Mockup',
          category: 'Mockup',
        },
        {
          title: 'Landing Page',
          category: 'Landing',
        },
        {
            title: 'Website',
            category: 'Website',
          },        
      ];

      const [active, setActive] = useState('all');    


      const projectContent = [
        {
            title:'UX Consulting', 
            number:'01/04', 
            content:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            img:'/assets/images/portfolio/portfolio1_1.jpg',
            tag:'Website Design, User Interface (UI)',
            year:'( 2024 )',              
            category:'Branding'           
        },
        {
            title:'Small Figures', 
            number:'02/04', 
            content:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            img:'/assets/images/portfolio/portfolio1_2.jpg',
            tag:'Website Design, User Interface (UI)',
            year:'( 2023 )',              
            category:'Mockup'   
        },
        {
            title:'Business Apps', 
            number:'03/04', 
            content:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            img:'/assets/images/portfolio/portfolio1_3.jpg',
            tag:'Website Design, User Interface (UI)',
            year:'( 2022 )',              
            category:'Landing'                
        },
        {
            title:'Figma Design', 
            number:'04/04', 
            content:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            img:'/assets/images/portfolio/portfolio1_4.jpg',
            tag:'Website Design, User Interface (UI)',
            year:'( 2024 )',              
            category:'Website'    
        }      
  ];   

    return (
        <section className="portfolio-area space overflow-hidden">
        <div className="portfolio-title text-center">
            <h2 className="big-title">Awesome <span className="font2 xs-d-none">Portfolio</span></h2>
        </div>
        <div className="container">
            <div className="row mb-50 sm-mb-30">
                <div className="col-lg-12 d-flex flex-column flex-lg-row align-items-center justify-content-between">
                    <div className="portfolio-text md-mb-20 mb-lg-0">Selected work * <span> (2020-2024)</span></div>
                    <ul className="portfolio-filter">
                        <li className={active === 'all' ? 'active' : ''} onClick={() => setActive('all')} data-filter="*"> All Case </li>
                        {categoryMenu.map((item, index) => (
                         <li onClick={() => setActive(item.category)} className={active === item.category ? 'active' : ''} key={index} > {item.title} </li>
                        ))}                       

                    </ul>
                </div>                        
            </div>
            <div className="row justify-content-between masonary-active">
            {projectContent.map((item, i) => (
                <div key={i} className={`col-lg-12 filter-item  ${ active === 'all' ? '' : !(active === item.category) ? 'd-none' : '' }`} >
                    <div className="portfolio-wrap">
                        <div className="portfolio-details">
                            <h3 className="portfolio-title">
                                <Link href="/project/project-details">{item.title}</Link>
                                <span className="portfolio-pagination">{item.number}</span>
                            </h3>
                            <p className="portfolio-desc">{item.content} </p>
                            <div className="portfolio-title_upper">
                                <span className="text">{item.tag}</span>
                                <span className="portfolio-year">{item.year}</span>
                            </div>
                        </div>
                        <div className="portfolio-thumb">
                            <Link href="/project/project-details">
                            <Image src={item.img} alt="img" width={602} height={401}   />
                            </Link>
                            <div className="portfolio-thumb-view">
                                <Link href="/project/project-details" className="lightbox-image" data-fancybox="gallery">
                                <Image src="/assets/images/icons/eye.svg" alt="img" width={36} height={36}   />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <div className="btn-wrap btn-bounce-1 mt-35">
                        <Link className="circle-btn tp-hover-btn btn" href="/project">
                            <span className="link-effect">
                                <span className="effect-1">Explore More</span>
                                <span className="effect-1">Explore More</span>
                            </span>
                            <Image src="/assets/images/icons/arrow-left-top.svg" alt="img" width={10} height={10}   />
                            <i className="btn-circle-dot"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Project2;