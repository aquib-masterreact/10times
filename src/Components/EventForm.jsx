
import { useState } from "react";
import { DataApi } from "../DataApi";
import { useNavigate } from "react-router-dom";
import "../App.css"
const EventForm = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        startDate: '',
        endDate: '',
        theme: '',
        location: '',
      });
    
     const navigate = useNavigate()
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        
        console.log('Event Data Submitted:', formData);
        DataApi.push(formData);
        
        console.log(DataApi)
        navigate('/event')
      };
  return (
    <div className="event-div">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Event Theme:
          <input
            type="file"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EventForm
