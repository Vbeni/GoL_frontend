import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CreatePattern from '../components/Patterns/CreatePattern';

//Header component with 3 props
const Header = ({ showCreate, setShowCreate, onNewPattern, loggedInUser }) => {
  //current url to set specific links in header
  const location = useLocation();

  //conditionally renders showCreate if on /patternlist
  return (
    <header className="header">
      <h1>
        <Link to="/" className="home-link">Game Of Life</Link>
      </h1>
      <nav className="nav">
      {loggedInUser && <span>Welcome, {loggedInUser}!</span>}
        {loggedInUser && location.pathname !== '/patternlist' &&
          <Link to="/patternlist" className="nav-link">Pattern List</Link>
        }
        <Link to="/game" className="nav-link">Play Game</Link>
      </nav>
      {loggedInUser && location.pathname === '/patternlist' &&
        <div className="form-container">
          <button onClick={() => setShowCreate(!showCreate)} className="nav-button">Create Pattern</button>
          {showCreate && <CreatePattern afterSubmit={() => {setShowCreate(false); onNewPattern();}} />}
        </div>
      }
    </header>
  );
};

export default Header;
