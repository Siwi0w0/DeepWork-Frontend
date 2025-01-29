import './addEvent.css';
import EventForm from './EventForm';
import {useState} from 'react';

function AddEvent() {
  const [showEvent, setShowEventForm] = useState(false);

  const handleEventSubmit = (eventData: EventData) => {
    //Handle successful event creation
    console.log('Event created:'
    , eventData);
  }
  return (
    <div>
      <button onClick={EventForm}
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Create Event</button>
    </div>
  )
}

export default AddEvent