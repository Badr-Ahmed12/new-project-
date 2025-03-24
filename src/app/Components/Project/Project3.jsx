"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const projectContent = [
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "MASKOOB", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 2", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 3", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 4", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 5", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 6", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 7", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 8", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 9", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 9", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 9", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 9", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 9", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 9", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 9", link: "project/project-details/5" },
  { img: "/assets/images/portfolio/portfolio3_1.jpg", title: "Project 9", link: "project/project-details/5" },
];

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
      className="portfolio-area style-three bg-black"
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-xl-12 mb-4 text-center text-white">
            {/* ممكن تضيف عنوان أو وصف هنا لو حابب */}
          </div>
        </div>

        {/* Grid من غير مسافات بين الأعمدة والصفوف */}
        <div className="row row-cols-3 g-1">
          {projectContent.slice(0, visibleCount).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="col"
            >
              <div className="square position-relative">
                <Link href={item.link}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                  {/* Overlay يظهر عند hover */}
                  <div className="overlay d-flex flex-column align-items-center justify-content-center">
                    <span className="project-title text-white fw-bold" style={{ fontSize: "2.5rem" }}>{item.title}</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر التحميل لو عندك مشاريع أكتر */}
        {visibleCount < projectContent.length && (
          <div className="row">
            <div className="col-xl-12 text-center mt-4">
              <button
                onClick={handleLoadMore}
                className="btn btn-primary btn-lg fw-bold px-4 rounded-pill border-0"
                style={{
                  transition: "0.3s",
                  backgroundColor: "#CEFF00",
                  borderRadius: "20px",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#CEFF99")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#CEFF00")
                }
              >
                See More
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .square {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
        }
        .object-fit-cover {
          object-fit: cover;
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
        /* تكبير عنوان المشروع */
        .project-title {
          font-size: 1.5rem; /* ممكن تزود الرقم على حسب اللي تحبه */
          margin-bottom: 10px;
        }
        .neon-text {
          font-family: 'Orbitron', sans-serif;
          font-size: 5rem;
          color: #ccff00;
          text-shadow: 0 0 10px #ccff00, 0 0 20px #99cc00, 0 0 30px #66ff00;
          letter-spacing: 3px;
          animation: glow 1.5s infinite alternate;
        }
      `}</style>
    </motion.div>
  );
};

export default Project3;
