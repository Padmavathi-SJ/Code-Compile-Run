// src/pages/OnGoing.js
import React from 'react';
import '../../css/AssesmentMain.css';
import { Link } from 'react-router-dom';

const AssesmentMain = () => {
  return (
    <div className='main-container'>
      
      <div className='ongoing-container' style={{ cursor: 'pointer' }}>
        <Link to="/Assesment/CProblem">
        <img src="./images/C-program.png" alt="CProgram" className='ongoing-image' />
        </Link>
        <div className='ongoing-text'>
          C Programming
        </div>
      </div>

      <div className='ongoing-container' style={{ cursor: 'pointer' }}>
        <Link to="/Assesment/JavaProblem">
        <img src="./images/C-program.png" alt="JavaProgram" className='ongoing-image' />
        </Link>
        <div className='ongoing-text'>
          Java Programming
        </div>
      </div>

      <div className='ongoing-container' style={{ cursor: 'pointer' }}>
        <Link to="/Assesment/PythonProblem">
        <img src="./images/C-program.png" alt="PythonProgram" className='ongoing-image' />
        </Link>
        <div className='ongoing-text'>
          Python Programming
        </div>
      </div>

    </div>
  );
};

export default AssesmentMain;
