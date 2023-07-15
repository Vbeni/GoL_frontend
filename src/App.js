import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatternList from './pages/PatternList';
import Home from './pages/Home';
import Header from './components/Header';
import Login from './components/Users/Login';
import './App.css';

const App = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleNewPattern = () => { 
    //updates refresh key var when pattern is created 
    setRefreshKey(oldKey => oldKey + 1);
  };

  const handleSuccessfulLogin = (username) => {
    setLoggedInUser(username);
  }

  //PatternList has refreshkey as prop so PL can refresh on key changes
  return (
    <Router>
      <div className="App">
        <Header showCreate={showCreate} setShowCreate={setShowCreate} onNewPattern={handleNewPattern} loggedInUser={loggedInUser}/>
        <Routes>
          <Route path="/" element={<Home onLoginSuccess={handleSuccessfulLogin} />} />
          <Route path="/patternlist" element={<PatternList refreshKey={refreshKey} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
