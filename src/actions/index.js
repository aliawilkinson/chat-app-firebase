import types from './types';
import db from '../firebase';

export function updateChat(roomData) {
    console.log('room data: ', roomData);
    return {
        type: types.UPDATE_CHAT_LOG,
        chatLog: roomData['chat-log'],
        payload: {}
    }
}

export function updateInput(name, value) {
    return {
        type: types.UPDATE_INPUT,
        payload: { name, value }
    }
}

export function sendMessageToDatabase(id, message) {
    db.ref(`/chat-rooms/${id}/chat-log`).push({
        name: "Alia",
        message
    });
}

export function clearInput(name) {
    return {
        type: types.CLEAR_INPUT,
        payload: name
    }
}

export async function createRoom(name) {
    const newRoom = {
        name,
        'chat-log': {
            0: {
                message: `Welcome to the ${name} chat room`,
                name: 'Admin'
            }
        }
    }
    const resp = await db.ref('/chat-rooms').push(newRoom);
    return resp.key;
}

