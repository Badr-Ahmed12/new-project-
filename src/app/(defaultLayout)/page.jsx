import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import About1 from '../Components/About/About1';
import Marquee from '../Components/Marquee/Marquee';
import Project1 from '../Components/Project/Project1';
import Brand1 from '../Components/Brand/Brand1';
import Services1 from '../Components/Services/Services1';
import Pricing from '../Components/Pricing/Pricing';
import Testimonial from '../Components/Testimonial/Testimonial';
import Blog1 from '../Components/Blog/Blog1';

const page = () => {
    return (
        <div>
            <HeroBanner1
                number="+123 (4567) 890"
                email="example@gmail.com"
                expnum="10"
                expcontent="YEARS OF <br> EXPERIENCE"
                title1="Hi there!"
                title2="I'm Nabhan"
                title3="CREATIVE"
                title4="BASED IN LONDON"
                title5="DESIGNER"
                btnname="VIEW MY WORKS"
                btnurl="/project"
            ></HeroBanner1>   
            <About1></About1>
            <Marquee></Marquee>
            <Project1></Project1>
            <Brand1></Brand1> 
            <Services1></Services1>  
            <Pricing></Pricing>
            <Testimonial></Testimonial>
            <Blog1></Blog1>      
        </div>
    );
};

export default page;