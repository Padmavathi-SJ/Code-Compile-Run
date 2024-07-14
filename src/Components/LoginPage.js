import React from 'react';
import '../css/LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <div className='body'>
      <div className='container'>
        <img src="./images/BIT logo.jpeg" alt="logo" className='logo' />
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <label htmlFor='email'>Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className='input-container'>
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
