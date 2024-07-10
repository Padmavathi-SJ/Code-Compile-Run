import React, { useState } from 'react';
import '../Styles/Home.css';

const Home = () => {
  const [language, setLanguage] = useState('python');
  
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  }
  return (
    <div className='container'>
      <div className='column left'>
        <h1>Problem Statement</h1>
        <p>Here goes the description of the problem...</p>
        <p>More content to demonstrate scrolling...</p>
        <p>More content to demonstrate scrolling...</p>
        <p>More content to demonstrate scrolling...</p>
        <p>More content to demonstrate scrolling...</p>
      </div>
      <div className='column right'>
        <div className='editor-container'>
          <div className='toolbar'>
            <label htmlFor="language">Select Language:</label>
            <select id="language" value={language} onChange={handleLanguageChange}>
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
            </select>
          </div>
          <textarea className='editor' placeholder={`Write your ${language} code here...`} wrap="soft"></textarea>
          <div className='input-container'>
            <h3>Custom Input:</h3>
            <div className='output-box'></div>
          </div>
          <div className='testcases-container'>
            <h3>Test Cases:</h3>
            <div className='testcases-box'>
              <p>Status: </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
