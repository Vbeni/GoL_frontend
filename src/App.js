import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatternList from './pages/PatternList';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleNewPattern = () => { 
    //updates refresh key var when pattern is created 
    setRefreshKey(oldKey => oldKey + 1);
  };

  //PatternList has refreshkey as prop so PL can refresh on key changes
  return (
    <Router>
      <div className="App">
        <Header showCreate={showCreate} setShowCreate={setShowCreate} onNewPattern={handleNewPattern} />
        <Routes>
          <Route path="/patternlist" element={<PatternList refreshKey={refreshKey} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
