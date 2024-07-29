// src/pages/Problems.js
import React from 'react';
import Navbar from '../Navbar';
import '../../css/Problems.css';
import ProblemsMainPage from '../Problems/ProblemsMainPage';
import {Routes, Route} from 'react-router-dom';
import CProgram from './C';
import JavaProgram from './Java';
import PythonProgram from './Python';

const Problems = ({onLogout}) => {
    return (
        <div className='home-container'>
            <Navbar onLogout={onLogout}/>
            <div className='content'>
                <Routes>
                    <Route path="/" element={ <ProblemsMainPage /> } />
                    <Route path="/Problems/C" element={ <CProgram /> } />
                    <Route path="/Problems/Java" element={ <JavaProgram /> } />
                    <Route path="/Problems/Python" element={ <PythonProgram /> } />
                </Routes>
            </div>
        </div>
    );
};

export default Problems;
