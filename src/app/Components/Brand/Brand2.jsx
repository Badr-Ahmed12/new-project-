"use client"
import Image from "next/image";
import Slider from "react-slick";

const Brand2 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

    const brandContent = [
        {img:'/assets/images/brands/brand-1_1.png'},
        {img:'/assets/images/brands/brand-1_2.png'},
        {img:'/assets/images/brands/brand-1_3.png'},
        {img:'/assets/images/brands/brand-1_4.png'},
        {img:'/assets/images/brands/brand-1_5.png'},
        {img:'/assets/images/brands/brand-1_1.png'},
        {img:'/assets/images/brands/brand-1_2.png'},
        {img:'/assets/images/brands/brand-1_3.png'},
        {img:'/assets/images/brands/brand-1_4.png'},
        {img:'/assets/images/brands/brand-1_5.png'},
      ];   

    return (
        <section className="brand-area space-bottom bg-theme2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="title-area text-center mb-120 lg-mb-90 md-mb-80 vxs-mb-60">
                                <h6 className="title mb-0">More than <span className="color1">200+ companies</span> trusted us worldwid</h6>
                            </div>
                        </div>
                    </div>
                    <div className="sponsors-outer">
                        <ul className="brands-carousel owl-carousel owl-theme cs_slider_gap_30"> 
                        <Slider {...settings}>
                        {brandContent.map((item, i) => (
                            <li key={i} className="brand-item">
                                <a className="image" href="#">
                                <Image src={item.img} alt="img" width={147} height={147}   />
                                <Image src={item.img} alt="img" width={147} height={147}   />
                                </a>
                            </li>
                            ))}
                             </Slider>
                        </ul>
                    </div>
                </div>
            </section>
    );
};

export default Brand2;