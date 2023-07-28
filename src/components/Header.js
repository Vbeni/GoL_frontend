import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CreatePattern from '../components/Patterns/CreatePattern';
import '../../src/styles/Header.css'
//Header component with 4 props:
// - showCreate: A boolean to decide whether the CreatePattern component should be shown or not.
// - setShowCreate: A function to toggle the visibility of CreatePattern.
// - onNewPattern: A function that's likely being passed down to handle some logic when a new pattern is created.
// - loggedInUser: The current logged-in user's name
const Header = ({ showCreate, setShowCreate, onNewPattern, loggedInUser }) => {
  // hook provides info about the current URL
  const location = useLocation();

  //conditionally renders showCreate if on /patternlist
  return (
    <header className="header">
      <h1>
        <Link to="/home" className="home-link">Game Of Life</Link>
      </h1>
      <nav className="nav">
      {loggedInUser && <span>Welcome, {loggedInUser}!</span>}
      {loggedInUser && location.pathname !== '/patternlist' &&
        <Link to="/patternlist" className="nav-link">Pattern List</Link>
      }
      <Link to="/" className="nav-link">Play Game</Link>
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
