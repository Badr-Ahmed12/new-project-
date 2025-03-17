import PricingCard from "../Card/PricingCard";

const Pricing2 = ({addclass}) => {
    return (
            <section className={addclass}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="title-area">
                            <h2 className="sec-title text-center sm-text-left">Amazing pricing for your <br/> <span className="font2 wow text-anim-left">Projects</span></h2>
                        </div>
                    </div>
                </div>
                
                    <div className="row gx-30 gy-30">
                        <div className="col-lg-4 col-md-6">
                            <PricingCard
                                addclass="pricing-item"
                                title="Sliver Pack"
                                price="100.00"
                                time="Per/Month"
                                btnname="Start My Project Now"
                                btnurl="/pricing"
                                FeatureList={[
                                    "Free customer support",
                                    "Free installation",
                                    "20+ predesigned templates",
                                    "Free back-up",
                                    "World class support"
                                ]}
                            ></PricingCard>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <PricingCard
                            addclass="pricing-item upper"
                            title="Gold Pack"
                            price="200.00"
                            time="Per/Month"
                            btnname="Start My Project Now"
                            btnurl="/pricing"
                            FeatureList={[
                                "Free customer support",
                                "Free installation",
                                "20+ predesigned templates",
                                "Free back-up",
                                "World class support"
                            ]}
                        ></PricingCard>
                        </div>
                        <div className="col-lg-4 col-md-6">

                            <PricingCard
                                addclass="pricing-item"
                                title="Platinum Pack"
                                price="300.00"
                                time="Per/Month"
                                btnname="Start My Project Now"
                                btnurl="/pricing"
                                FeatureList={[
                                    "Free customer support",
                                    "Free installation",
                                    "20+ predesigned templates",
                                    "Free back-up",
                                    "World class support"
                                ]}
                            ></PricingCard>

                        </div>
                     </div>
                </div>
            </section>
    );
};

export default Pricing2;