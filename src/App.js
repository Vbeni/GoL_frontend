import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatternList from './pages/PatternList';
import Home from './pages/Home';
import Header from './components/Header';
import Game from './pages/Game';
import Footer from './components/Footer';
import './App.css';


const App = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNewPattern = () => { 
    //updates refresh key var when pattern is created 
    setRefreshKey(oldKey => oldKey + 1);
  };

  const handleSuccessfulLogin = (username) => {
    setLoggedInUser(username);
    setIsLoggedIn(true);
  };

  const handleSuccessfulLogout = () => {
    setLoggedInUser(null);
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        <Header showCreate={showCreate} setShowCreate={setShowCreate} onNewPattern={handleNewPattern} loggedInUser={loggedInUser}/>
        <Routes>
          <Route path="/home" element={<Home isLoggedIn={isLoggedIn} onLoginSuccess={handleSuccessfulLogin} onLogoutSuccess={handleSuccessfulLogout} />} />
          <Route path="/patternlist" element={<PatternList refreshKey={refreshKey} />} />
          <Route path="/" element={<Game loggedInUser={loggedInUser} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;