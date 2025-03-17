import Image from "next/image";

const Marquee = () => {
    return (
        <div className="marquee-area">
        <div className="slider__marquee clearfix marquee-wrap bg-theme style-2">
            <div className="marquee_mode marquee__group">
                <div className="item m-item"><div className="icon"><Image src="/assets/images/icons/star-of-life.svg" alt="img" width={60} height={60}   /></div> 3K+ SUCCESS PRJECTS</div>
                <div className="item m-item style-2"><div className="icon"><Image src="/assets/images/icons/star-of-life.svg" alt="img" width={60} height={60}   /></div> 1K+ HAPPY CLIENTS</div>
                <div className="item m-item"><div className="icon"><Image src="/assets/images/icons/star-of-life.svg" alt="img" width={60} height={60}   /></div> 60+ TEAM MEMBERS</div>
                <div className="item m-item style-2"><div className="icon"><Image src="/assets/images/icons/star-of-life.svg" alt="img" width={60} height={60}   /></div> 1K+ HAPPY CLIENTS</div>
            </div>
            <div className="marquee_mode marquee__group">
            <div className="item m-item"><div className="icon"><Image src="/assets/images/icons/star-of-life.svg" alt="img" width={60} height={60}   /></div> 3K+ SUCCESS PRJECTS</div>
                <div className="item m-item style-2"><div className="icon"><Image src="/assets/images/icons/star-of-life.svg" alt="img" width={60} height={60}   /></div> 1K+ HAPPY CLIENTS</div>
                <div className="item m-item"><div className="icon"><Image src="/assets/images/icons/star-of-life.svg" alt="img" width={60} height={60}   /></div> 60+ TEAM MEMBERS</div>
                <div className="item m-item style-2"><div className="icon"><Image src="/assets/images/icons/star-of-life.svg" alt="img" width={60} height={60}   /></div> 1K+ HAPPY CLIENTS</div>
            </div>            
        </div>
    </div>
    );
};

export default Marquee;