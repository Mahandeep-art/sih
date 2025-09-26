import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UploadPage from './UploadPage';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from './LoginPage';

function App() {
  // Simple state to track authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // In a real application, you would store a token here (e.g., in localStorage)
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Clear any stored tokens or session data
  };

  return (
    <Router>
      <div style={{ textAlign: 'center' }}>
        <h1>React Login & Upload Demo</h1>
        <Routes>
          {/* Public Route: Login Page */}
          <Route 
            path="/" 
            element={
              <LoginPage 
                onLoginSuccess={handleLoginSuccess} 
              />
            } 
          />
          
          {/* Protected Route: Upload Page */}
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route 
              path="/upload" 
              element={
                <UploadPage 
                  onLogout={handleLogout} 
                />
              } 
            />
          </Route>

          {/* Fallback for 404 */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;