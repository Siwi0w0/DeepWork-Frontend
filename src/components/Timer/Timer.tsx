import { useState, useEffect } from 'react';
import "./timer.css";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [records, setRecords] = useState([]);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    // const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}
      `;
  };

  const startTimer = () => {
    if (!isRunning) {
      const now = new Date();
      setStartTime(now);
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      const endTime = new Date();
      const duration = Math.floor((endTime - startTime) / 1000);
      setRecords(prev => [...prev, {
        startTime,
        endTime,
        duration,
        id: Date.now()
      }]);
    }
    setIsRunning(false);
  };

  return (
    <div className="card bg-base-100 w-full max-w-2xl">
      <div className="card-body">
        <div className="flex flex-col items-center gap-6">
          {/* Main Timer Display */}
          <div className="stat rounded-box w-full">
            <div className="stat-title text-center">Deep Work Time</div>
            <div className="stat-value text-4xl font-mono text-center text-primary">
              {formatTime(time)}
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex gap-4">
            <button
              onClick={isRunning? pauseTimer : startTimer}
              className={`fas ${isRunning ? "fa-pause" : "fa-play"} mr-2`}
            >
              <i className={`fas ${isRunning ? "fa-pause" : "fa-play"} mr-2`}></i>
              {isRunning? 'Pause' : 'Start'}
            </button>
          </div>

          {/* Records List */}
          {records.length > 0 && (
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-4">Duration Records</h3>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((record, index) => (
                      <tr key={record.id}>
                        <td>{records.length - index}</td>
                        <td>{record.startTime.toLocaleTimeString()}</td>
                        <td>{record.endTime.toLocaleTimeString()}</td>
                        <td>{formatTime(record.duration)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;