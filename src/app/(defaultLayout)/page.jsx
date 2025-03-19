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

const Page = () => (
  <div>
    <HeroBanner1
      number="+123 (4567) 890"
      email="example@gmail.com"
      expnum="8"
      expcontent="YEARS OF <br> EXPERIENCE"
      title1="Hi there!"
      title2="I'm Mohamed"
      title3="CREATIVE"
      title4="BASED IN ALEXANDRAY EGYPT"
      title5="DESIGNER"
      btnname="VIEW MY WORKS"
      btnurl="/project"
    />
    <About1 />
    <Marquee />
    <Project1 />
    <Brand1 />
    <Services1 />
    <Testimonial />
   </div>
);

export default Page;
