import WebSocket from 'isomorphic-ws';
import {receiveMessage, createMessage, enumRequestType} from '../types/messages'

export default function () {
    const socket = new WebSocket('ws://localhost:8080/ws/');

    socket.onerror = function errorMessage() {
        console.log(`Some Error happend!`);
    }

    socket.onopen = function connect() {
        console.log('connected');
    };

    socket.onclose = function close() {
        console.log('disconnected');
    };

    socket.onmessage = function incommingMessage(data) {
        var incommingMessage = JSON.parse(data.data.toString());
        console.log('Message from server ', incommingMessage);
    };

    function newMessage(message: string) {
        if (!WebSocket.CONNECTING) {
            socket.send(createMessage(enumRequestType.Message ,message));
        }
    }

    function listRooms() {
        if (!WebSocket.CONNECTING) {
            socket.send(createMessage(enumRequestType.List));
        }
    }

    function joinRoom(roomName: string) {
        if (!WebSocket.CONNECTING) {
            socket.send(createMessage(enumRequestType.Join ,roomName));
        }
    }

    function setName(name: string) {
        if (!WebSocket.CONNECTING) {
            socket.send(createMessage(enumRequestType.Name ,name));
        }
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

