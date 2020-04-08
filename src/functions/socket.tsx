import WebSocket from 'isomorphic-ws';

export default function () {
    const socket = new WebSocket('ws://localhost:8080/ws/');

    socket.onerror = function errorMessage() {
        console.log(`Some Error happend!`);
    }

    socket.onopen = function connect() {
        console.log('connected');
        socket.send(Date.now(), (error) => checkCallback(error));
    };

    socket.onclose = function close() {
        console.log('disconnected');
    };

    socket.onmessage = function incomingMessage(data) {
        console.log('Message from server ', data.data);
    };

    function newMessage(message: string) {
        if (!WebSocket.CONNECTING) {
            socket.send(`${message}`, (error) => checkCallback(error));
        }
    }

    function listRooms() {
        var list;
        if (!WebSocket.CONNECTING) {
            socket.send(`/list`, list);
            console.log(`Following chatrooms are available: ${list}`);
            return list;
        }
    }

    function joinRoom(roomName: string) {
        if (!WebSocket.CONNECTING) {
            socket.send(`/join ${roomName}`, (error) => checkCallback(error));
        }
    }

    function setName(name: string) {
        if (!WebSocket.CONNECTING) {
            socket.send(`/name ${name}`, (error) => checkCallback(error));
        }
        listRooms();
    }

    function checkCallback(error: any) {
        //TODO: Implement Error Handling and Error Response in Backend
        console.log(`Some Error Happend: ${error}`);
        return true;
    }
    return {
        newMessage,
        listRooms,
        joinRoom,
        setName
    }
}

