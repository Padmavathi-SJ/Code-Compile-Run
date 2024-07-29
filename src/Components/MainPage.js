// src/pages/MainPage.js
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import Assesment from './Assesment/Assesment'; // Correct the typo
import Problems from './Problems/Problems';

const MainPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard onLogout={handleLogout}/> : <Navigate to="/" />} />
            <Route path="/assesment" element={isLoggedIn ? <Assesment onLogout={handleLogout}/> : <Navigate to="/" />} />
            <Route path="/problems" element={isLoggedIn ? <Problems onLogout={handleLogout} /> : <Navigate to="/" />} />
        </Routes>
    );
};

export default MainPage;
