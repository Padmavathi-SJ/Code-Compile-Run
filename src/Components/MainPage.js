// src/pages/MainPage.js
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import Assesment from './Assesment'; // Correct the typo
import Problems from './Problems';

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
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/assesment" element={isLoggedIn ? <Assesment /> : <Navigate to="/" />} />
            <Route path="/problems" element={isLoggedIn ? <Problems /> : <Navigate to="/" />} />
        </Routes>
    );
};

export default MainPage;
