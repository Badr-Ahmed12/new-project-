import parse from 'html-react-parser';
import Image from 'next/image';

const About3 = () => {

    const aboutContent = {
        title:"ABOUT ME",
        content:'I specialise in creating <span className="font2">websites</span> that not only captivate <span className="font2">audiences</span> but also provide seamless navigation and <span className="font2">functionality.</span>',
        img:'/assets/images/about/about-3_1.jpg',        
      }

    return (
        <section className="about-hero space-bottom bg-theme2">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 text-center">
                    <h2 className="big-title mb-50 sm-mb-30 wow img-custom-anim-left">{aboutContent.title}</h2>
                    <p className="text mb-120 lg-mb-60 sm-mb-30">{parse(aboutContent.content)}</p>
                    <figure className="thumb mb-0"><Image src={aboutContent.img} alt="img" width={1320} height={650}   /></figure>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About3;