// src/pages/Problems.js
import React from 'react';
import Navbar from './Navbar';
import '../css/Assesment.css';

const Assesment = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <div className='content'>
                <h2>Assesment Page</h2>
                <p>This is the Assesment content area.</p>
            </div>
        </div>
    );
};

export default Assesment;
