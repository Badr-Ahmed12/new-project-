import About3 from '@/app/Components/About/About3';
import Award1 from '@/app/Components/Award/Award1';
import Brand2 from '@/app/Components/Brand/Brand2';
import Counter1 from '@/app/Components/Counter/Counter1';
import Experience2 from '@/app/Components/Experience/Experience2';
import Faq1 from '@/app/Components/Faq/Faq1';
import Skill2 from '@/app/Components/Skill/Skill2';
import Testimonail2 from '@/app/Components/Testimonial/Testimonail2';
import React from 'react';

const page = () => {
    return (
        <div>
            <About3></About3>
            <Counter1></Counter1>
            <Skill2></Skill2>
            <Experience2></Experience2>
            <Faq1></Faq1>
            <Award1></Award1>
            <Testimonail2
                addclass="testimonial-area space bg-theme2"
            ></Testimonail2> 
            <Brand2></Brand2>           
        </div>
    );
};

export default page;