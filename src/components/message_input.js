import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateInput, sendMessageToDatabase, clearInput } from '../actions';

class MessageInput extends Component {
    sendMessage(event) {
        event.preventDefault();
        const { message, roomId, clearInput, username } = this.props;
        sendMessageToDatabase(roomId, username, message);
        clearInput('message');
    }

    updateMessage(event) {
        const { name, value } = event.target;

        this.props.updateInput(name, value);
    }

    render() {
        const { message } = this.props;

        return (
            <div className="row">
                <form onSubmit={this.sendMessage.bind(this)} className="col s12">
                    <div className="col s6 offset-s3">
                        <input onChange={this.updateMessage.bind(this)} value={message} type="text" name="message" placeholder="start typing here..." />
                    </div>
                    <button className="btn">submit</button>
                </form>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        message: state.input.message,
        username: state.user.username
    }
}

export default connect(mapStateToProps, { updateInput, clearInput })(MessageInput);