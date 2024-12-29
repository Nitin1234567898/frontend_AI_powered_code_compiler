import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from './components/Navbar';
import CodeEditor from './components/Codeeditor';
import Chatbox from "./components/Chatbox";
function App() {
  const [darkMode, setDarkMode] = useState(false); // Manage dark mode state for the app

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      {/* Navbar Component */}
      <Navbar title="CodeX" darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className={`container-fluid p-0 ${darkMode ? 'text-white' : 'text-dark'}`} style={{ height: '100vh', overflow: 'hidden' }}>
        <div className="row h-100">
          {/* Left Section: Code Editor */}
          <div className="col-lg-7 col-md-12 d-flex flex-column h-100">
            <div className="flex-grow-1">
              <CodeEditor darkMode={darkMode} />
            </div>

            {/* Input Section */}
            <div className={`input-box mt-3 ${darkMode ? 'bg-dark text-white' : ''}`}>
              <h5>Input</h5>
              <textarea
                id="code-input"
                className={`form-control ${darkMode ? 'bg-dark text-white' : ''}`}
                placeholder="Enter your input for the code here..."
                rows="5"
              ></textarea>
            </div>
          </div>

          {/* Right Section: Chatbox and Output */}
          <div className="col-lg-5 col-md-12 d-flex flex-column h-100">
            <div className="flex-grow-1">
              <Chatbox darkMode={darkMode} />
            </div>

            {/* Dedicated Output Section */}
            <div className={`output-section mt-3 ${darkMode ? 'bg-dark text-white' : ''}`} style={{ flex: '0 1 200px' }}>
              <h5>Output</h5>
              <pre id="output" className={`output-box ${darkMode ? 'bg-dark text-white' : ''}`}>
                {/* Static output text can be placed here */}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
