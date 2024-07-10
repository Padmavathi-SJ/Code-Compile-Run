import React from 'react';
import './App.css';
import Home from './Components/Home';

const App = () => {
  return (
  <div>
    <Home />

  </div>
  )
}

export default App;



/* import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />}
      />
        <Route path="/" element={
          isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
    <div>
      <Home />
    </div>
  );
}

export default App;
*/