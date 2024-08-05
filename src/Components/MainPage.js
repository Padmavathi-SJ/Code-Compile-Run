import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserMainPage from './User/UserMainPage';
import AdminMainPage from './Admin/AdminMainPage';
import LoginPage from './LoginPage';

const MainPage = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (isAdminUser) => {
        setIsAdmin(isAdminUser);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
    };

    return (
        <Routes>
            <Route 
                path="/" 
                element={isLoggedIn 
                    ? <Navigate to={isAdmin ? "/Admin/Dashboard" : "/User/Dashboard"} /> 
                    : <LoginPage onLogin={handleLogin} />
                } 
            />
            <Route path="/User/*" element={isLoggedIn ? <UserMainPage onLogout={handleLogout} /> : <Navigate to="/" />} />
            <Route path="/Admin/*" element={isLoggedIn && isAdmin ? <AdminMainPage onLogout={handleLogout} /> : <Navigate to="/" />} />
        </Routes>
    );
};

export default MainPage;
