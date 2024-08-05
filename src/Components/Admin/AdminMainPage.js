import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import QuestionsPost from './QuestionsPost';
import SolutionPost from './SolutionPost';

const AdminMainPage = ({ onLogout }) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/Admin/Dashboard" />} />
            <Route path="/Dashboard" element={<Dashboard onLogout={onLogout}/>} />
            <Route path="/QuestionsPost" element={<QuestionsPost onLogout={onLogout}/>} />
            <Route path="/SolutionPost" element={<SolutionPost onLogout={onLogout} />} />
        </Routes>
    );
};

export default AdminMainPage;
