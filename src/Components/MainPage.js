// src/pages/MainPage.js
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import Assesment from './Assesment';
import Problems from './Problems';

const MainPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin= () => {
        setIsLoggedIn(true);
    };
    return (
            <Routes>
                <Route path="/" element={
                isLoggedIn ? <Navigate to="/dashboard" />
                : <LoginPage onLogin={handleLogin} />} />
                <Route path="/dashboard" element = {isLoggedIn ? <Dashboard /> : <Navigate to="/" />}/>
                <Route path="/assesment" component={Assesment} />
                <Route path="/problems" component={Problems} />
            </Routes>
    );
};

export default MainPage;
