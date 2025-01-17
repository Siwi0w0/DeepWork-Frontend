import React from "react";
import Navbar from "../components/navbar/Navbar";
import Calendar from "../components/Calendar/Calendar";
import TimeAxis from "../components/TimeAxis/TimeAxis";
import Timer from "../components/Timer/Timer";

const TimeZone: React.FC = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="calendar-panel">
        <Calendar />
        <Timer />
      </div>
      <div className="time-axis-panel">
        <TimeAxis />
      </div>
    </div>
  );
};

export default TimeZone;
