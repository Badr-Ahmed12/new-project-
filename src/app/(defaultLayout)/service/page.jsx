import Brand2 from '@/app/Components/Brand/Brand2';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Services from '@/app/Components/Services/Services';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                addclass="breadcumb-wrapper space-bottom bg-theme2"
                Title1="LET'S SEE"
                title2="SERVICES"
            />  
            <Services />
            <Brand2 />                  
        </div>
    );
};

export default page;