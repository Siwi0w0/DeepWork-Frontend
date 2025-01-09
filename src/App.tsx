import React from "react";
import "./App.css";

import Calendar from "./components/Calendar/Calendar";
import TimeAxis from "./components/timeAxis/TimeAxis";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="calendar-panel">
        <Calendar />
      </div>
      <div className="time-axis-panel">
        <TimeAxis />
      </div>
    </div>
  );
};

export default App;
