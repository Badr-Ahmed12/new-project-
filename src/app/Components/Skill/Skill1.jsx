import Image from "next/image";

const Skill1 = () => {

    const skilltContent = [
        {img:'/assets/images/skill/skill-1.png', skillnumber:'89', skillname:'Figma'},
        {img:'/assets/images/skill/skill-2.png', skillnumber:'80', skillname:'Adobe Xd'},
        {img:'/assets/images/skill/skill-3.png', skillnumber:'95', skillname:'Wordpress'},
        {img:'/assets/images/skill/skill-4.png', skillnumber:'85', skillname:'HTML5'},
        {img:'/assets/images/skill/skill-5.png', skillnumber:'95', skillname:'Bootstrap'},
        {img:'/assets/images/skill/skill-6.png', skillnumber:'85', skillname:'InvisionApp'},
      ];  

    return (
        <section className="skill-area space">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="title-area">
                            <h2 className="sec-title text-center">I craft wonderful <span className="font2">digital experiences</span> <br/> for brands</h2>
                        </div>
                    </div>
                </div>
                <div className="row gx-40 gy-30">

                {skilltContent.map((item, i) => (
                    <div key={i} className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="skill-item text-center">
                            <div className="skill-thumb d-flex align-items-center justify-content-center flex-column">
                                <div className="skill-icon mb-35">
                                <span>
                                <Image src={item.img} alt="img" width={55} height={55}   />
                                </span>
                                </div>
                                <h3 className="skill-count"><span className="count-number">{item.skillnumber}</span>%</h3>
                            </div>
                            <div className="skill-content">
                                <p className="skill-title">{item.skillname}</p>
                            </div>
                        </div>
                    </div>
                     ))}

                    </div>
            </div>
        </section>

    );
};

export default Skill1;