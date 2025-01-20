import React from "react";
import Navbar from "../components/navbar/Navbar";
import Calendar from "../components/calendar/Calendar";
import TimeAxis from "../components/timeAxis/TimeAxis";
import Timer from "../components/timer/Timer";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="content-container">
        {/* left: calendar & timer */}
        <div className="calendar-panel">
          <Calendar />
          <Timer />
        </div>

        {/* right: time-axis */}
        <div className="time-axis-panel">
          <TimeAxis />
        </div>
      </div>
    </div>
  );
};

export default Home;
