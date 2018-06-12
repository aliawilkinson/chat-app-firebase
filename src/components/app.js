import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './nav';
import Home from './home';
import { Route } from 'react-router-dom';
import Chat from './chat';
import CreateChatRoom from './create_chat_room';

const App = () => (
    <div>
        <Nav />
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/chat/:id" component={Chat} />
            <Route path="/create-room" component={CreateChatRoom} />
        </div>
    </div>
);

export default App;
