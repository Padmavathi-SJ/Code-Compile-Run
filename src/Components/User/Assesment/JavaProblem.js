import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/User/JavaProblem.css';

const JavaProblem = () => {
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
                        <td><Link className='link-text' to="/User/Assesment/Compiler">Short content Medium lengthMedium length</Link></td>
                        <td>padma.java</td>
                    </tr>
                    <tr>
                        <td>26.05.2024</td>
                        <td><Link className='link-text' to="/User/Assesment/Compiler">Short content Medium lengthMedium length</Link></td>
                        <td>padma.java</td>
                    </tr>
                    <tr>
                        <td>26.05.2024</td>
                        <td><Link className='link-text' to="/User/Assesment/Compiler">Short content Medium lengthMedium length</Link></td>
                        <td>padma.java</td>
                    </tr>
                    <tr>
                        <td>26.05.2024</td>
                        <td><Link className='link-text' to="/User/Assesment/Compiler">Short content Medium lengthMedium length</Link></td>
                        <td>padma.java</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default JavaProblem;
