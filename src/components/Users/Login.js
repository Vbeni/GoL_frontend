import React, { useState } from 'react';

const Login = ({ onSuccess }) => {
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const handleLogin = (event) => {
  event.preventDefault(); 

  // Fake login logic
  const username = event.target.username.value;
  localStorage.setItem('username', username);

  // Pass username to parent component
  onSuccess(username);
};


    fetch('http://localhost:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        // Login successful
        onSuccess(username);
      })
      .catch((error) => {
        // Handle the error if login fails
        console.error(error);
      });
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div>
      {!showForm ? (
        <button onClick={() => setShowForm(true)}>Login</button>
      ) : (
        <form onSubmit={handleLogin}>
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

export default Login;
