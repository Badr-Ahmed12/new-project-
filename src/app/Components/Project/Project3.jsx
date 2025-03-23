"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { projectContent } from ".";  

const Project3 = () => {
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
        <div className="row gy-40">
          <div className="col-xl-12">
            <div className="title-upper_area">
              <span className="title">( News & Blog )</span>
              <div className="right">
                <span className="title">( 2018 - 2024 )</span>
                <h3 className="title-info_text mt-40 md-mt-20 xs-mt-10">
                  Have a look at some of the projects I’ve worked on. Clients vary from lifestyle to tech and design companies.
                </h3>
              </div>
            </div>
          </div>

          <div className="tab_content">
            <div className="tabs-item">
              {/* هنا بنلف على المشاريع المعروضة لحد visibleCount */}
              <motion.div
                className="row gy-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {projectContent.slice(0, visibleCount).map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    // هنا بنحدد 3 أعمدة في الصف على شاشات الـmd وما فوق
                    className="col-md-4 col-sm-6 p-3"
                  >
                    <div className="portfolio-wraper-3">
                      <div className="portfolio-thumb style-2">
                        <Link href="/project/project-details">
                          <img alt="portfolio" src={item.img} className="img-fluid" />
                        </Link>
                        {/* overlay element */}
                        <div className="hover-overlay"></div>
                        <div className="portfolio-thumb-view">
                          <Link
                            href={item.link}
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img src="/assets/images/icons/eye.svg" alt="View" />
                            <h1
                              style={{
                                fontSize: "25px",
                                textAlign: "center",
                                fontWeight: "600",
                                color: "black",
                                marginBottom: "8px",
                                letterSpacing: "0.5px",
                                marginTop: "15px",
                              }}
                            >
                              {item.title}
                            </h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {visibleCount < projectContent.length && (
                <div className="row gy-5">
                  <div className="col-xl-12 text-center mt-30">
                    <button 
                      onClick={handleLoadMore} 
                      className="btn btn-primary btn-lg fw-bold px-4 rounded-pill border-0"
                      style={{ 
                        transition: "0.3s", 
                        backgroundColor: "#CEFF00", 
                        borderRadius: "20px" 
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#CEFF99"}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#CEFF00"}
                    > 
                      See More
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .portfolio-thumb {
          position: relative;
          overflow: hidden;
        }
        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0);
          transition: background 0.3s ease;
          pointer-events: none;
        }
        .portfolio-thumb:hover .hover-overlay {
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </motion.div>
  );
};

export default Project3;
