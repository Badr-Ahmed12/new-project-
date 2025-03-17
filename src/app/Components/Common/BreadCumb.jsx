import Image from "next/image";

const BreadCumb = ({Title1,title2,addclass}) => {
    
    return (

        <div className={addclass}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="big-title wow img-custom-anim-left mb-10 xs-mb-0" data-wow-delay="0.1s" data-wow-duration="1.5s">{Title1}</div>
                    <div className="big-title font2 wow img-custom-anim-right mb-0" data-wow-delay="0.1s" data-wow-duration="1.7s">
                    <Image src="/assets/images/portfolio/arrow-right.svg"  alt="img" width={366} height={106}   /> {title2}</div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default BreadCumb;