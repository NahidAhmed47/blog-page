import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";

const UpcomingEvent = ({ event }) => {
  console.log(event);
  const { image, title, time, date, location } = event;
  return (
    <div className="p-2 flex gap-1 items-center">
      <div>
        <img className="max-w-[120px] " src={image} alt="" />
      </div>
      <div>
        <h1 className="text-sm font-semibold font-serif">{title}</h1>
        <div>
          <div className="flex items-center gap-1">
            <BsStopwatch className="w-3 h-3"></BsStopwatch>
            <p className="text-[10px]">{time}</p>
          </div>
          <p className="text-[10px]">{date}</p>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="w-3 h-3"></FaMapMarkerAlt>
            <p className="text-[10px]">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
