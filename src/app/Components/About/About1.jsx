import Image from "next/image";
import Link from "next/link";

const About1 = () => {

    const AboutInfoText = {
        Content: `I’m a professional Graphic Designer specialized in Branding with over 8 years of experience in the creative industry.
Throughout my career, I have successfully completed more than 250 projects for over 350 clients across various industries.
I am passionate about building unique brand identities that leave a lasting impact and help businesses stand out.`
    }

    const AboutContent = [
        {title:'Born In', text:'Egypt , alexandria'}, 
        {title:'Experience', text:'8 Years Experience'},
        {title:'Date of Birth', text:'20 September, 1992'},
        {title:'Language', text:'Arabic, English, Spanish'}
    ];

    const experienceInfo = {
        number:'8',
        content:'Years of Experiences Graphic Design sector powerful design'
    }

    const experiencetContent = [
        {name:'TCS Interactive — Dubai', position:'UX/UI Design Lead', year:'2024 - Present'},
        {name:'Realgate — Hurghada', position:'Digital Art Director', year:'2021 - 2022'},
        {name:'BPG Possible — Dubai', position:'Creative Designer', year:'2019 - 2020'},
        {name:'PCC Advertising — Doha', position:'Senior Web Designer', year:'2017 - 2018'}
    ];      

    return (
        <section className="about-area style-two space bg-theme2">
            <div className="container">
                <div className="row position-relative">
                    <div className="col-lg-12">
                        <h3 className="title-info_text mt--10">{AboutInfoText.Content}</h3>
                    </div>
                    <div className="col-lg-12">
                        <div className="contact-btn_wrapper mt-60 mb-60">
                            <div className="contact-btn btn-bounce-1 text-lg-end pr-120 home-circle-btn">
                                <Link className="circle-btn btn gsap-magnetic" href="/project">
                                    <span className="link-effect">
                                        <span className="effect-1">About Me</span>
                                        <span className="effect-1">About Me</span>
                                    </span>
                                    <Image src="/assets/images/icons/arrow-left-top.svg" alt="img" width={10} height={10} />
                                </Link>
                            </div>
                            <span className="contact-inner-border"></span>
                        </div>
                    </div>
                </div>
                <div className="row space-bottom gy-30">
                    {AboutContent.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6">
                            <div className="about-info-box">
                                <div className="inner">
                                    <span className="title">{item.title}</span>
                                    <p className="text">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="about-experience-wrapper md-mt--25">
                            <div className="inner">
                                <h2 className="year"><span className="count-number">{experienceInfo.number}</span>+</h2>
                                <p className="text">{experienceInfo.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="experience-wrapper">
                            <h4 className="title">Experience</h4>
                            <ul className="experience-wrap-area style-2">
                                {experiencetContent.map((item, i) => (
                                    <li key={i} className="single-experience-list">
                                        <div className="left">
                                            <span className="experience-place">{item.name}</span>
                                            <span className="experience-tag">{item.position}</span>
                                        </div>
                                        <span className="experience-year">{item.year}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About1;
