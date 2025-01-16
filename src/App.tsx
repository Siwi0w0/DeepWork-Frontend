import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TimeZone from "./pages/TimeZone";

const App: React.FC = () => {
  const [users, setUsers] = useState<
    { email: string; password: string; username: string }[]
  >([]);

  const handleRegister = (newUser: {
    username: string;
    email: string;
    password: string;
  }) => {
    if (users.find((user) => user.email === newUser.email)) {
      alert("Email already registered!");
      return;
    }
    setUsers([...users, newUser]);
    alert("Registration successful!");
  };

  const handleLogin = (email: string, password: string) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      alert(`Welcome back, ${user.username}!`);
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TimeZone />} />
        <Route
          path="/register"
          element={<Register onRegister={handleRegister} />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
