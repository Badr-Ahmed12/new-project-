import PricingCard from "../Card/PricingCard";

const Pricing3 = () => {
    return (
        <div>
        <section className="about-hero pb-60 sm-pb-30 bg-theme2">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 text-center">
                    <h2 className="big-title mb-0 mt--20 wow img-custom-anim-left">PRICING <span className="font2">PLAN</span></h2>
                </div>
            </div>
        </div>
        </section>

        <section className="pricing-area space-bottom bg-theme2">
                <div className="container">
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
        </div>
    );
};

export default Pricing3;