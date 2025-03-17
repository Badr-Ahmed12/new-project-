import Image from "next/image";

const BlogDetails = () => {
    return (
        <div>
        <section className="breadcumb-wrapper text-center pt-240 md-pt-80 pb-0 bg-theme2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="sub-title">UI/UX Design</span>
                            <h2 className="sec-title mb-0">10 things nobody told you about being a web and mobile designer</h2>
                        </div>
                    </div>
                </div>
            </section>

            <div className="blog-details-area space-bottom bg-theme2">
                <div className="container">
                    <div className="row">
                        <ul className="info-items xs-py-30 space-bottom">
                            <li className="item">
                                <div className="thumb"><Image src="/assets/images/blog/thumb.jpg" alt="img" width={75} height={75}   /></div>
                                <div className="info">
                                    <span className="title">Writen by</span>
                                    <span className="text">Willomson</span>
                                </div>
                            </li>
                            <li className="item">
                                <div className="info">
                                    <span className="title">Published</span>
                                    <span className="text">20 April, 2024</span>
                                </div>
                            </li>
                            <li className="item">
                                <div className="info">
                                    <span className="title">Viewed</span>
                                    <span className="text">3 min read</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="blog-details-thumb mb-50">
                <Image className="w-100" src="/assets/images/blog/blog-details1.jpg" alt="img" width={1910} height={846}   />
                </div>
                <div className="container">
                    <div className="blog__details-content">
                        <div className="row justify-content-between">
                            <div className="col-lg-12">
                                <p className="text mb-30">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis repellendu
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae none recusandae. Itaque earum rerum to
                                    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                <p className="text mb-60">Nor again is there anyone who loves or pursues or desires to obtain pain of itself because it is pain, but because occasionally circumstances occur in which toil and pain can procure
                                    him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise except to obtain some advantage from it? But who has any right to find in 
                                    fault with a man who chooses to enjoy a pleasure that has no annoying consequences, </p>
                            </div>
                            <div className="col-lg-12">
                                <blockquote className="blockquote">
                                <Image className="blockquote-icon" src="/assets/images/icons/block_quote.svg" alt="img" width={40} height={40}   />
                                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because circumstances a
                                        occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious
                                        physical exercise, except to obtain some advantage from it?</p>
                                    <a href="#" className="name">Jhonson Markon</a>
                                </blockquote>
                                <h3 className="title mb-25">Success is the result of perfection and hard work</h3>
                                <p className="mb-60">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate a 
                                    non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore
                                    cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. quibusdam et
                                    officiis debitis an rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, reiciendis
                                    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                <figure className="details-thumb mb-60"><Image className="br-10" src="/assets/images/blog/blog-details2.jpg" alt="img" width={1320} height={650}   /></figure>
                                <h3 className="title mb-25">How to update your theme</h3>
                                <p className="mb-30">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis repellendus
                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae none recusandae. Itaque earum rerum hic
                                    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                <ul className="challenge_list">
                                    <li>These cases are perfectly simple</li>
                                    <li>But in certain circumstances and owing</li>
                                    <li>Nam libero tempore, cum soluta</li>
                                </ul>
                                <p className="mt-30 mb-60">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure
                                    him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find in
                                    fault with a man who chooses to enjoy a pleasure that has no annoying consequences, </p>
                            </div>
                            <div className="col-lg-12">
                                <div className="blog__details-bottom">
                                    <div className="post-tags sm-mb-30">
                                        <h5 className="title">Tags :</h5>
                                        <ul className="list-wrap">
                                            <li><a href="#">Creative</a>,</li>
                                            <li><a href="#">Business</a></li>
                                        </ul>
                                    </div>
                                    <div className="post-share">
                                        <h5 className="title">Share This :</h5>
                                        <div className="social-btn style3 justify-content-md-end">
                                            <a href="https://www.facebook.com/">
                                                <span className="link-effect">
                                                    <span className="effect-1"><i className="bi bi-facebook"></i></span>
                                                    <span className="effect-1"><i className="bi bi-facebook"></i></span>
                                                </span>
                                            </a>
                                            <a href="https://twitter.com/">
                                                <span className="link-effect">
                                                    <span className="effect-1"><i className="bi bi-twitter"></i></span>
                                                    <span className="effect-1"><i className="bi bi-twitter"></i></span>
                                                </span>
                                            </a>
                                            <a href="https://twitter.com/">
                                                <span className="link-effect">
                                                    <span className="effect-1"> <i className="bi bi-instagram"></i></span>
                                                    <span className="effect-1"> <i className="bi bi-instagram"></i></span>
                                                </span>
                                            </a>
                                            <a href="https://linkedin.com/">
                                                <span className="link-effect">
                                                    <span className="effect-1"><i className="bi bi-linkedin"></i></span>
                                                    <span className="effect-1"><i className="bi bi-linkedin"></i></span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="comment-area space-bottom bg-theme2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="comment-respond">
                                <h3 className="comment-reply-title">Post a comment</h3>
                                <form action="https://formspree.io/f/mzbnjrnb" method="post" className="comment-form">
                                    <div className="row gx-30">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="email" id="email" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea name="message" placeholder="Message" id="contactForm" className="form-control style2"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-btn col-12">
                                        <button type="submit" className="link-btn" data-loading-text="Please wait...">
                                            <span className="link-effect">
                                                <span className="btn-title">Submit Comment</span>
                                            </span>
                                            <img src="/assets/images/icons/arrow-left-top.svg" alt="icon" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default BlogDetails;