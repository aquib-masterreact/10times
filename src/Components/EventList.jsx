import { useState,useEffect } from "react";
import { DataApi } from "../DataApi";
import { Link } from "react-router-dom";
import "../App.css"
const EventList = () => {
    const [events, setEvents] = useState([]);

  useEffect(() => {
    
    setEvents(DataApi);
  }, []);
  return (
    <div>
      <h2>Event List</h2>
      {events.length === 0 ? (
        <p>No events available</p>
      ) : (
        <ul>
          {events.map((event,index) => (
           <div className="event-card" key={index}>
           <h3>{event.eventName}</h3>
           <p>
             <strong>Start Date:</strong> {event.startDate}
           </p>
           <p>
             <strong>End Date:</strong> {event.endDate}
           </p>
           <p>
             <strong>Location:</strong> {event.location}
           </p>
           <Link to={`/events/${index}`}>View Details</Link>
         </div>
           
          ))}
        </ul>
      )}
    </div>
  )
}

export default EventList
