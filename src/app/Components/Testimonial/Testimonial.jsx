"use client"
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";

const Testimonial = () => {

    const sliderRef = useRef(null);

    const next = () => {
      sliderRef.current.slickNext();
    };
  
    const previous = () => {
      sliderRef.current.slickPrev();
    };  

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
            name:'Shoko Mugikura',
            title:'Envato customer', 
            content:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur magni eos qui ratione voluptatem sequi nesciunt. Neque porro dolorem quia an dolor sit amet, consectetur, adipisci velit',
            img:'/assets/images/testimonial/testi-2_1.jpg'
        },
        {
            name:'Shoko Mugikura',
            title:'Envato customer', 
            content:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur magni eos qui ratione voluptatem sequi nesciunt. Neque porro dolorem quia an dolor sit amet, consectetur, adipisci velit',
            img:'/assets/images/testimonial/testi-2_2.jpg'
        },
        {
            name:'Shoko Mugikura',
            title:'Envato customer', 
            content:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur magni eos qui ratione voluptatem sequi nesciunt. Neque porro dolorem quia an dolor sit amet, consectetur, adipisci velit',
            img:'/assets/images/testimonial/testi-2_1.jpg'
        },
        {
            name:'Shoko Mugikura',
            title:'Envato customer', 
            content:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur magni eos qui ratione voluptatem sequi nesciunt. Neque porro dolorem quia an dolor sit amet, consectetur, adipisci velit',
            img:'/assets/images/testimonial/testi-2_2.jpg'
        }        
      ];

    return (
        <section className="testimonial-area style-two space">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="testi-upper_area title-upper_area">
                                <span className="title">( TESTIMONIALS )</span>
                                <h3 className="title-info_text">Our happy customers give us impactful and positive feedback on our services customer support & etc.</h3>
                                <div className="testi-nav">
                                    <div onClick={previous} className="testi-button-next"><i className="bi bi-chevron-left"></i></div>
                                    <div onClick={next} className="testi-button-prev"><i className="bi bi-chevron-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="testi-carousel-2 swiper" >
                                <div className="swiper-wrapper cs_slider_gap_30">
                                <Slider ref={sliderRef} {...settings}>
                                {testomonialContent.map((item, i) => (
                                    <div key={i} className="testi-single-box swiper-slide">
                                        <div className="testi-upper">
                                            <div className="review-list">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <div className="testi-upper_info">
                                                <p className="text">{item.content}</p>
                                            </div>
                                        </div>
                                        <div className="testi-lower">
                                            <div className="testi-lower_info">
                                                <div className="thumb">
                                                <Image src={item.img} alt="img" width={80} height={80}   />
                                                </div>
                                                <div className="info-title">
                                                    <h5 className="name">{item.name}</h5>
                                                    <span className="title">{item.title}</span>
                                                </div>
                                            </div>
                                            <div className="testi-lower_quote">
                                                <div className="icon"><Image src="/assets/images/icons/quote.svg" alt="img" width={30} height={30}   /></div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    </Slider>

                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </section>

    );
};

export default Testimonial;