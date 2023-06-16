import React, { useEffect, useState } from "react";
import UpcomingEvent from "../../../components/UpcomingEvent";

const UpcomingEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    fetch("https://blog-page-server.vercel.app/upcoming-events")
      .then((res) => res.json())
      .then((data) => setEventsData(data));
  }, []);
  return (
    <div className="space-y-4">
      {eventsData.map((event) => (
        <UpcomingEvent key={event._id} event={event}></UpcomingEvent>
      ))}
    </div>
  );
};

export default UpcomingEvents;
