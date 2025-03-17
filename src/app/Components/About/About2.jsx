import Image from "next/image";
import Link from "next/link";

const About2 = () => {

    const aboutContent = {
        title1:"I'm a",
        title2:'creative designer',
        title3:'& developer based in London.',
        content:'I love designing in the browser but I work a lot with Figma and other design tools as well. I specialize in creating unique visual identities for digital products.',
        btnname:'Explore More',
        btnurl:'/project',
        title4:'A PHOTO OF ME',
        img:'/assets/images/about/about_1-1.jpg',        
      }

    return (
        <section className="about-area space bg-theme2" id="about-area-1">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="about-content-wrap ">
                        <div className="title-area mb-0">
                            <h2 className="sec-title">{aboutContent.title1} <span className="font2">{aboutContent.title2}</span> {aboutContent.title3}</h2>
                            <div className="about_content">
                                <p className="about-text wow text-anim-left mt-50 vxs-mt-30">{aboutContent.content}</p>
                                <div className="btn-wrap btn-bounce-1 home-circle-btn">
                                    <Link className="circle-btn btn gsap-magnetic" href={aboutContent.btnurl}>
                                        <span className="link-effect">
                                            <span className="effect-1">{aboutContent.btnname}</span>
                                            <span className="effect-1">{aboutContent.btnname}</span>
                                        </span>
                                        <Image src="/assets/images/icons/arrow-left-top.svg" alt="img" width={10} height={10}   />
                                    </Link>
                                </div>
                            </div>
                            <div className="img-btn mt-50">
                                <a href="#">{aboutContent.title4} <Image src="/assets/images/icons/btn-right-arrow.svg" alt="img" width={64} height={26}   /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-img-1-1 img-custom-anim-right wow" data-wow-delay="0.1s" data-wow-duration="1.5s">
                    <Image src={aboutContent.img} alt="img" width={536} height={656}   />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About2;