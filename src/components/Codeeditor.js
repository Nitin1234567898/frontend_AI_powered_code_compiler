// src/CodeEditor.js

import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState(
    `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!";\n    return 0;\n}`
  );
  const [output, setOutput] = useState("");

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleCompile = async () => {
    // Simulate compilation here, later connect this with a backend API
    setOutput(`Compiled Output: \n${code}`);
  };

  return (
    <div className="editor-container">
      <MonacoEditor
        height="450px"
        language="cpp"
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          selectOnLineNumbers: true,
        }}
      />
      <button
        className="btn btn-primary mt-3"
        onClick={handleCompile}
        style={{ width: "10%" }}
      >
        Run
      </button>
    </div>
  );
};

export default CodeEditor;
