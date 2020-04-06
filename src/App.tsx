import React, { useState } from 'react';
import './css/App.css';
import InitPage from './pages/InitPage';
import socket from './functions/socket'

const client = socket();

export default function App() {

  const [textFieldInput, setFieldInput] = useState("");
  return (
    <>
      <div className="App"></div>
      <header className="App-header">
      </header>
      <InitPage textFieldInput={textFieldInput} setFieldInput={setFieldInput} sendMessage={client.newMessage}></InitPage>
    </>
  );
}
