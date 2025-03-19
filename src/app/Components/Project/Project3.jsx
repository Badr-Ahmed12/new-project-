"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Project3 = () => {
  const projectContent = [
    {
      addclass: "col-xl-4 col-lg-6 col-md-6",
      img: "/assets/images/portfolio/portfolio3_1.jpg",
      title: "Illustrator Graphics",
      category: "Designing",
    },
    {
      addclass: "col-xl-4 col-lg-6 col-md-6",
      img: "/assets/images/portfolio/portfolio3_2.jpg",
      title: "Figma Design",
      category: "Application",
    },
    {
      addclass: "col-xl-4 col-lg-6 col-md-6",
      img: "/assets/images/portfolio/portfolio3_3.jpg",
      title: "Book Cover Mockup Design",
      category: "Branding",
    },
    {
      addclass: "col-xl-4 col-lg-6 col-md-6",
      img: "/assets/images/portfolio/portfolio3_4.jpg",
      title: "Figma Design",
      category: "Application",
    },
    {
      addclass: "col-xl-4 col-lg-6 col-md-6",
      img: "/assets/images/portfolio/portfolio3_5.jpg",
      title: "Illustrator Graphics",
      category: "Designing",
    },
    {
      addclass: "col-xl-4 col-lg-6 col-md-6",
      img: "/assets/images/portfolio/portfolio3_6.jpg",
      title: "Book Cover Mockup Design",
      category: "Designing",
    },
    {
      addclass: "col-xl-4 col-lg-6 col-md-6",
      img: "/assets/images/portfolio/portfolio3_7.jpg",
      title: "Creative Poster Design",
      category: "Branding",
    },
    {
      addclass: "col-xl-4 col-lg-6 col-md-6",
      img: "/assets/images/portfolio/portfolio3_8.jpg",
      title: "Mobile App UI",
      category: "Application",
    },
    {
      addclass: "col-xl-4 col-lg-6 col-md-6",
      img: "/assets/images/portfolio/portfolio3_9.jpg",
      title: "Modern Logo Design",
      category: "Designing",
    },
    // ممكن تضيف مشاريع زيادة هنا
  ];

  const [visibleCount, setVisibleCount] = useState(9);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="portfolio-area style-three bg-theme2"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="title-upper_area">
              <span className="title">( News & Blog )</span>
              <div className="right">
                <span className="title">( 2018 - 2024 )</span>
                <h3 className="title-info_text mt-50 md-mt-30 xs-mt-15">
                  Have a look at some of the projects I’ve worked on. Clients vary from lifestyle to tech and design companies.
                </h3>
              </div>
            </div>
          </div>

          <div className="tab_content">
            <div className="tabs-item">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="row gx-110 justify-content-between"
              >
                {projectContent.slice(0, visibleCount).map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className={item.addclass}
                  >
                    <div className="portfolio-wraper-3">
                      <div className="portfolio-thumb style-2">
                        <Link href="/project/project-details">
                          <img alt="portfolio" src={item.img} />
                        </Link>
                        <div className="portfolio-thumb-view">
                          <Link
                            href="/project/project-details"
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img src="/assets/images/icons/eye.svg" alt="View" />
                          </Link>
                        </div>
                      </div>
                      <div className="portfolio-details pr-30 md-pr-0">
                        <h4 className="title">
                          <Link href="/project/project-details">{item.title}</Link>
                        </h4>
                        <Link href="/project/project-details" className="portfolio-btn">
                          <span className="meta">{item.category}</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              {visibleCount < projectContent.length && (
                <div className="row">
                  <div className="col-xl-12 text-center mt-30">
                    <button onClick={handleLoadMore} className="btn btn-primary">
                      See More
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project3;