import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/loginForm/LoginForm";

type LoginProps = {
  onLogin: (email: string, password: string) => boolean;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (email: string, password: string) => {
    const success = onLogin(email, password);
    if (success) {
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <LoginForm onLogin={handleLogin} />
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
