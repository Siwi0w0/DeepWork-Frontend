import React, { useState } from "react";
import { startOfWeek, addDays, format } from "date-fns";

const CombinedView: React.FC = () => {
  // 当前日期
  const today = new Date();

  // 获取本周的日期
  const weekDays = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfWeek(today, { weekStartsOn: 1 }), i)
  );

  // 全天时间段（按小时为单位）
  const timeSlots = Array.from(
    { length: 24 },
    (_, i) => i.toString().padStart(2, "0") + ":00"
  );

  // 状态：选择的日期
  const [selectedDate, setSelectedDate] = useState<Date>(today);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* 左侧：日历视图 */}
      <div
        style={{
          width: "300px",
          borderRight: "1px solid #ddd",
          padding: "10px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Weekly Calendar</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "5px",
            marginTop: "20px",
          }}
        >
          {weekDays.map((day) => (
            <div
              key={day.toISOString()}
              onClick={() => setSelectedDate(day)}
              style={{
                padding: "10px",
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "4px",
                cursor: "pointer",
                backgroundColor:
                  format(day, "yyyy-MM-dd") ===
                  format(selectedDate, "yyyy-MM-dd")
                    ? "#cce4f7"
                    : "#fff",
                color:
                  format(day, "yyyy-MM-dd") ===
                  format(selectedDate, "yyyy-MM-dd")
                    ? "#007acc"
                    : "#555",
              }}
            >
              <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                {format(day, "EEE")}
              </div>
              <div style={{ fontSize: "12px" }}>{format(day, "dd")}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 右侧：时间块视图 */}
      <div
        style={{
          flex: 1,
          overflowY: "scroll",
        }}
      >
        <h3 style={{ textAlign: "center" }}>
          Schedule for {format(selectedDate, "EEEE, MMM d")}
        </h3>
        <div
          style={{
            display: "flex",
            height: "calc(100vh - 80px)",
          }}
        >
          {/* 时间刻度 */}
          <div
            style={{
              width: "80px",
              textAlign: "right",
              paddingRight: "10px",
              borderRight: "1px solid #ddd",
            }}
          >
            {timeSlots.map((time) => (
              <div
                key={time}
                style={{
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  color: "#555",
                  fontSize: "12px",
                }}
              >
                {time}
              </div>
            ))}
          </div>

          {/* 时间块区域 */}
          <div style={{ flex: 1 }}>
            {timeSlots.map((time) => (
              <div
                key={time}
                style={{
                  height: "60px",
                  borderBottom: "1px solid #eee",
                  position: "relative",
                  backgroundColor: "#fafafa",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    fontSize: "10px",
                    color: "#bbb",
                  }}
                >
                  {/* Placeholder for interactions */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedView;
