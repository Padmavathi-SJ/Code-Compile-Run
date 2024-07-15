// src/pages/Test.js
import React from 'react';
import '../../css/Test.css';

const Test = () => {
  return (
    <div className='main-container'>
      <table className='table'>
        <thead>
          <tr>
            <th style={{ width: '150px' }}>Status</th>
            <th>Problem</th>
            <th style={{ width: '150px' }}>Submission</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Completed</td>
            <td>Short content Medium lengthMedium length</td>
            <td>Pamda.c</td>
          </tr>
          <tr>
            <td>Completed</td>
            <td>Short content Medium lengthMedium length</td>
            <td>Pamda.c</td>
          </tr>
          <tr>
            <td>Completed</td>
            <td>Short content Medium lengthMedium length</td>
            <td>Pamda.c</td>
          </tr>
          <tr>
            <td>Completed</td>
            <td>Short content Medium lengthMedium length</td>
            <td>Pamda.c</td>
          </tr>
          <tr>
            <td>Completed</td>
            <td>Short content Medium lengthMedium length</td>
            <td>Pamda.c </td>
          </tr>
          <tr>
            <td>Completed</td>
            <td>Short content Medium lengthMedium length</td>
            <td>Pamda.c</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Test;
