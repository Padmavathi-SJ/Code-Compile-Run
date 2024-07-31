import React from 'react';
import '../../css/CProblem.css';
import { Link } from 'react-router-dom';

const CProblem = () => {
    return (
        <div className='main-container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Problem</th>
                        <th>Submission</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>26.05.2024</td>
                        <td><Link to="/Compiler">Short content Medium lengthMedium length</Link></td>
                        <td>padma.c</td>
                    </tr>
                    <tr>
                        <td>26.05.2024</td>
                        <td>Short content Medium lengthMedium length</td>
                        <td>padma.c</td>
                    </tr>
                    <tr>
                        <td>26.05.2024</td>
                        <td>Short content Medium lengthMedium length</td>
                        <td>padma.c</td>
                    </tr>
                    <tr>
                        <td>26.05.2024</td>
                        <td>Short content Medium lengthMedium length</td>
                        <td>padma.c</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CProblem;
