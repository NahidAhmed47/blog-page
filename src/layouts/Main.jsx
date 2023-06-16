import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import UpcomingEvents from '../pages/Shared/UpcomingEvents/UpcomingEvents';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-8 min-h-screen max-container'>
                <div className='col-start-1 col-end-7 h-full w-full'>
                    <Outlet></Outlet>
                </div>
                <div className='w-full h-full border-l col-start-7 col-end-9'>
                    <h1 className='text-center pt-1 text-base font-semibold font-serif text-[#0d6efd]'>Upcoming Events</h1>
                    <UpcomingEvents></UpcomingEvents>
                </div>
            </div>
        </div>
    );
};

export default Main;