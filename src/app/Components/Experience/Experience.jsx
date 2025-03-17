import Image from "next/image";
import Link from "next/link";

const Experience = () => {

    const experiencetContent = [
        {name:'TCS Interactive — Dubai', position:'UX/UI Design Lead', year:'2024 - Present'},
        {name:'Realgate — Hurghada', position:'Digital Art Director', year:'2021 - 2022'},
        {name:'BPG Possible — Dubai', position:'Creative Designer', year:'2019 - 2020'},
        {name:'PCC Advertising — Doha', position:'Senior Web Designer', year:'2017 - 2018'}
      ];  

    return (
        <section className="experience-area space bg-theme2 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="title-area">
                            <h2 className="sec-title mb-0" data-title="(2017 - 2023)">Work <span className="font2">Experience</span></h2>
                            <div className="btn-wrap btn-bounce-1">
                                <Link href="/project" className="link-btn">
                                    <span className="link-effect">
                                        <span className="effect-1">Know More</span>
                                        <span className="effect-1">Know More</span>
                                    </span>
                                    <Image src="/assets/images/icons/arrow-left-top.svg" alt="img" width={10} height={26}   />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <ul className="experience-wrap-area">
                        {experiencetContent.map((item, i) => (
                            <li key={i} className="single-experience-list">
                                <span className="experience-place">{item.name}</span>
                                <span className="experience-tag">{item.position}</span>
                                <span className="experience-year">{item.year}</span>
                            </li>
                        ))}

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;