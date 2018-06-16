import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (WrappedComponent, redirect = false, path = '/') => {
    class Auth extends Component {
        componentDidMount() {
            this.redirectUser();
        }

        componentDidUpdate() {
            this.redirectUser();
        }

        redirectUser() {
            if (this.props.auth && redirect || !this.props.auth && !redirect) {
                this.props.history.push(path);
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
    function MapStateToProps(state) {
        return {
            auth: state.user.auth
        }
    }
    return connect(MapStateToProps)(Auth);
}