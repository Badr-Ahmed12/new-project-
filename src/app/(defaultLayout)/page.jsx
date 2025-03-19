import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import About1 from '../Components/About/About1';
import Marquee from '../Components/Marquee/Marquee';
import Project1 from '../Components/Project/Project1';
import Brand1 from '../Components/Brand/Brand1';
import Services1 from '../Components/Services/Services1';

const Page = () => (
  <div>
    <HeroBanner1
      number="+20 1067683447"
      email="franciless14@gmail.com"
      expnum="8"
      expcontent="YEARS OF <br> EXPERIENCE"
      title1="Hi there!"
      title2="I'm Mohamed"
      title3="CREATIVE"
      title4="BASED IN ALEXANDRIE EGYPT"
      title5="DESIGNER"
      btnname="VIEW MY WORKS"
      btnurl="/project"
    />
    <About1 />
    <Marquee />
    <Project1 />
    <Brand1 />
    <Services1 />
    </div>
);

export default Page;
