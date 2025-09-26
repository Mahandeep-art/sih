import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // --- Simple Hardcoded Validation ---
    const correctUsername = 'user';
    const correctPassword = 'password';

    if (username === correctUsername && password === correctPassword) {
      // 1. Simulate setting a logged-in state (e.g., in App.jsx or global state)
      if (onLoginSuccess) {
        onLoginSuccess();
      }
      
      // 2. Redirect to the upload page
      navigate('/upload');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0' }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;