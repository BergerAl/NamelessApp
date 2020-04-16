import WebSocket from 'isomorphic-ws';
import {receiveMessage, createMessage, enumRequestType} from '../types/messages'

export default function () {
    const socket = new WebSocket('ws://localhost:8080/ws/');
    var setRoomList: Function;
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
        interpreteMessage(incommingMessage);
        console.log('Message from server ', incommingMessage);
    };

    function newMessage(message: string) {
        if (!WebSocket.CONNECTING) {
            socket.send(createMessage(enumRequestType.Message ,message));
        }
    }

    function listRooms(setListRooms: Function) {
        if (!WebSocket.CONNECTING) {
            setRoomList = setListRooms;
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

    function interpreteMessage(message: receiveMessage) {
        switch(message.request) {
            case 0: {
                //message
                break;
            }
            case 1: {
                //list
                setRoomList(message.room_list);
                break;
            }
            case 2: {
                //name
                break;
            }
            case 3: {
                //join
            }
        }
    }

    return {
        newMessage,
        listRooms,
        joinRoom,
        setName
    }
}

