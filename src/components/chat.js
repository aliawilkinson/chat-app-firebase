import React, { Component } from 'react';

class Chat extends Component {
    render() {
        const displayChat = {
            display: 'block',
            height: "30vh",
            width: "70vw",
            border: "2px solid lightgrey",
            margin: '1vh auto'
        }
        return (
            <div className="center">
                <h1>
                    Chat Room
                </h1>
                <div style={displayChat}></div>
                <textarea placeholder="start typing here..."></textarea>
                <button className="btn">submit</button>
            </div>
        )
    }
}

export default Chat;