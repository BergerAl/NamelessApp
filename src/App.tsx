import React, { useState } from 'react';
import './css/App.css';
import InitPage from './pages/InitPage';
import ChatRoomsPage from './pages/ChatRoomsPage';
import NavAppBar from './components/NavBar';
import socket from './functions/socket'
import Modal from 'react-modal';

const client = socket();
Modal.setAppElement('#root')

export default function App() {

  const [modalIsOpen, setIsOpen] = useState(true);
  const [userName, setUserName] = useState("");
  const [chatRoomList, setListRooms] = useState([""]);

  function closeModal() {
    client.listRooms(setListRooms);
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
          <InitPage textFieldInput={userName} setFieldInput={setUserName} sendUserName={client.setName} setModalOpen={closeModal} />
        </Modal>
        {<NavAppBar userName={userName} chatRoomList={chatRoomList} joinChatRoom={client.joinRoom}/>}
        {AppBody(chatRoomList)}
      </div>
    </>
  );
}

function AppBody(chatRoomList: string[]) {

  return (
    <ChatRoomsPage listChatRooms={chatRoomList} joinChatRoom={client.joinRoom} />
  )
}
