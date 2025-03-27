"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // عند التمرير للأسفل
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // عند التمرير للأعلى
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className='header-area2'>
      <header
        className={`cs_site_header cs_style_1 ${variant ? variant : ''} cs_sticky_header cs_site_header_full_width ${mobileToggle ? 'cs_mobile_toggle_active' : ''} ${isSticky ? isSticky : ''}`}
      >
        <div className="cs_main_header cs_accent_bg">
          <div className="container-fluid">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left" style={{ marginTop: '20px' }}>
                <Link className="cs_site_branding" href="/">
                  <Image src="/assets/images/img/icon.png" alt="img" width={300} height={250} />
                </Link>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={mobileToggle ? 'cs-munu_toggle cs_teggle_active' : 'cs-munu_toggle'}
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>

              <div className="cs_main_header_right">
                <div className="header-button">
                  <div className="btn-wrap fade_right">
                    <Link href="#Let`s-talk" className="link-btn">
                      <span className="link-effect">
                        <span className="effect-1">Lets Talk</span>
                        <span className="effect-1">Lets Talk</span>
                      </span>
                      <Image src="/assets/images/icons/arrow-left-top.svg" alt="img" width={10} height={26} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <style jsx global>{`
        /* تحسين استجابة اللوجو */
        .cs_site_branding > a > img {
          width: 300px;
          height: 250px;
          transition: all 0.3s ease;
        }
        @media (max-width: 1199px) {
          .cs_site_branding > a > img {
            width: 220px;
            height: 180px;
          }
        }
        @media (max-width: 991px) {
          .cs_site_branding > a > img {
            width: 180px;
            height: 150px;
          }
          /* ترتيب العناصر بشكل عمودي للموبايل */
          .cs_main_header_in {
            flex-direction: column;
            align-items: center;
          }
          .cs_main_header_left,
          .cs_main_header_center,
          .cs_main_header_right {
            margin: 10px 0;
          }
          .header-button {
            text-align: center;
          }
        }
        @media (max-width: 767px) {
          .cs_site_branding > a > img {
            width: 140px;
            height: 110px;
          }
        }
      `}</style>
    </div>
  );
}
