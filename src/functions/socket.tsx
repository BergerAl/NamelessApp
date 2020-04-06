import WebSocket from 'isomorphic-ws';

export default function () {
    const socket = new WebSocket('ws://localhost:8080/ws/');

    socket.onopen = function connect() {
        console.log('connected');
        socket.send(Date.now());
    };

    socket.onclose = function close() {
        console.log('disconnected');
    };

    function newMessage(message: string) {
        if (!WebSocket.CONNECTING) {
            socket.send(`${message}`);
        }
    }

    function listRooms(roomName: string) {
        if (!WebSocket.CONNECTING) {
            socket.send(`/list ${roomName}`);
        }
    }

    function joinRoom(roomName: string) {
        if (!WebSocket.CONNECTING) {
            socket.send(`/join ${roomName}`);
        }
    }

    function setName(name: string) {
        if (!WebSocket.CONNECTING) {
            socket.send(`/name ${name}`);
        }
    }
    return {
        newMessage,
        listRooms,
        joinRoom,
        setName
    }
}

