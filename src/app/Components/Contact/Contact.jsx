import Image from "next/image";

const Contact = () => {
    return (
        <div>
  <div className="breadcumb-wrapper pb-100 md-pb-80 vxs-pb-60 bg-theme2">
                <div className="breadcumb-title text-center">
                    <h2 className="big-title mb-0">LET’S TALK <span className="font2">With Us</span></h2>
                </div>
            </div>

            <div className="feature-area pb-60 bg-theme2">
                <div className="container">
                    <div className="row gy-4 align-items-center justify-content-center">
                        <div className="col-lg-4">
                            <div className="feature-box">
                                <div className="feature-box-icon">
                                <Image src="/assets/images/icons/phone.svg" alt="img" width={34} height={34}   />
                                </div>
                                <div className="feature-box-details">
                                    <h5 className="feature-box-title">Phone</h5>
                                    <div className="feature-box-text">
                                        <a href="tel:+0921772345432">+092-177-234 5432</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature-box">
                                <div className="feature-box-icon">
                                <Image src="/assets/images/icons/email.svg" alt="img" width={32} height={24}   />
                                </div>
                                <div className="feature-box-details">
                                    <h5 className="feature-box-title">Email</h5>
                                    <div className="feature-box-text">
                                        <a href="mailto:infocontact@gmail.com">infocontact<br/>@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature-box">
                                <div className="feature-box-icon">
                                <Image src="/assets/images/icons/location.svg" alt="img" width={30} height={34}   />
                                    
                                </div>
                                <div className="feature-box-details">
                                    <h5 className="feature-box-title">Address</h5>
                                    <div className="feature-box-text">Canada City, Office-02, <br/> House-3B/B, Section-H</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="comment-area style-two space-bottom bg-theme2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="comment-respond">
                                <h2 className="comment-title font2">Let’s Connect!</h2>
                                <form action="https://formspree.io/f/mzbnjrnb" method="post" className="comment-form">
                                    <div className="row gx-20">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="Phone" id="Phone" placeholder="Phone" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="Email" id="Email" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="Subject" id="Subject" placeholder="Subject" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea name="message" placeholder="Message" id="contactForm" className="form-control style2"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-btn col-12">
                                        <button type="submit" className="link-btn w-100 br-10" data-loading-text="Please wait...">
                                            <span className="link-effect">
                                                <span className="btn-title">Send Message</span>
                                            </span>
                                            <img src="/assets/images/icons/arrow-left-top.svg" alt="icon" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-map mt-60">
                                <iframe src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    );
};

export default Contact;