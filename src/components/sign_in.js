import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateInput, createAccount, signInUser, clearManyInputs } from '../actions';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillUnmount() {
        this.props.clearManyInputs([
            'email', 'password'
        ])
    }

    handleSignIn(event) {
        event.preventDefault();
        const { email, password } = this.props.form;
        console.log('USER INFO:', email, password);
        this.props.signInUser({ email, password });
    }

    handleInputChange(event) {
        const { value, name } = event.target;
        this.props.updateInput(name, value);
    }

    render() {
        const { email, password } = this.props.form;
        return (
            <div className="row">
                <h1 className="center">Sign In</h1>
                <form onSubmit={this.handleSignIn.bind(this)} className="col s8 m6 offset-s2 offset-m3">
                    <div className="row">
                        <input value={email} onChange={this.handleInputChange}
                            type="text" placeholder="email" name="email" />
                    </div>
                    <div className="row">
                        <input value={password} onChange={this.handleInputChange}
                            type="password" placeholder="password" name="password" />
                    </div>
                    <div className="row">
                        <button className="btn right">Sign In</button>
                        <button className="btn pink lighten-2 right">Clear</button>
                    </div>
                </form>
            </div >
        )
    }
}

function mapStateToProps(state) {
    const { email, password } = state.input;
    return {
        form: {
            email,
            password,
        }
    }
}
//for firebase, must use email and password for login
export default connect(mapStateToProps, { updateInput, signInUser, clearManyInputs })(SignIn);