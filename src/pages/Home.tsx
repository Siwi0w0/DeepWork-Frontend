import React from "react";
import Navbar from "../components/navbar/Navbar";
import Calendar from "../components/calendar/Calendar";
import TimeAxis from "../components/timeAxis/TimeAxis";
import Timer from "../components/timer/Timer";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { useEffect } from "react";

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <Navbar />
      <div className="content-container">
        <div className="calendar-panel">
          <Calendar />
          <Timer />
        </div>
        <div className="time-axis-panel">
          <TimeAxis />
        </div>
      </div>
    </div>
  );
};

export default Home;
