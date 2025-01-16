import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

type LoginProps = {
  onLogin: (email: string, password: string) => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="container">
      <LoginForm onLogin={onLogin} />
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
