
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../css/Assesment.css';
import CProblem from './CProblem';
import JavaProblem from './JavaProblem';
import PythonProblem from './PythonProblem';
import AssesmentMain from './AssesmentMain';
import Compiler from './Compiler';

const Assesment = ({ onLogout }) => {
    return (
        <div className='home-container'>
            <Navbar onLogout={onLogout} />
            <div className='content'>
                <Routes>
                    <Route path="/" element={<AssesmentMain />} />
                    <Route path="CProblem" element={<CProblem />} />
                    <Route path="JavaProblem" element={<JavaProblem />} />
                    <Route path="PythonProblem" element={<PythonProblem />} />
                    <Route path="Compiler" element={ <Compiler />} />
                </Routes>
            </div>
        </div>
    );
};

export default Assesment;
