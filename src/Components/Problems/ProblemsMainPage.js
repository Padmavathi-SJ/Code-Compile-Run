import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ProblemsMainPage.css';


const ProblemsMainPage = () =>  {
  return (
    <div className='main-container'>

    <div className='ongoing-container'  style={{ cursor: 'pointer' }}>
      <Link to="/Problems/C">
      <img src="./images/C-program.png" alt="C Programming" className='ongoing-image' />
      </Link>
      <div className='ongoing-text'>
        C Programming
      </div>
    </div>

    <div className='ongoing-container' style={{ cursor: 'pointer' }}>
      <Link to="/Problems/Java">
      <img src="./images/C-program.png" alt="Java Programming" className='ongoing-image' />
      </Link>
      <div className='ongoing-text'>
        Java Programming
      </div>
    </div>

    <div className='ongoing-container' style={{ cursor: 'pointer' }}>
      <Link to="/Problems/Python">
      <img src="./images/C-program.png" alt="Python Programming" className='ongoing-image' />
      </Link>
      <div className='ongoing-text'>
        Python Programming
      </div>
    </div>

   
  </div>
  )
}


export default ProblemsMainPage;