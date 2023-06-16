import React, { useEffect, useState } from 'react';
import Sponsored from '../../components/Sponsored';
import NewsFeed from '../../components/newsFeed';
const Jobs = () => {
    const [sponsoredData, setSponsoredData] = useState([]);
  const [newsFeedData, setNewsFeedData] = useState([]);
  useEffect(() => {
    fetch("/public/data/sponsored.json")
      .then((res) => res.json())
      .then((data) => setSponsoredData(data));
  }, []);
  useEffect(() => {
    fetch("/public/data/blog.json")
      .then((res) => res.json())
      .then((data) => setNewsFeedData(data));
  }, []);
  return (
    <div className="md:grid grid-cols-4 min-h-screen relative max-container">
      <div className="col-start-1 col-end-2 border-r min-h-screen p-2  space-y-10 w-[200px] fixed hidden md:block">
        <div className="space-y-3 w-full">
          <div className="w-full text-center px-2 py-1 hover:bg-slate-100 text-[#0d6efd] hover:text-gray-600 bg-slate-50 duration-200">
            <p className="text-sm font-serif font-medium">Most Popular</p>
          </div>
          <div className="w-full text-center px-2 py-1 hover:bg-slate-100 text-[#0d6efd] hover:text-gray-600 bg-slate-50 duration-200">
            <p className="text-sm font-serif font-medium">Highlights</p>
          </div>
          <div className="w-full text-center px-2 py-1 hover:bg-slate-100 text-[#0d6efd] hover:text-gray-600 bg-slate-50 duration-200">
            <p className="text-sm font-serif font-medium">Latest Blogs</p>
          </div>
          <div className="w-full text-center px-2 py-1 hover:bg-slate-100 text-[#0d6efd] hover:text-gray-600 bg-slate-50 duration-200">
            <p className="text-sm font-serif font-medium">Top Blogs</p>
          </div>
          <div className="w-full text-center px-2 py-1 hover:bg-slate-100 text-[#0d6efd] hover:text-gray-600 bg-slate-50 duration-200">
            <p className="text-sm font-serif font-medium">Best Article</p>
          </div>
          <div className="w-full text-center px-2 py-1 hover:bg-slate-100 text-[#0d6efd] hover:text-gray-600 bg-slate-50 duration-200">
            <p className="text-sm font-serif font-medium">Publish Blog</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-center pt-1 text-base font-semibold font-serif text-[#0d6efd] border-b">
            Sponsored
          </h1>
          <div className="space-y-3 mt-5">
            {sponsoredData?.map((data) => (
              <Sponsored key={data.id} data={data}></Sponsored>
            ))}
          </div>
        </div>
      </div>
      {/* news feeds */}
      <div className="col-start-2 col-end-5">
        {
          newsFeedData?.map(data => <NewsFeed key={data._id} data={data}></NewsFeed>)
        }
      </div>
    </div>
  );
};

export default Jobs;