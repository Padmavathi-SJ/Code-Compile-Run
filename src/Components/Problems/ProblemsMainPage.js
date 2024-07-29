import React, { useState } from 'react';
import C from '../Problems/C';
import Java from '../Problems/Java';
import Python from '../Problems/Python';


const ProblemsMainPage = () =>  {

    const [showTest, setShowTest] = useState(false);
  
    const handleNavigation = () => {
      setShowTest(true);
    };
  
    if (showTest) {
      return <C />;
    }

  return (
    <div className='main-container'>
    <h1>On Going</h1>

    <div className='ongoing-container' onClick={handleNavigation} style={{ cursor: 'pointer' }}>
      <img src="./images/C-program.png" alt="placeholder" className='ongoing-image' />
      <div className='ongoing-text'>
        C Programming
      </div>
    </div>

    <div className='ongoing-container' onClick={handleNavigation} style={{ cursor: 'pointer' }}>
      <img src="./images/C-program.png" alt="placeholder" className='ongoing-image' />
      <div className='ongoing-text'>
        Java Programming
      </div>
    </div>

    <div className='ongoing-container' onClick={handleNavigation} style={{ cursor: 'pointer' }}>
      <img src="./images/C-program.png" alt="placeholder" className='ongoing-image' />
      <div className='ongoing-text'>
        Python Programming
      </div>
    </div>

  </div>
  )
}

export default ProblemsMainPage;