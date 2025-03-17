import Image from "next/image";

const Marquee2 = () => {
    return (
        <div className="marquee-area">
            <div className="slider__marquee clearfix marquee-wrap">
                <div className="marquee_mode marquee__group">
                    <div className="item m-item"><div className="icon"><Image src="/assets/images/icons/sharp-star-of-life.svg" alt="img" width={46} height={46}   /></div> 12+ Worldwide Languages</div>
                    <div className="item m-item style-2"><div className="icon"><Image src="/assets/images/icons/sharp-star-of-life.svg" alt="img" width={46} height={46}   /></div> 2k+ Project Completed</div>
                    <div className="item m-item"><div className="icon"><Image src="/assets/images/icons/sharp-star-of-life.svg" alt="img" width={46} height={46}   /></div> 1k+ Happy Clients</div>
                    <div className="item m-item style-2"><div className="icon"><Image src="/assets/images/icons/sharp-star-of-life.svg" alt="img" width={46} height={46}   /></div> 2k+ Project Completed</div>
                </div>
                <div className="marquee_mode marquee__group">
                    <div className="item m-item"><div className="icon"><Image src="/assets/images/icons/sharp-star-of-life.svg" alt="img" width={46} height={46}   /></div> 12+ Worldwide Languages</div>
                    <div className="item m-item style-2"><div className="icon"><Image src="/assets/images/icons/sharp-star-of-life.svg" alt="img" width={46} height={46}   /></div> 2k+ Project Completed</div>
                    <div className="item m-item"><div className="icon"><Image src="/assets/images/icons/sharp-star-of-life.svg" alt="img" width={46} height={46}   /></div> 1k+ Happy Clients</div>
                    <div className="item m-item style-2"><div className="icon"><Image src="/assets/images/icons/sharp-star-of-life.svg" alt="img" width={46} height={46}   /></div> 2k+ Project Completed</div>
                </div>                
            </div>
        </div>
    );
};

export default Marquee2;