import PricingCard from "../Card/PricingCard";

const Pricing = () => {
    return (
            <section className="pricing-area style-two space-bottom bg-theme2">
                <div className="big-title-wrap text-center">
                    <h2 className="big-title mb-0 mt--20">Project <span className="font2 style-2">Pricing Plan</span></h2>
                </div>
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
    );
};

export default Pricing;