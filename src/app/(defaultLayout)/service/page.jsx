import Brand2 from '@/app/Components/Brand/Brand2';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Services from '@/app/Components/Services/Services';
import Testimonail2 from '@/app/Components/Testimonial/Testimonail2';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                addclass="breadcumb-wrapper space-bottom bg-theme2"
                Title1="LET'S SEE"
                title2="SERVICES"
            ></BreadCumb>  
            <Services></Services>   
            <Testimonail2
                addclass="testimonial-area space-bottom bg-theme2"
            ></Testimonail2> 
            <Brand2></Brand2>                   
        </div>
    );
};

export default page;