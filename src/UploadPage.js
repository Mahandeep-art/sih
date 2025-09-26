import React, { useState } from 'react';

const UploadPage = ({ onLogout }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage('');
  };

  const handleUpload = () => {
    if (file) {
      // --- Simulate File Upload ---
      setMessage(`File "${file.name}" uploaded successfully! (Simulation)`);
      setFile(null); // Clear file input
      // In a real app, you would use 'fetch' or 'axios' to send 'file' to a server.
    } else {
      setMessage('Please select a file first.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '5px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>File Upload Page</h2>
        <button onClick={onLogout} style={{ padding: '8px 12px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
      <hr />
      
      <input type="file" onChange={handleFileChange} style={{ margin: '20px 0' }} />
      <button onClick={handleUpload} disabled={!file} style={{ padding: '10px 15px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>
        Upload File
      </button>

      {message && <p style={{ marginTop: '20px', color: message.includes('successfully') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
};

export default UploadPage;