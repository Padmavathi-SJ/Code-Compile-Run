import React from 'react';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='sidebar'>
        <div className='logo'>
          <img src='./images/BIT logo org.png' alt='Logo' className='logo-image' />
          <h1 className='logo-text'>Compile-Run</h1>
        </div>
        <nav className='navigation'>
          <ul className='nav-list'>
            <li className='nav-item'><a href='#home' className='nav-link'>Home</a></li>
            <li className='nav-item'><a href='#profile' className='nav-link'>Profile</a></li>
            <li className='nav-item'><a href='#settings' className='nav-link'>Settings</a></li>
            <li className='nav-item'><a href='#help' className='nav-link'>Help</a></li>
            <li className='nav-item logout'><button className='logout-button'>Logout</button></li>
          </ul>
        </nav>
      </div>
      <div className='content'>
        <h2>Welcome to My App</h2>
        <p>This is the main content area.</p>
      </div>
      </div>
  );
}

export default Home;
