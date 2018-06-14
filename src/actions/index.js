import types from './types';
import { db, auth } from '../firebase';

export function createAccount(userData) {
    return async dispatch => {
        try {
            const newUser = await auth.createUserWithEmailAndPassword(userData.email, userData.password);
            //todo add username to the user, update redux state with user info
            console.log('new user: ', newUser);
        }
        catch (err) {
            console.log(err)
        }
    }
}

export function updateChat(chatLog) {
    return {
        type: types.UPDATE_CHAT_LOG,
        chatLog
    }
}

export function updateInput(name, value) {
    return {
        type: types.UPDATE_INPUT,
        payload: { name, value }
    }
}

export function sendMessageToDatabase(id, message) {
    db.ref(`/chat-logs/${id}`).push({
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

export function setRoom(name) {
    return {
        type: types.SET_ROOM,
        payload: name
    }
}

export function updateRooms(rooms) {
    return {
        type: types.UPDATE_ROOMS,
        payload: rooms
    }
}

export async function createRoom(name) {
    const firstMessage = {
        0: {
            message: `Welcome to room ${name}`,
            name: `Admin`
        }
    }
    const newChat = await db.ref('/chat-logs').push(firstMessage);

    const newRoom = {
        name,
        chatId: newChat.key
    }
    const resp = await db.ref('/chat-rooms').push(newRoom);

    return newChat.key;
}

export function clearChatData() {
    return {
        type: types.CLEAR_CHAT_DATA
    }
}

