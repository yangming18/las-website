import { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);

  // This function runs when you click the button
  const handleAnalyze = () => {
    // This is a placeholder. Later, we will connect your Python backend here.
    if (inputText.length > 0) {
      setResult(`Analyzed: "${inputText.substring(0, 20)}..." (Model output will go here)`);
    } else {
      setResult("Please enter text to analyze.");
    }
  };

  return (
    <div className="App">
      <header style={{ marginBottom: '30px' }}>
        <h1>LAS World Languages</h1>
        <p style={{ fontSize: '1.2em', color: '#555' }}>
          AI-Powered Language Analysis Tool
        </p>
      </header>
      
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
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
            fontFamily: 'Arial, sans-serif'
          }}
        />

        <div style={{ marginTop: '20px' }}>
          <button 
            onClick={handleAnalyze}
            style={{ 
              padding: '10px 20px', 
              fontSize: '16px', 
              cursor: 'pointer',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Run Analysis
          </button>
        </div>

        {/* Results Section */}
        {result && (
          <div style={{ 
            marginTop: '30px', 
            padding: '20px', 
            backgroundColor: '#f9f9f9', 
            borderRadius: '8px',
            textAlign: 'left',
            borderLeft: '5px solid #007bff'
          }}>
            <strong>Result:</strong>
            <p style={{ marginTop: '5px' }}>{result}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App