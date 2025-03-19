import React from 'react';
import Header from '../Components/Header';
import Footer1 from '../Components/Footer/Footer1';

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <Header />
            {children}
            <Footer1 />
        </div>
    );
};

export default DefalultLayout;