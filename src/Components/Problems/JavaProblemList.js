import React from 'react';
import '../../css/JavaProblemsList.css';

const JavaProblemList = () => {
  return (
    <div className='main-container'> 
    <table className='table'>
        <thead>
            <tr>
                <th>Status</th>
                <th>Problem</th>
                <th>Submission</th>
                <th>Solution</th>
            </tr>
        </thead>

        <tbody>
            
            <tr>
                <td>Completed</td>
                <td>Short content Medium lengthMedium length</td>
                <td>padma.java</td>
                <td>Sol.java</td>
            </tr>

            <tr>
                <td>Not Completed</td>
                <td>Short content Medium lengthMedium length</td>
                <td>--------</td>
                <td>Sol.java</td>
            </tr>


        </tbody>

    </table>
    </div>
  )
}

export default JavaProblemList