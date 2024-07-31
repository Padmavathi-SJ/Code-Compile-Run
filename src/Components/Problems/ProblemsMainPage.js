import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ProblemsMainPage.css';


const ProblemsMainPage = () =>  {
  return (
    <div className='main-container'>

    <div className='ongoing-container'  style={{ cursor: 'pointer' }}>
      <Link to="CProblemList">
      <img src="./images/C-program.png" alt="C Problems" className='ongoing-image' />
      </Link>
      <div className='ongoing-text'>
        C Programming
      </div>
    </div>

    <div className='ongoing-container' style={{ cursor: 'pointer' }}>
      <Link to="JavaProblemList">
      <img src="./images/C-program.png" alt="Java Problems" className='ongoing-image' />
      </Link>
      <div className='ongoing-text'>
        Java Programming
      </div>
    </div>

    <div className='ongoing-container' style={{ cursor: 'pointer' }}>
      <Link to="PythonProblemList">
      <img src="./images/C-program.png" alt="Python Problems" className='ongoing-image' />
      </Link>
      <div className='ongoing-text'>
        Python Programming
      </div>
    </div>

   
  </div>
  )
}


export default ProblemsMainPage;