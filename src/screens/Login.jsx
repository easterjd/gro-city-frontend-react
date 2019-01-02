import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login, register } from '../state/actions/auth'

const mapStateToProps = ({auth}) => {
    return {
        isLoading: auth.isLoading,
        showLoginError: auth.showLoginError,
        loginError: auth.loginError,
        showRegisterError: auth.showRegisterError,
        regError: auth.regError
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    login, register
}, dispatch)

class Login extends Component {
    render() {
        return (
            <div>
                <p>Login</p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)