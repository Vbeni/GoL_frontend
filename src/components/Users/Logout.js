import React from 'react';

const Logout = ({ onSuccess }) => {

  const handleLogout = () => {
    onSuccess();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
