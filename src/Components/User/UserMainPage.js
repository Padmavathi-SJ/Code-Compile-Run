import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import Assesment from './Assesment/Assesment';
import Problems from './Problems/Problems';
import Navbar from './UserNavbar';

const UserMainPage = ({ onLogout }) => {
    const location = useLocation();
    const showNavbar = !location.pathname.includes('/Assesment/Compiler');

    return (
        <div className="user-main-page">
            {showNavbar && <Navbar onLogout={onLogout} />}
            <div className="content">
                <Routes>
                    <Route path="/" element={<Navigate to="/User/Dashboard" />} />
                    <Route path="/Dashboard" element={<Dashboard onLogout={onLogout} />} />
                    <Route path="/Assesment/*" element={<Assesment onLogout={onLogout} />} />
                    <Route path="/Problems/*" element={<Problems onLogout={onLogout} />} />
                    <Route path="*" element={<Navigate to="/User/Dashboard" />} />
                </Routes>
            </div>
        </div>
    );
};

export default UserMainPage;
