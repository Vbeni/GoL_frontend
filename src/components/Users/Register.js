import React, { useState } from 'react';

const Register = ({ onSuccess }) => {
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Create the user object
    const user = {
      username: username,
      password: password,
    };

    // Send a POST request to your backend API
    fetch('http://localhost:8000/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        // Registration successful
        onSuccess(username);
      })
      .catch((error) => {
        // Handle the error if registration fails
        console.error(error);
      });
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div>
      {!showForm ? (
        <button onClick={() => setShowForm(true)}>Register</button>
      ) : (
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default Register;
