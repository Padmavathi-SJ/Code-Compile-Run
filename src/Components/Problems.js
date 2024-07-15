// src/pages/Problems.js
import React from 'react';
import Navbar from './Navbar';
import '../css/Problems.css';

const Problems = ({onLogout}) => {
    return (
        <div className='home-container'>
            <Navbar onLogout={onLogout}/>
            <div className='content'>
                <h2>Problems Page</h2>
                <p>This is the problems content area.</p>
            </div>
        </div>
    );
};

export default Problems;
