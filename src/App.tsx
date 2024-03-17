import React, { useEffect } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import QueryComponent from './components/QueryComponent';

function App() {
  useEffect(() => {
    document.title = "Conversational BOT"; // Set the title of the page
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Conversational BOT</h1>
      </header>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="content"> {/*Added this wrapper*/}
        <FileUpload />
        <QueryComponent />
      </div>
    </div>
  );
}

export default App;
