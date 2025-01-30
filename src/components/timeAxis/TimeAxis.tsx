import React from "react";
import "./timeAxis.css";

const TimeAxis: React.FC = () => {
  const hours = Array.from({ length: 24 }).map((_, hour) => hour);

  return (
    <div>
      <div className="Date-title flex">
        <h1 className="font-mono font-semibold text-4xl">Today</h1>
        <div>02:17</div>
      </div>
      <div  className="time-block-container">
        <div className="z-0 h-full w-full py-4">
        {hours.map((hour) => (
          <div className="time-zone" key={hour}>
            <div className="time-number">
              <div>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "40px",
                  }}
                >
                  {hour.toString().padStart(2, "0")}:00
                </span>
              </div>
            </div>
            {/* Event 入口？ */}
            <div className="time-axis">
              <div style={{ flexGrow: 1,
                backgroundColor: "#f9f9f9" }}></div>
            </div>
          </div>
        ))}
        </div>
        <div className="z-1">event</div>
      </div>
    </div>
  );
};

export default TimeAxis;
