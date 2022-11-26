import React, { ReactElement } from 'react';
import logo from './logo.svg';

import './App.css';


function App(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo"
          className="App-logo"
          src={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
