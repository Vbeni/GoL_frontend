import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from '../components/Users/Register';
import Login from '../components/Users/Login';

const Home = ({ onLoginSuccess }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleRegisterSuccess = (username) => {
    onLoginSuccess(username);
    setIsLoggedIn(true);
  };

  const handleLoginSuccess = (username) => {
    onLoginSuccess(username);
    setIsLoggedIn(true);
  };

 // Navigate to PatternList page if logged in
  if (isLoggedIn) {
    navigate('/patternlist'); 
  }


  return (
    <div className="home-container">
      <h1>Welcome to Game of Life</h1>
      <div className="form-container">
        <div className="form-wrapper">
          <h2>Register</h2>
          <Register onSuccess={handleRegisterSuccess} />

        </div>
        <div className="form-wrapper">
          <h2>Login</h2>
          <Login onSuccess={handleLoginSuccess} />
        </div>
      </div>
    </div>
  );
};

export default Home;
