import React from 'react';
import { useNavigate } from 'react-router-dom';
import Register from '../components/Users/Register';
import Login from '../components/Users/Login';
import Logout from '../components/Users/Logout';

const Home = ({ isLoggedIn, onLoginSuccess, onLogoutSuccess }) => {
    const navigate = useNavigate();

    const handleRegisterSuccess = (username) => {
      onLoginSuccess(username);
      navigate('/patternlist'); 
    };
  
    const handleLoginSuccess = (username) => {
      onLoginSuccess(username);
      navigate('/patternlist');
    };
  
    return (
      <div className="home-container">
        <h1>Welcome to Game of Life</h1>
        {isLoggedIn ? (
          <div>
            <p>Thanks for logging in! </p>
            <Logout onSuccess={onLogoutSuccess} />
          </div>
        ) : (
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
        )}
      </div>
    );
  };
  

export default Home;
