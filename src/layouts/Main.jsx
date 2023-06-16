import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import UpcomingEvents from '../pages/Shared/UpcomingEvents/UpcomingEvents';

const Main = () => {
    return (
        <div className='relative h-full max-container '>
            <Header></Header>
            <div className='lg:grid grid-cols-8 min-h-screen max-container relative overflow-hidden'>
                <div className='col-start-1 col-end-7 h-screen w-full overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden'>
                    <Outlet></Outlet>
                </div>
                <div className='border-l w-[280px] bg-white   h-full  hidden lg:block'>
                    <h1 className='text-center pt-1 text-base font-semibold font-serif text-[#0d6efd]'>Upcoming Events</h1>
                    <UpcomingEvents></UpcomingEvents>
                </div>
            </div>
        </div>
    );
};

export default Main;