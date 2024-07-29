// src/pages/Problems.js
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from '../Navbar';
import '../../css/Assesment.css';
import OnGoing from '../Assesment/OnGoing/OnGoing';
import Compiler from '../Assesment/OnGoing/Compiler';
import Test from '../Assesment/OnGoing/Test';

const Assesment = ({onLogout}) => {
    return (
        <div className='home-container'>
            <Navbar onLogout={onLogout}/>
            <div className='content'>
                <Routes>
                <Route path="/compiler" element={<Compiler />} />
                <Route path="/test" element={<Test />} />
                <Route path="/" element={<OnGoing />} />
                </Routes>
            </div>
        </div>
    );
};

export default Assesment;
