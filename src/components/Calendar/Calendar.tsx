import React, { useState } from "react";
import "./Calendar.css";

const CalendarView: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const renderDays = () => {
    const startOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const days = [];

    for (let i = 0; i < 30; i++) {
      const date = new Date(
        startOfMonth.getFullYear(),
        startOfMonth.getMonth(),
        i + 1
      );
      days.push(
        <div className="calendar-day" key={i}>
          {date.getDate()}
        </div>
      );
    }
    return days;
  };

  return (
    <div>
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>{"<"}</button>
        <span>
          {currentMonth.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={handleNextMonth}>{">"}</button>
      </div>
      <div className="calendar-body">{renderDays()}</div>
    </div>
  );
};

export default CalendarView;
