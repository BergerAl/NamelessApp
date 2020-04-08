import React, { useState } from 'react';
import './css/App.css';
import InitPage from './pages/InitPage';
import socket from './functions/socket'
import Modal from 'react-modal';

const client = socket();
Modal.setAppElement('#root')

export default function App() {

  const [modalIsOpen, setIsOpen] = useState(true);
  const [textFieldInput, setFieldInput] = useState("");

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    //TODO what happens after Model; Set color for example
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="App"></div>
      <header className="App-header">
      </header>
      <Modal
        className="App-modal"
        overlayClassName="App-overlay"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal">
        <InitPage textFieldInput={textFieldInput} setFieldInput={setFieldInput} sendMessage={client.newMessage}></InitPage>
      </Modal>
    </>
  );
}
