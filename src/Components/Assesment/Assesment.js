// src/pages/Problems.js
import React from 'react';
import Navbar from '../Navbar';
import '../../css/Assesment.css';
import OnGoing from './OnGoing';

const Assesment = ({onLogout}) => {
    return (
        <div className='home-container'>
            <Navbar onLogout={onLogout}/>
            <div className='content'>
                <OnGoing />
            </div>
        </div>
    );
};

export default Assesment;
