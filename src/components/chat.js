import React, { Component } from 'react';
import db from '../firebase';
import { connect } from 'react-redux';
import { updateChat } from '../actions';

class Chat extends Component {
    componentDidMount() {
        db.ref('/chat-log').on('value', (snapshot) => { //this is all firebase stuff
            this.props.updateChat(snapshot.val())
        });
    };

    render() {
        console.log('Chat log: ', this.props.chatLog)
        const displayChat = {
            display: 'block',
            height: "30vh",
            width: "70vw",
            border: "2px solid lightgrey",
            margin: '1vh auto'
        }
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
                <form>
                    <div style={displayChat}>
                        <input type="text" placeholder="start typing here..." />
                    </div>
                    <button className="btn">submit</button>
                </form>
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