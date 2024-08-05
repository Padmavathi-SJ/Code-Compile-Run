// src/pages/Problems.js
import React from 'react';
import Navbar from '../UserNavbar';
import '../../../css/User/Problems.css';
import ProblemsMainPage from './ProblemsMainPage';
import {Routes, Route} from 'react-router-dom';
import CProblemList from './CProblemList';
import JavaProblemList from './JavaProblemList';
import PythonProblemList from './PythonProblemList';

const Problems = ({onLogout}) => {
    return (
        <div className='home-container'>
            <Navbar onLogout={onLogout}/>
            <div className='content'>
                <Routes>
                    <Route path="/" element={ <ProblemsMainPage /> } />
                    <Route path="CProblemList" element={ <CProblemList /> } />
                    <Route path="JavaProblemList" element={ <JavaProblemList /> } />
                    <Route path="PythonProblemList" element={ <PythonProblemList /> } />
                </Routes>
            </div>
        </div>
    );
};

export default Problems;
