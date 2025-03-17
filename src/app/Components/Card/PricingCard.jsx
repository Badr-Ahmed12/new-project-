import Link from "next/link";

const PricingCard = ({title,price,time,btnname,btnurl,FeatureList,addclass}) => {
    return (
        <div className={addclass}>
        <h5 className="pricing-title">{title}</h5>
        <div className="price-item-wrap">
            <h2 className="pricing-item_price"><span className="currency">$</span>{price}</h2>
            <span className="duration">{time}</span>
        </div>
        <div className="pricing-btn pt-30 pb-30 mb-30 mt-30">
            <Link href={btnurl} className="link-btn bg-white">
                <span className="link-effect">
                    <span className="effect-1">{btnname}</span>
                    <span className="effect-1">{btnname}</span>
                </span>
                <img src="/assets/images/icons/arrow-left-top.svg" alt="icon" />
            </Link>
        </div>
        <ul className="checklist">
        {FeatureList?.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    </div>
    );
};

export default PricingCard;