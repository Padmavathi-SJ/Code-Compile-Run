// src/pages/Dashboard.js
import React from 'react';
import Navbar from './Navbar';
import '../css/Dashboard.css';

const Dashboard = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <div className='content'>
                <h2>Welcome to My App</h2>
                <p>This is the main content area.</p>
            </div>
        </div>
    );
};

export default Dashboard;
