import About3 from '@/app/Components/About/About3';
import Brand2 from '@/app/Components/Brand/Brand2';
import Counter1 from '@/app/Components/Counter/Counter1';
import Experience2 from '@/app/Components/Experience/Experience2';
import Faq1 from '@/app/Components/Faq/Faq1';
import Skill2 from '@/app/Components/Skill/Skill2';
 import React from 'react';

const page = () => {
    return (
        <div>
            <About3 />
            <Counter1 />
            <Skill2 />
            <Experience2 />
            <Faq1 />         
           <Brand2 />           
        </div>
    );
};

export default page;