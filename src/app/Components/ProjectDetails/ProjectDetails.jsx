import Image from "next/image";
import Link from "next/link";

const ProjectDetails = () => {
    return (
        <div>

            <section className="breadcumb-wrapper text-center pb-0 bg-theme2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="sub-title">Mockup Design</span>
                            <h2 className="sec-title mb-0">Book Cover Mockup Design</h2>
                        </div>
                    </div>
                </div>
            </section>

            <div className="project-details-area space-bottom bg-theme2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="info-items xs-py-30">
                                <li className="item">
                                    <span className="title">Client:</span>
                                    <span className="text">Nikolas Jhore</span>
                                </li>
                                <li className="item">
                                    <span className="title">Published:</span>
                                    <span className="text">20 April, 2024</span>
                                </li>
                                <li className="item">
                                    <span className="title">Technology:</span>
                                    <span className="text">Photoshop, XD</span>
                                </li>
                                <li className="item">
                                    <span className="title">Categories:</span>
                                    <span className="text">Mockup Branding</span>
                                </li>
                                <li className="btn-wrap mt--20 sm-mt-0">
                                    <a className="circle-btn tp-hover-btn btn" href="project.html">
                                        <span className="link-effect">
                                            <span className="effect-1">Live Site</span>
                                            <span className="effect-1">Live Site</span>
                                        </span>
                                        <img src="/assets/images/icons/arrow-left-top.svg" alt="" />
                                        <i className="btn-circle-dot"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row details-thumb">
                        <div className="col-xl-12">
                            <div className="project-inner-thumb mb-50 wow img-custom-anim-top">
                            <Image className="w-100" src="/assets/images/portfolio/details-thumb.jpg" alt="img" width={1320} height={850}   />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="project-area mb-50">
                                <h3 className="title mb-20">Projects Overview</h3>
                                <p className="text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                                    quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci numquam 
                                    eius modia tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
                                    Ut enim ad minima veniam quis nostrum</p>
                            </div>
                            <div className="challenge-area mb-50">
                                <h3 className="title mb-20">Challenges & Constraints</h3>
                                <p className="text mb-40">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati 
                                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia quidem in 
                                    rerum facilis est et expedita distinctio. </p>
                                <ul className="challenge-area_list">
                                    <li>Many desktop publishing packages and web page</li>
                                    <li>All the Lorem Ipsum generators on the Internet</li>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="text mb-45 mt-60 md-mt-0">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                                quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci numquam 
                                eius modia tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
                                Ut enim ad minima veniam quis nostrum</p>
                            <figure className="thumb lg-mb-0 md-mb-30">
                            <Image src="/assets/images/portfolio/portfolio4_1.jpg" alt="img" width={648} height={320}   />
                            </figure>
                        </div>
                        <div className="col-lg-12">
                            <div className="results-area">
                                <h3 className="mb-20">Final Result</h3>
                                <p className="text mb-40">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis repellendus.
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hics 
                                    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                <ul className="results-area_list">
                                    <li>These cases are perfectly simple</li>
                                    <li>But in certain circumstances and owing</li>
                                    <li>Nam libero tempore, cum soluta</li>
                                </ul>
                                <p className="text mt-30">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate  in 
                                    provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborums et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero the tempore, 
                                    soluta nobis est eligendi optio cumque nihil impedit quo minus</p>
                                <figure className="result-thumb mt-60 mb-60">
                                <Image src="/assets/images/portfolio/details-thumb-2.jpg" alt="img" width={1320} height={650}   />
                                </figure>

                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="inner__page-nav">
                                <Link href="/project/project-details" className="nav-btn">
                                    <span className="link-effect">
                                        <span className="effect-1">Previous</span>
                                        <span className="effect-1">Previous</span>
                                    </span>
                                </Link>
                                <a href="#" className="link">Back to Overview</a>
                                <Link href="/project/project-details" className="nav-btn">
                                    <span className="link-effect">
                                        <span className="effect-1">Next</span>
                                        <span className="effect-1">Next</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ProjectDetails;