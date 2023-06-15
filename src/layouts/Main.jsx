import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import UpcomingEvents from '../pages/Shared/UpcomingEvents/UpcomingEvents';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-8 h-screen max-container'>
                <div className='col-start-1 col-end-7 border h-full w-full'>
                    <Outlet></Outlet>
                </div>
                <div className='w-full h-full border col-start-7 col-end-9'>
                    <UpcomingEvents></UpcomingEvents>
                </div>
            </div>
        </div>
    );
};

export default Main;