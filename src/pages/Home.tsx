import React from "react";
import Navbar from "../components/navbar/Navbar";
import Calendar from "../components/calendar/Calendar";
import TimeAxis from "../components/timeAxis/TimeAxis";
import Timer from "../components/timer/Timer";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="calendar-panel flex min-h-screen flex-col items-center justify-between p-24">
        <Calendar />
        <Timer />
      </div>
      <div className="time-axis-panel">
        <TimeAxis />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
