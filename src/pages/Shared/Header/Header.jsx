import React from 'react';
import SubNavbar from './SubNavbar';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='max-container sticky top-0 bg-white z-20'>
            <SubNavbar></SubNavbar>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;