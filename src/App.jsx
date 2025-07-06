// src/App.jsx
import React, { useState } from "react";
import { GoogleGenerativeAI } from '@google/generative-ai';


const genAI = new GoogleGenerativeAI('');


function App() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleClick = async () => {
    setLoading(true);
    setResponse('');

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(prompt);
      const text = await result.response.text();
      setResponse(text);
    } catch (err) {
      console.error(err);
      setResponse('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>Gemini AI</h2>
      <textarea
        rows="4"
        style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
        placeholder="Describe your electronic issue..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Thinking...' : 'Ask Gemini'}
      </button>
      <pre style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>{response}</pre>
    </div>
  );
}
export default App;
