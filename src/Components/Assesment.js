// src/pages/Assessment.js
import React from 'react';
import Navbar from './Navbar';
import '../css/Assesment.css';

const Assessment = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <div className='content'>
                <h2>Assessment Page</h2>
                <p>This is the assessment content area.</p>
            </div>
        </div>
    );
};

export default Assessment;
