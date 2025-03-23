"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { projectData } from "@/app/Components/Project/data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams(); // هنا بنستخرج id من الرابط
  const project = projectData.find((p) => String(p.id) === id); // مقارنة الـ id بعد تحويله ل string

  if (!project) {
    return <div>Project not found</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.sliderImages;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  
const splitTextByWords = (text, wordsPerChunk = 20) => {
  const words = text.split(' ');
  const chunks = [];
  for (let i = 0; i < words.length; i += wordsPerChunk) {
    chunks.push(words.slice(i, i + wordsPerChunk).join(' '));
  }
  return chunks;
};
const paragraphs = splitTextByWords(project.overview, 20);


  return (
    <div className="container py-5 mt-150">
      <div className="mb-5 text-center">
        <h2 className="display-4">{project.title}</h2>
        <p className="lead">{project.subTitle}</p>
      </div>

      <div className="mb-5">
        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <h6>Client</h6>
            <p>{project.client}</p>
          </div>
          <div className="col-md-3 mb-3">
            <h6>Published</h6>
            <p>{project.published}</p>
          </div>
          <div className="col-md-3 mb-3">
            <h6>Technology</h6>
            <p>{project.technology}</p>
          </div>
          <div className="col-md-3 mb-3">
            <h6>Categories</h6>
            <p>{project.categories}</p>
          </div>
        </div>
      </div>

      {project.images.main && (
        <div className="mb-5">
          <Image 
            src={project.images.main} 
            alt="Main image" 
            width={1320} 
            height={850} 
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
      )}

      <div className="mb-5">
      <h3 className="mb-3 ">Project Overview</h3>
      {paragraphs.map((para, index) => (
        <p key={index} className="lead " style={{ lineHeight: '1.6' }}>
          {para}
        </p>
      ))}
    </div>


      <div className="mb-5">
        <div className="position-relative">
          <div className="ratio ratio-16x9 rounded-top overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-100 h-100"
              >
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt={`Project slide ${currentIndex + 1}`}
                  width={1320}
                  height={650}
                  className="w-100 h-100 object-fit-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* زر الرجوع */}
          <button
            onClick={handlePrev}
            className="btn position-absolute top-50 start-0 translate-middle-y rounded-circle shadow bg-white p-3 border-0 d-flex justify-content-center align-items-center"
            aria-label="Previous"
            style={{ width: "50px", height: "50px" }}
          >
            <ChevronLeft size={24} className="text-secondary" />
          </button>

          {/* زر التقدم */}
          <button
            onClick={handleNext}
            className="btn position-absolute top-50 end-0 translate-middle-y rounded-circle shadow bg-white p-3 border-0 d-flex justify-content-center align-items-center"
            aria-label="Next"
            style={{ width: "50px", height: "50px" }}
          >
            <ChevronRight size={24} className="text-secondary" />
          </button>
        </div>
      </div>

      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3">
        {images.map((image, index) => (
          <div key={index} className="col">
            <button
              onClick={() => setCurrentIndex(index)}
              className={`btn p-0 border-0 ${currentIndex === index ? "border border-2 rounded" : "rounded"}`}
              style={{ width: "100%" , height: "100%"  , cursor: "pointer"  , backgroundColor: "transparent" ,  }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                width={300}
                height={300}
                className="img-fluid rounded shadow-sm"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
