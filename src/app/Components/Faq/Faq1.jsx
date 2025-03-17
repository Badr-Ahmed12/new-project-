"use client"
import { useEffect, useRef, useState } from "react";

const Faq1 = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
  
    const handleItemClick = index => {
      if (index === openItemIndex) {
        setOpenItemIndex(-1);
      } else {
        setOpenItemIndex(index);
      }
    };
    useEffect(() => {
      if (firstItemOpen) {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
      }
    }, [firstItemOpen]);    

    const faqContent = [
        {
            number:'01', 
            title:'Research', 
            content:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. dictionary of with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
            tag1:'Customers Servey',
            tag2:'Customer journey research',               
            tag3:'User Interviews',               
            tag4:'Market Analysis'               
        },
        {
            number:'02', 
            title:'Storytelling', 
            content:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. dictionary of with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
            tag1:'Customers Servey',
            tag2:'Customer journey research',               
            tag3:'User Interviews',               
            tag4:'Market Analysis' 
        },
        {
            number:'03', 
            title:'Design', 
            content:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. dictionary of with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
            tag1:'Customers Servey',
            tag2:'Customer journey research',               
            tag3:'User Interviews',               
            tag4:'Market Analysis'              
      }     
  ]; 


    return (
        <div className="process-area space space-bm-30 bg-theme2 overflow-hidden">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-12">
                    <div className="title-area text-center ">
                        <h2 className="sec-title">Your dream website just a <br/> <span className="font2">few process</span></h2>
                    </div>
                </div>
                <div className="col-xl-12">
                    <ul className="accordion-box faq-area">
                    {faqContent.map((item, index) => (
                        <li key={index} className={`accordion block ${index === openItemIndex ? "active" : "" }`} >
                            <div onClick={() => handleItemClick(index)} className="acc-btn active">{item.number}   <span className="title">{item.title}</span>
                                <span className="icon"></span>
                            </div>
                            <div ref={accordionContentRef} className="acc-content">
                                <div className="content">
                                    <div className="text">{item.content}</div>
                                    <ul className="tags">
                                        <li><a href="#">{item.tag1}</a></li>
                                        <li><a href="#">{item.tag2}</a></li>
                                        <li><a href="#">{item.tag3}</a></li>
                                        <li><a href="#">{item.tag4}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Faq1;