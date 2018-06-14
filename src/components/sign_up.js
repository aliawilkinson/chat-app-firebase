import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateInput, createAccount } from '../actions';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSignUp(event) {
        const { email, username, password, confirmPassword } = this.props.form;
        event.preventDefault();
        if (password === confirmPassword) {
            this.props.createAccount(this.props.form);
        } else {
            console.log('nope, try again')
        }
    }

    handleInputChange(event) {
        const { value, name } = event.target;
        this.props.updateInput(name, value);
    }

    render() {
        const { email, username, password, confirmPassword } = this.props.form;
        return (
            <div className="row">
                <h1 className="center">Sign Up</h1>
                <form onSubmit={this.handleSignUp.bind(this)} className="col s8 m6 offset-s2 offset-m3">
                    <div className="row">
                        <input value={username} onChange={this.handleInputChange} type="text" placeholder="username" name="username" />
                    </div>
                    <div className="row">
                        <input value={email} onChange={this.handleInputChange} type="text" placeholder="email" name="email" />
                    </div>
                    <div className="row">
                        <input value={password} onChange={this.handleInputChange} type="password" placeholder="password" name="password" />
                    </div>
                    <div className="row">
                        <input value={confirmPassword} onChange={this.handleInputChange} type="password" placeholder="confirm password" name="confirmPassword" />
                    </div>

                    <div className="row">
                        <button className="btn right">Sign Up</button>
                        <button className="btn pink lighten-2 right">Clear</button>
                    </div>
                </form>
            </div >
        )
    }
}

function mapStateToProps(state) {
    const { email, username, password, confirmPassword } = state.input;
    return {
        form: {
            email,
            username,
            password,
            confirmPassword
        }
    }
}

export default connect(mapStateToProps, { updateInput, createAccount })(SignUp);