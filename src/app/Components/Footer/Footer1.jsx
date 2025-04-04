import Image from "next/image";

const Footer1 = () => {
  return (
    <footer id="Lets-talk" className="footer-wrapper footer-layout1">
      <div className="main-area style-two space-minimize">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-12">
              <h2 className="big-title mb-50">
                LETS{" "}
                <Image
                  src="/assets/images/contact/man-2_1.jpg"
                  alt="img"
                  width={120}
                  height={120}
                />{" "}
                TALK
              </h2>
            </div>
            <div className="col-xl-12">
              <div className="contact-mail">
                <a href="mailto:franciless14@gmail.com" className="bg-black2">
                  <span className="link-effect">
                    <span className="effect-1">franciless14@gmail.com</span>
                    <span className="effect-1">franciless14@gmail.com</span>
                  </span>
                  <Image
                    src="/assets/images/icons/arrow-left-top.svg"
                    alt="img"
                    width={16}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-btn-box mt-60 mb-70 vxs-mb-30">
            <div className="row gx-60 lg-gx-30">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="contact-btn mb-30 text-center">
                  <a className="btn-black" href="mailto:WriteaMessage">
                    <span className="link-effect">
                      <span className="effect-1">Write a Message</span>
                      <span className="effect-1">Write a Message</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="contact-btn text-center">
                  {/* زر الويب يظهر فقط على الأجهزة الكبيرة */}
                  <a
                    className="btn-black d-none d-md-block"
                    href="https://web.whatsapp.com/send?phone=+201067683447&text=Hello"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="link-effect">
                      <span className="effect-1">whatsapp me</span>
                      <span className="effect-1">whatsapp me</span>
                    </span>
                  </a>
                  {/* زر الموبايل يظهر فقط على الأجهزة الصغيرة */}
                  <a
                    className="btn-black d-block d-md-none"
                    href="https://api.whatsapp.com/send?phone=+201067683447&text=Hello"
                  >
                    <span className="link-effect">
                      <span className="effect-1">whatsapp me</span>
                      <span className="effect-1">whatsapp me</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row gx-30">
            <div className="col-lg-3 col-md-6">
              <div className="social-item">
                <h5 className="title">Behance</h5>
                <a href="https://www.behance.net/">
                  <span className="link-effect">
                    <span className="effect-1">
                      <i className="bi bi-behance"></i>
                    </span>
                    <span className="effect-1">
                      <i className="bi bi-behance"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="social-item">
                <h5 className="title">Instagram</h5>
                <a href="https://instagram.com/">
                  <span className="link-effect">
                    <span className="effect-1">
                      <i className="bi bi-instagram"></i>
                    </span>
                    <span className="effect-1">
                      <i className="bi bi-instagram"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="social-item">
                <h5 className="title">Twitter</h5>
                <a href="https://twitter.com/">
                  <span className="link-effect">
                    <span className="effect-1">
                      <i className="bi bi-twitter-x"></i>
                    </span>
                    <span className="effect-1">
                      <i className="bi bi-twitter-x"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="social-item">
                <h5 className="title">Dribbble</h5>
                <a href="https://dribbble.com/">
                  <span className="link-effect">
                    <span className="effect-1">
                      <i className="bi bi-dribbble"></i>
                    </span>
                    <span className="effect-1">
                      <i className="bi bi-dribbble"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-12 text-center">
              <p className="copyright-text">
                &copy; Copyright by Mohmed — {new Date().getFullYear()}. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
