"use client";

import React from "react";

const Counter1 = () => {
  const counterContent = [
    { number: "250", position: "Project Completed" },
    { number: "350", position: "Satisfied Clients" },
    { number: "8", position: "Years of Experience" },
  ];

  return (
    <div className="counter-area bg-theme2">
      <div className="container">
        <div className="row counter-wrap gy-20 align-items-center justify-content-lg-between justify-content-center">
          {counterContent.map((item, i) => (
            <div key={i} className="col-xl-auto col-lg-3 col-md-3 col-sm-6">
              <div className="counter-box">
                <h3 className="counter-box_number text-white">
                  <span className="count-number">{item.number}</span>+
                </h3>
                <h4 className="counter-box_title text-white">{item.position}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .counter-area {
          padding: 80px 0; /* زيادة padding علشان يبقي في مساحة أكتر فوق وتحت */
          background: #1a1a1a;
        }
        .counter-box {
          padding: 30px 20px; /* تحسين المسافات داخل كل بوكس */
          border-radius: 8px;
          text-align: center;
        }
        /* ممكن تضيف مسافات إضافية لو محتاج */
      `}</style>
    </div>
  );
};

export default Counter1;
