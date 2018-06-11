import React, { Component } from 'react';
import db from '../firebase';
import { connect } from 'react-redux';
import { updateChat } from '../actions';
import MessageInput from './message_input';

class Chat extends Component {
    componentDidMount() {
        db.ref('/chat-log').on('value', (snapshot) => { //this is all firebase stuff
            this.props.updateChat(snapshot.val())
        });
    };

    render() {
        const { chatLog } = this.props;
        const chatElements = Object.keys(chatLog).map((key, index) => {
            const { name, message } = chatLog[key];
            return (<li className="collection-item" key={key}>
                <strong>
                    {name}:
            </strong>
                {message}</li>
            )
        });

        return (
            <div className="center">
                <h1>
                    Chat Room
                </h1>
                <ul>{chatElements}</ul>
                <MessageInput />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        chatLog: state.chat.log
    }
}

export default connect(mapStateToProps, { updateChat })(Chat);