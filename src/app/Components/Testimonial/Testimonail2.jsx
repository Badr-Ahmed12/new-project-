"use client"
import Image from "next/image";
import Slider from "react-slick";

const Testimonail2 = ({addclass}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };
  
      const testomonialContent = [
          {
              subtitle:'Design Quality', 
              content:'On the other hand, we denounce with and who are so beguiled and demoralized by the pleasure of the moment, so blinded by desire',
              img:'/assets/images/testimonial/testi-1_1.jpg',
              name:'Jack Babu',
              title:'Envato customer',               
          },
          {
            subtitle:'UI/UX Quality', 
            content:'On the other hand, we denounce with and who are so beguiled and demoralized by the pleasure of the moment, so blinded by desire',
            img:'/assets/images/testimonial/testi-1_2.jpg',
            name:'Shoko Mugikura',
            title:'Envato customer',  
          },
          {
            subtitle:'Design Quality', 
            content:'On the other hand, we denounce with and who are so beguiled and demoralized by the pleasure of the moment, so blinded by desire',
            img:'/assets/images/testimonial/testi-1_1.jpg',
            name:'Jack Babu',
            title:'Envato customer',               
        },
        {
          subtitle:'UI/UX Quality', 
          content:'On the other hand, we denounce with and who are so beguiled and demoralized by the pleasure of the moment, so blinded by desire',
          img:'/assets/images/testimonial/testi-1_2.jpg',
          name:'Shoko Mugikura',
          title:'Envato customer',  
        }      
    ];   

    return (
        <section className={addclass}>
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="title-area">
                        <h2 className="sec-title text-center">The best customers say <br/> <span className="font2 wow text-anim-left">about me</span></h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="testi-carousel-1 swiper" >
                        <div className="swiper-wrapper cs_slider_gap_30">

                        <Slider {...settings}>
                        {testomonialContent.map((item, i) => (
                            <div key={i} className="testi-item swiper-slide">
                                <div className="testi-upper">
                                    <div className="testi-upper_thumb">
                                       <Image src={item.img} alt="img" width={113} height={168}   />
                                    </div>
                                    <div className="testi-upper_info">
                                        <h5 className="title">{item.subtitle}</h5>
                                        <p className="text">{item.content}</p>
                                    </div>
                                </div>
                                <div className="testi-lower">
                                    <div className="testi-lower_info">
                                        <h5 className="name">{item.name}</h5>
                                        <span className="title">{item.title}</span>
                                    </div>
                                    <div className="testi-lower_review">
                                        <div className="review-list">
                                        <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                            </Slider>
                        </div>
                        <div className="swiper-pagination mt-60"></div>
                    </div>
                </div>
                </div>
        </div>
    </section>
    );
};

export default Testimonail2;