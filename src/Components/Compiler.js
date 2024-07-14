import React, { useState } from 'react';
import '../css/Compiler.css';

const Compiler = () => {
  const [language, setLanguage] = useState('python');
  const [customInput, setCustomInput] = useState('');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  }

  const handleCustomInputChange = (e) => {
    setCustomInput(e.target.value);
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
        <p>More content to demonstrate scrolling...</p>
        <p>More content to demonstrate scrolling...</p>
        <div className='testcase-container'>
        <div className='testcases-container'>
          <h3 className='testcase-text'>Test Cases-1</h3>
        </div>
        <div className='testcases-container'>
          <h3 className='testcase-text'>Test Cases-2</h3>
        </div>
        <div className='testcases-container'>
          <h3 className='testcase-text'>Test Cases-3</h3>
        </div>
        <div className='testcases-container'>
          <h3 className='testcase-text'>Test Cases-4</h3>
        </div>
        <div className='testcases-container'>
          <h3 className='testcase-text'>Test Cases-5</h3>
        </div>
        <div className='testcases-container'>
          <h3 className='testcase-text'>Test Cases-6</h3>
        </div>
      </div>
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
            <textarea
              className='input-box'
              value={customInput}
              onChange={handleCustomInputChange}
              placeholder='Enter your input'
              wrap="soft"
            />
          </div>
          <div className='output-container'>
            <h3>Output</h3>
          <div className='output-box'></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Compiler;
