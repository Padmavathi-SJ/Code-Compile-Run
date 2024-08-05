// src/pages/User/Dashboard.js
import React from 'react';
import Navbar from './UserNavbar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../css/User/Dashboard.css';

const Dashboard = ({ onLogout }) => {
    const progressData = [
        { subject: 'C Programming', progress: 55, total: 60 },
        { subject: 'Java Programming', progress: 45, total: 50 },
        { subject: 'Python Programming', progress: 30, total: 40 }
    ];

    return (
        <div className='Sidebar'>
            <Navbar onLogout={onLogout} />
            <div className='dashboard-content'>
                <h2>Welcome Student!</h2>
                <div className='progress-container'>
                    {progressData.map((data, index) => (
                        <div className='progress-item' key={index}>
                            <CircularProgressbar
                                value={(data.progress / data.total) * 100}
                                text={`${data.progress}/${data.total}`}
                                styles={buildStyles({
                                    textColor: '#fff',
                                    pathColor: '#00bcd4',
                                    trailColor: '#eee',
                                })}
                            />
                            <div className='subject-name'>{data.subject}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
