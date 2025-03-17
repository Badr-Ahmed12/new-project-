import Link from "next/link";

const Project3 = () => {

      const projectContent = [
          {
              addclass:'col-lg-5',
              img:'/assets/images/portfolio/portfolio3_1.jpg',
              title:'Illustrator Graphics',
              category:'Designing'             
          },
          {
            addclass:'col-lg-7',
            img:'/assets/images/portfolio/portfolio3_2.jpg',
            title:'Figma Design',
            category:'Application'  
          },
          {
            addclass:'col-lg-12',
            img:'/assets/images/portfolio/portfolio3_3.jpg',
            title:'Book Cover Mockup Design',
            category:'Branding'              
        },
        {
            addclass:'col-lg-7',
            img:'/assets/images/portfolio/portfolio3_4.jpg',
            title:'Figma Design',
            category:'Application'   
        },
        {
            addclass:'col-lg-5 text-lg-end',
            img:'/assets/images/portfolio/portfolio3_5.jpg',
            title:'Illustrator Graphics',
            category:'Designing'              
        },
        {
            addclass:'col-lg-12',
            img:'/assets/images/portfolio/portfolio3_6.jpg',
            title:'Book Cover Mockup Design',
            category:'Designing'   
        }              
    ];   

    return (
        <div className="portfolio-area style-three bg-theme2">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="title-upper_area">
                        <span className="title">( News & Blog )</span>
                        <div className="right">
                            <span className="title">(  2018 - 2024  )</span>
                            <h3 className="title-info_text mt-50 md-mt-30 xs-mt-15">Have a look at some of the projects I’ve worked on. Clients vary from
                                lifestyle to tech and design companies. </h3>
                        </div>
                    </div>
                </div>
     
                <div className="tab_content">
                    <div className="tabs-item">
                        <div className="row gx-110 justify-content-between">
                        {projectContent.map((item, i) => (
                            <div key={i} className={item.addclass}>
                                <div className="portfolio-wraper-3">
                                    <div className="portfolio-thumb style-2 wow img-custom-anim-left">
                                        <Link href="/project/project-details">
                                            <img alt="portfolio" src={item.img} />
                                        </Link>
                                        <div className="portfolio-thumb-view">
                                            <Link href="/project/project-details" className="lightbox-image" data-fancybox="gallery">
                                                <img src="/assets/images/icons/eye.svg" alt="View" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="portfolio-details pr-30 md-pr-0">
                                        <h4 className="title"><Link href="/project/project-details">{item.title}</Link></h4>
                                        <Link href="/project/project-details" className="portfolio-btn">
                                            <span className="meta">{item.category}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Project3;