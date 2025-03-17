import Image from "next/image";
import Link from "next/link";

const Project1 = () => {

    const projectContent = [
        {img:'/assets/images/portfolio/portfolio2_1.jpg', subtitle:'// Branding', title:'3d Abstract Wallpaper'},
        {img:'/assets/images/portfolio/portfolio2_2.jpg', subtitle:'// Graphic Design', title:'Book Covers Design'},
        {img:'/assets/images/portfolio/portfolio2_3.jpg', subtitle:'// Website Design', title:'Business Apps'},
        {img:'/assets/images/portfolio/portfolio2_4.jpg', subtitle:'// Branding', title:'Products Mockup Design'},
        {img:'/assets/images/portfolio/portfolio2_5.jpg', subtitle:'// Graphic Design', title:'Culture Magazine'},
        {img:'/assets/images/portfolio/portfolio2_6.jpg', subtitle:'// Product Design', title:'Beyond Energy'}
      ];   

    return (
        <div className="portfolio-area style-two space">
                <div className="big-title-wrap text-center mt--20">
                    <h2 className="big-title mb-0" data-count="[ 6 ]">WORKS</h2>
                </div>
                <div className="container">
                    <div className="row gx-120 lg-gx-60 md-gx-40 gy-120 lg-gy-60 md-gy-40  justify-content-between">
                    {projectContent.map((item, i) => (
                        <div key={i} className="col-lg-6">
                            <div className="portfolio-wraper">
                                <div className="portfolio-thumb wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <Link href="/project/project-details">
                                        <Image src={item.img} alt="img" width={600} height={445}   />
                                    </Link>
                                </div>
                                <div className="portfolio-details">
                                    <div className="left">
                                        <div className="portfolio-meta">{item.subtitle}</div>
                                        <h3 className="portfolio-title"><Link href="/project/project-details">{item.title}</Link></h3>
                                    </div>
                                    <Link href="/project/project-details" className="portfolio-btn">
                                        <Image src="/assets/images/icons/arrow-left-top2.svg" alt="img" width={14} height={14}   />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <div className="btn-wrap btn-bounce-1 mt-80 lg-mt-60 md-mt-40 home-circle-btn">
                                <Link className="circle-btn btn" href="/project">
                                    <span className="link-effect">
                                        <span className="effect-1">Explore More</span>
                                        <span className="effect-1">Explore More</span>
                                    </span>
                                    <Image src="/assets/images/icons/arrow-left-top.svg" alt="img" width={10} height={10}   />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Project1;