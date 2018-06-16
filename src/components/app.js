import React, { Component } from 'react';
import { auth } from '../firebase';
import { connect } from 'react-redux';
import { signInAction, signOutAction } from '../actions';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './nav';
import Home from './home';
import { Route, withRouter } from 'react-router-dom';
import Chat from './chat';
import CreateChatRoom from './create_chat_room';
import ChatRooms from './chat_rooms';
import SignUp from './sign_up';
import SignIn from './sign_in';
import routeAuthHoc from '../hoc/auth';

class App extends Component {
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                console.log('user', user.displayName);
                this.props.signInAction(user);
            } else {
                console.log('no user')
                this.props.signOutAction();
            }
        });
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route path="/chat/:id" component={Chat} />
                    <Route path="/create-room" component={CreateChatRoom} />
                    <Route path="/chat-rooms" component={routeAuthHoc(ChatRooms)} />
                    <Route path="/sign-up" component={routeAuthHoc(SignUp, true, '/chat-rooms')} />
                    <Route path="/sign-in" component={routeAuthHoc(SignIn, true, '/chat-rooms')} />
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, { signInAction, signOutAction })(App));
//connect makes a component lose connection w/router, withRouter adds it back
