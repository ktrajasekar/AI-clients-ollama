import React, { useState } from 'react';

function App() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAsk = async () => {
        if (!prompt.trim()) return;

        setLoading(true);
        setResponse('');

        const res = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'llama2', // change to your model name
                prompt: prompt,
                stream: false,
            }),
        });

        const data = await res.json();
        setResponse(data.response);
        setLoading(false);
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
            <h2>🧰 Electronic Repair Bot</h2>
            <textarea
                rows="4"
                style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
                placeholder="Describe your electronic issue..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <br />
            <button
                onClick={handleAsk}
                style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', fontSize: '1rem' }}
            >
                Ask
            </button>

            {loading && <p>⏳ Thinking...</p>}
            {response && (
                <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap' }}>
                    <strong>🔧 Response:</strong>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
}

export default App;