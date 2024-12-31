import logo from './logo.svg';
import './App.css';

import GroupMembers from "./GroupMembers";
import UserCard from './UserCard';
import React, { useState } from "react";

function App() {
   const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>welcome to this page</h1>
      <GroupMembers />
      <h1>User card </h1>

      <UserCard name="yadiel" age={20} email="yadieldaniel2119@gmail.com" />
      <h1>Counter Application</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
