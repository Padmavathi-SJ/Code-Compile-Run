import React from 'react';
import '../../../css/User/AssesmentMain.css';
import { Link } from 'react-router-dom';

const AssesmentMain = () => {
    return (
        <div className='main-container'>
            <div className='header-container'>
                <h2>Welcome Student!</h2>
            </div>
            <div className='content-container'>
                <div className='ongoing-container' style={{ cursor: 'pointer' }}>
                    <Link to="CProblem">
                        <img src="/images/C-program.png" alt="CProgram" className='ongoing-image' />
                    </Link>
                    <div className='ongoing-text'>C Programming</div>
                </div>

                <div className='ongoing-container' style={{ cursor: 'pointer' }}>
                    <Link to="JavaProblem">
                        <img src="/images/Java-program.png" alt="JavaProgram" className='ongoing-image' />
                    </Link>
                    <div className='ongoing-text'>Java Programming</div>
                </div>

                <div className='ongoing-container' style={{ cursor: 'pointer' }}>
                    <Link to="PythonProblem">
                        <img src="/images/Python-program.png" alt="PythonProgram" className='ongoing-image' />
                    </Link>
                    <div className='ongoing-text'>Python Programming</div>
                </div>
            </div>
        </div>
    );
};

export default AssesmentMain;
