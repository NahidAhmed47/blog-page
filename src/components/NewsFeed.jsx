import React from 'react';
import {  BsChatDots, BsHandThumbsUp, BsShare } from "react-icons/bs";

const NewsFeed = ({data}) => {
    const {image, title, description, likes, comment, share, published_date, author} = data;
    console.log(data)
    return (
        <div className='w-full p-3'>
            <div className=''>
                <img src={image} alt="" />
            </div>
            <div className='mt-2'>
                <h1 className='text-lg font-medium '>{title}</h1>
                <p className='text-xs'>By <span className='text-[#0d6efd] cursor-pointer'>{author}</span></p>
                <p className='text-sm font-normal text-gray-500 font-mono mt-1'>{description}  <span className='text-[#0d6efd] cursor-pointer'> see more...</span></p>
                <div className='h-fit py-1 w-full border-b border-t mt-4 flex justify-between md:px-5 items-center text-gray-600 '>
                    <div className='flex items-center w-fit justify-center gap-1 text-sm font-mono hover:text-[#0d6efd]'>
                        <BsHandThumbsUp className='w-4 h-4 '></BsHandThumbsUp> Like({likes})
                    </div>
                    <div className='flex items-center w-fit justify-center gap-1 text-sm font-mono hover:text-[#0d6efd]'>
                        <BsChatDots className='w-4 h-4 '></BsChatDots> Comment({comment})
                    </div>
                    <div className='flex items-center w-fit justify-center gap-1 text-sm font-mono hover:text-[#0d6efd]'>
                        <BsShare className='w-4 h-4 '></BsShare> Share({share})
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsFeed;