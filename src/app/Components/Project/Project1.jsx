"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Project1 = () => {
  const projectContent = [
    { img: "/assets/images/portfolio/portfolio2_1.jpg", subtitle: "// Branding", title: "3d Abstract Wallpaper" },
    { img: "/assets/images/portfolio/portfolio2_2.jpg", subtitle: "// Graphic Design", title: "Book Covers Design" },
    { img: "/assets/images/portfolio/portfolio2_3.jpg", subtitle: "// Website Design", title: "Business Apps" },
    { img: "/assets/images/portfolio/portfolio2_4.jpg", subtitle: "// Branding", title: "Products Mockup Design" },
    { img: "/assets/images/portfolio/portfolio2_5.jpg", subtitle: "// Graphic Design", title: "Culture Magazine" },
    { img: "/assets/images/portfolio/portfolio2_5.jpg", subtitle: "// Graphic Design", title: "Culture Magazine" },
    { img: "/assets/images/portfolio/portfolio2_5.jpg", subtitle: "// Graphic Design", title: "Culture Magazine" },
    { img: "/assets/images/portfolio/portfolio2_5.jpg", subtitle: "// Graphic Design", title: "Culture Magazine" },
    { img: "/assets/images/portfolio/portfolio2_6.jpg", subtitle: "// Product Design", title: "Beyond Energy" }
  ];

  return (
    <div className="portfolio-area style-two space bg-black">
      <div className="big-title-wrap text-center mt--20">
        <h2 className="big-title mb-0 text-white" data-count="[ 6 ]">WORKS</h2>
      </div>
      <div className="container py-5">
        {/* Grid ب3 أعمدة زي الكود اللي فوق */}
        <div className="row row-cols-3 g-1">
          {projectContent.map((item, i) => (
            <motion.div
              key={i}
              className="col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="square position-relative">
                <Link href="/project/project-details">
                  {/* نستخدم fill بدل layout="fill" عشان يكون متوافق مع أحدث نسخة */}
                  <Image src={item.img} alt={item.title} fill style={{ objectFit: "cover" }} />
                  <div className="overlay d-flex flex-column align-items-center justify-content-center">
                    <span className="project-subtitle text-white">{item.subtitle}</span>
                    <h3 className="project-title text-white fw-bold">{item.title}</h3>
                    <div className="arrow-icon mt-2">
                      <Image src="/assets/images/icons/arrow-left-top2.svg" alt="arrow" width={14} height={14} />
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="btn-wrap mt-80 lg-mt-60 md-mt-40">
              <Link className="btn btn-primary btn-lg fw-bold px-4 py-2 rounded-pill d-flex align-items-center justify-content-center" style={{ width: "fit-content" }} href="/project">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .square {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          overflow: hidden;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .square:hover .overlay {
          opacity: 1;
        }
        .project-title {
          font-size: 1.5rem;
          margin-top: 5px;
        }
        .project-subtitle {
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Project1;
