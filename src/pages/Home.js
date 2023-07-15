import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from '../components/Users/Register';
import Login from '../components/Users/Login';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

 // Navigate to PatternList page if logged in
  if (isLoggedIn) {
    navigate('/patternlist'); 
  }


  return (
    <div>
      <h1>Welcome to Game of Life</h1>
      <h2>Register</h2>
      <Register onSuccess={handleRegisterSuccess} />
      <h2>Login</h2>
      <Login onSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Home;
