import React, { useState } from 'react';
import './css/App.css';
import InitPage from './pages/InitPage';

export default function App() {

  const [randomNumber, setCount] = useState(0)

  return (
    <>
      <div className="App"></div>
      <header className="App-header">
      </header>
      <InitPage randomNumber={randomNumber} setCount={setCount}></InitPage>
    </>
  );
}
