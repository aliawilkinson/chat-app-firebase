import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateInput, createRoom, clearInput } from '../actions';

class CreateChatRoom extends Component {

    async handleCreateRoom(event) {
        event.preventDefault();
        const key = await createRoom(this.props.roomName);
        this.props.history.push(`/chat/${key}`);
    }

    componentWillUnmount() {
        this.props.clearInput('roomName');
    }

    render() {
        const { updateInput, roomName } = this.props;
        return (
            <div className="row">
                <h1 className="center">Create Chat Room</h1>
                <form onSubmit={this.handleCreateRoom.bind(this)} className="col s12">
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <input value={roomName}
                                onChange={event => updateInput(event.target.name, event.target.value)}
                                type="text" name="roomName"
                                placeholder="Enter new chat room name" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        roomName: state.input.roomName
    }
}

export default connect(mapStateToProps, { updateInput, clearInput })(CreateChatRoom);