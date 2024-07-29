import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from '../Navbar';
import '../../css/Assesment.css';
import CProblem from './CProblem';
import JavaProblem from './JavaProblem';
import PythonProblem from './PythonProblem';
import AssesmentMain from './AssesmentMain';


const Assesment = ({onLogout}) => {
    return (
        <div className='home-container'>
            <Navbar onLogout={onLogout}/>
            <div className='content'>
            </div>

            <Routes>
                    <Route path="/" element={ <AssesmentMain /> } />
                    <Route path="/Assesment/CProblem" element={ <CProblem /> } />
                    <Route path="/Assesment/JavaProblem" element={ <JavaProblem /> } />
                    <Route path="/Assesment/PythonProblem" element={ <PythonProblem /> } />
                </Routes>
        </div>
    );
};

export default Assesment;



