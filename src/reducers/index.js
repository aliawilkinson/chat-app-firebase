import { combineReducers } from 'redux';
import chatReducer from './chat-reducer';
import inputReducer from './input_reducer';

const rootReducer = combineReducers({
    chat: chatReducer,
    input: inputReducer
});

export default rootReducer;