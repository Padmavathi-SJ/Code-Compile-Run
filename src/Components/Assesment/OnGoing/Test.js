// src/pages/Test.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/Test.css';

const Test = () => {
  return (
    <div className='main-container'>
      <table className='table'>
        <thead>
          <tr>
            <th style={{ width: '150px' }}>Date</th>
            <th>Problem</th>
            <th style={{ width: '150px' }}>Submission</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>26-07-2024</td>
            <td>
              <Link to="/compiler">
               Short content Medium lengthMedium length
              </Link>
            </td>
            <td>Pamda.c</td>
          </tr>

          <tr>
            <td>26-07-2024</td>
            <td>
              <Link to="/compiler">
               Short content Medium lengthMedium length
              </Link>
            </td>
            <td>Pamda.c</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};

export default Test;
