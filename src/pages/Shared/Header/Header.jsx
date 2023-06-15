import React from 'react';
import SubNavbar from './SubNavbar';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='max-container'>
            <SubNavbar></SubNavbar>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;