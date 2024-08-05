import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../../css/User/Assesment.css';
import CProblem from './CProblem';
import JavaProblem from './JavaProblem';
import PythonProblem from './PythonProblem';
import AssesmentMain from './AssesmentMain';
import Compiler from './Compiler';

const Assesment = ({ onLogout }) => {
    return (
        <div className='assesment-container'>
            <Routes>
                <Route path="/" element={<AssesmentMain />} />
                <Route path="CProblem" element={<CProblem />} />
                <Route path="JavaProblem" element={<JavaProblem />} />
                <Route path="PythonProblem" element={<PythonProblem />} />

                {/* Isolated Route without Navbar */}
                <Route path="Compiler" element={<Compiler />} />
            </Routes>
        </div>
    );
};

export default Assesment;
