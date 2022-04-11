import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const getCurrentTime = () => {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
  }
  
  const [time, setTime] = useState(getCurrentTime());
  
  setInterval(() => {
    setTime(getCurrentTime());
  }, 1000);

  return (
    <div className="App">
      <div>
        <p>Hello User</p>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default App;
