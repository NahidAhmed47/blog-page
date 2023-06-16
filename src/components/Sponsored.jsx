import React from 'react';
import { BsCalendar2Check } from "react-icons/bs";

const Sponsored = ({data}) => {
    const {title, image, date}= data;
    return (
        <div className='w-full flex gap-1'>
            <img className='w-[40%]' src={image} alt="" />
            <div className=''>
                <h1 className='text-xs font-medium font-serif'>{title}</h1>
                <div className='text-[10px] font-serif flex items-center gap-1'>
                <BsCalendar2Check className='w-3 h-3'></BsCalendar2Check> {date}
                </div>
            </div>
        </div>
    );
};

export default Sponsored;