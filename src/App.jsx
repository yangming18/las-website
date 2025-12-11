import { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    if (inputText.length > 0) {
      setResult(`Analyzed: "${inputText.substring(0, 20)}..." (Model output will go here)`);
    } else {
      setResult("Please enter text to analyze.");
    }
  };

  return (
    <div className="App">
      {/* --- HEADER SECTION --- */}
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1>LAS World Languages</h1>
        <p style={{ fontSize: '1.2em', color: '#666' }}>
          AI-Powered Language Analysis Tool
        </p>
      </header>
      
      {/* --- INTERACTIVE TOOL SECTION --- */}
      <div className="card" style={{ maxWidth: '700px', margin: '0 auto 50px auto' }}>
        <textarea 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text here for analysis..."
          rows={6}
          style={{ 
            width: '100%', 
            padding: '15px', 
            fontSize: '16px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            marginBottom: '10px'
          }}
        />
        <button onClick={handleAnalyze}>Run Analysis</button>
        
        {result && (
          <div style={{ marginTop: '20px', padding: '15px', background: '#f0f9ff', borderRadius: '5px' }}>
            <strong>Result:</strong> {result}
          </div>
        )}
      </div>

      {/* --- NEW INTRODUCTION SECTION --- */}
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', lineHeight: '1.6' }}>
        <hr style={{ margin: '40px 0', border: '1px solid #eee' }} />
        
        <h2>About the Project</h2>
        <p>
          The LAS (Language Analysis System) project is designed to help researchers identify LLM lexical biases.
        </p>

        <h3>1. Project Goals</h3>
        <ul>
          <li>Identify lexical biases in LLM generations.</li>
        </ul>

        <h3>2. Methodology</h3>
        <p>
          We use LAS score to quantify this bias.
        </p>

        <h3>3. Future Work</h3>
        <p>
          In the next phase, we plan to integrate support for 35 additional languages.
        </p>
      </div>

    </div>
  )
}

export default App