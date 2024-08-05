import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../../css/User/Compiler.css';


const Compiler = () => {
  const { problemId } = useParams();
  const [language, setLanguage] = useState('.js');
  const [output, setOutput] = useState('');
  const [fileName, setFileName] = useState('');
  const [input, setInput] = useState('');
  const [code, setCode] = useState({
    '.js': '',
    '.py': '',
    '.java': '',
    '.cpp': '',
    '.c': ''
  });
  const [problemDetails, setProblemDetails] = useState({
    title: '',
    description: '',
    sampleTestCases: '',
    testCases: []
  });

  useEffect(() => {
    document.getElementById('editor').value = code[language];
  }, [language, code]);

  useEffect(() => {
    const fetchProblemDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/api/problems/${problemId}`);
        setProblemDetails(response.data);
      } catch (error) {
        console.error('Error fetching problem details:', error);
      }
    };

    fetchProblemDetails();
  }, [problemId]);

  const runCode = async () => {
    const currentCode = code[language];
    try {
      console.log('Posting data:', { language, code: currentCode, fileName, input });
      const response = await axios.post('http://localhost:3500/create', {
        language,
        code: currentCode,
        fileName,
        input
      });
      setOutput(response.data);
    } catch (error) {
      console.error('Error running code:', error.response || error.message);
      setOutput('Error running code.');
    }
  };

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
  };

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleCodeChange = (event) => {
    const newCode = event.target.value;
    setCode(prevCode => ({
      ...prevCode,
      [language]: newCode
    }));
  };

  return (
    <div className="container">
      <div className="left-half">
        <h2>{problemDetails.title}</h2>
        <p>{problemDetails.description}</p>
        <h3>Sample Test Cases</h3>
        <pre>{problemDetails.sampleTestCases}</pre>
        <h3>Test Cases</h3>
        <table>
          <thead>
            <tr>
              <th>Input</th>
              <th>Expected Output</th>
              <th>Actual Output</th>
              <th>Passed</th>
            </tr>
          </thead>
          <tbody>
            {problemDetails.testCases.map((testCase, index) => (
              <tr key={index}>
                <td>{testCase.inputs.join(', ')}</td>
                <td>{testCase.outputs.join(', ')}</td>
                <td>{/* Actual output will go here */}</td>
                <td>{/* Passed status will go here */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="right-half">
        <div className="top-bar">
          <input
            type="text"
            className="file-name-input"
            placeholder="File Name"
            value={fileName}
            onChange={handleFileNameChange}
          />
          <select
            className="language-dropdown"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value=".js">JavaScript</option>
            <option value=".py">Python</option>
            <option value=".java">Java</option>
            <option value=".cpp">C++</option>
            <option value=".c">C</option>
          </select>
          <button className="run-button" onClick={runCode}>
            Run Code
          </button>
        </div>
        <textarea
          id="editor"
          className="text-editor"
          placeholder="Type your code here..."
          onChange={handleCodeChange}
        ></textarea>
        <div className="input-output-container">
          <textarea
            className="input-area"
            placeholder="Type your input here..."
            value={input}
            onChange={handleInputChange}
          ></textarea>
          <div className="output-area">
            <pre>{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compiler;





/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../css/User/Compiler.css';

const Compiler = () => {
  const [language, setLanguage] = useState('python');
  const [customInput, setCustomInput] = useState('');
  const [problemDetails, setProblemDetails] = useState({
    title: '',
    description: '',
    sampleTestCases: '',
    testCases: []
  });

  useEffect(() => {
    const fetchProblemDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3500/api/problems/your-problem-id');
        setProblemDetails(response.data);
      } catch (error) {
        console.error('Error fetching problem details:', error);
      }
    };

    fetchProblemDetails();
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  }

  const handleCustomInputChange = (e) => {
    setCustomInput(e.target.value);
  }

  const containerStyle = {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    padding: '10px',
    outline: '2px solid #ccc',
    boxSizing: 'border-box'
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflowY: 'auto',
    overflowX: 'auto',
  };

  const leftColumnStyle = {
    ...columnStyle,
    borderRight: '1px solid #ccc',
  };

  const rightColumnStyle = columnStyle;

  const editorContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'auto',
  };

  const toolbarStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const editorStyle = {
    backgroundColor: 'black',
    color: 'white',
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '14px',
    overflowX: 'auto',
    overflowY: 'auto',
    whiteSpace: 'nowrap',
  };

  const inputOutputBoxStyle = {
    width: '100%',
    height: '70px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '5px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'monospace',
    overflowY: 'auto',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  };

  const testcaseContainerStyle = {
    marginTop: '10px',
  };

  const testcasesContainerStyle = {
    width: '85%',
    height: '10%',
    marginBottom: '10px',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
  };

  const testcaseTextStyle = {
    margin: '0',
  };

  return (
    <div style={containerStyle}>
      <div style={leftColumnStyle}>
        <h1>{problemDetails.title}</h1>
        <p>{problemDetails.description}</p>
        <h3>Sample Test Cases</h3>
        <pre>{problemDetails.sampleTestCases}</pre>
        <div style={testcaseContainerStyle}>
          {problemDetails.testCases.map((testCase, index) => (
            <div key={index} style={testcasesContainerStyle}>
              <h3 style={testcaseTextStyle}>Test Case {index + 1}</h3>
              <p><strong>Input:</strong> {testCase.inputs.join(', ')}</p>
              <p><strong>Expected Output:</strong> {testCase.outputs.join(', ')}</p>
              {}
            </div>
          ))}
        </div>
      </div>
      <div style={rightColumnStyle}>
        <div style={editorContainerStyle}>
          <div style={toolbarStyle}>
            <label htmlFor="language">Select Language:</label>
            <select id="language" value={language} onChange={handleLanguageChange}>
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
            </select>
          </div>
          <textarea 
            style={editorStyle} 
            placeholder={`Write your ${language} code here...`} 
            wrap="soft"
          ></textarea>
          <div className='input-container'>
            <h3>Custom Input:</h3>
            <textarea
              style={inputOutputBoxStyle}
              value={customInput}
              onChange={handleCustomInputChange}
              placeholder='Enter your input'
              wrap="soft"
            />
          </div>
          <div className='output-container'>
            <h3>Output</h3>
            <div style={inputOutputBoxStyle}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compiler;

*/