import { combineReducers } from 'redux';
import chatReducer from './chat-reducer';
import inputReducer from './input_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    chat: chatReducer,
    input: inputReducer,
    user: userReducer
});

export default rootReducer;