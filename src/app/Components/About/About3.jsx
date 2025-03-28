"use client"

import Image from 'next/image';

const About3 = () => {
    return (
        <section className="about-hero space-bottom bg-theme2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <h2 className="big-title mb-50 sm-mb-30 wow img-custom-anim-left">
                            ABOUT ME
                        </h2>
                        <p className="text mb-120 lg-mb-60 sm-mb-30">
                           
                                I’m a professional <span className="font2">Graphic Designer</span> 
                                specialized in <span className="font2">Branding</span> with over 8 years of 
                                experience in the creative industry. Throughout my career, I have successfully 
                                completed more than 250 projects for over 350 clients across various industries. 
                                I am passionate about building unique <span className="font2">brand identities</span> 
                                that leave a lasting impact and help businesses stand out.
                             
                        </p>
                        <figure className="thumb mb-0">
                            <Image 
                                src="/assets/images/about/about-3_1.jpg" 
                                alt="About Image" 
                                width={1320} 
                                height={650} 
                                className="img-fluid" 
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About3;
