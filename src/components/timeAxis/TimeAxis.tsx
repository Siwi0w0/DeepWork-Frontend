import React from "react";
import "./TimeAxis.css";

const TimeAxis: React.FC = () => {
  const hours = Array.from({ length: 24 }).map((_, hour) => hour);

  return (
    <div className="time-block-container">
      {hours.map((hour) => (
        <div className="time-zone" key={hour}>
          <div className="time-number">
            <div>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  height: "40px",
                }}
              >
                {hour.toString().padStart(2, "0")}:00
              </span>
            </div>
          </div>
          <div className="time-axis">
            <div style={{ flexGrow: 1, backgroundColor: "#f9f9f9" }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeAxis;
