import React from 'react';
import Footer2 from '../Components/Footer/Footer2';
import Header from '../Components/Header';

const layout = ({ children }) => {
    return (
        <div className='main-page-area2'>
            <Header></Header>
            {children}
            <Footer2></Footer2>
        </div>
    );
};

export default layout;