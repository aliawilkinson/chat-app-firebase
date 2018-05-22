import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './nav';
import Home from './home';
import { Route } from 'react-router-dom';
import Chat from './chat';

const App = () => (
    <div>
        <Nav />
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/chat" component={Chat} />
        </div>
    </div>
);

export default App;
