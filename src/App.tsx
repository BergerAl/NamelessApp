import React, { useState } from 'react';
import './css/App.css';
import InitPage from './pages/InitPage';
import ChatRoomsPage from './pages/ChatRoomsPage';
import socket from './functions/socket'
import Modal from 'react-modal';

const client = socket();
Modal.setAppElement('#root')

export default function App() {

  const [modalIsOpen, setIsOpen] = useState(true);
  const [textFieldInput, setFieldInput] = useState("");
  const [chatRoomList, setListRooms] = useState([""]);

  function closeModal() {
    client.listRooms(chatRoomList, setListRooms);
    setIsOpen(false);
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
        </header>
        <Modal
          className="App-modal"
          overlayClassName="App-overlay"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="LoginPage">
          <InitPage textFieldInput={textFieldInput} setFieldInput={setFieldInput} sendUserName={client.setName} setModalOpen={closeModal} />
        </Modal>
        <ChatRoomsPage listChatRooms={chatRoomList} joinChatRoom={client.joinRoom} />
      </div>
    </>
  );
}
