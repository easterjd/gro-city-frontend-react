import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

import { Loader } from 'semantic-ui-react'

const mapStateToProps = ({ auth }) => {
    return {
        isLoggedIn: auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

class AuthRoute extends Component {
    constructor(props) {
        super(props)
    }

    render = () => {
        return this.props.isLoggedIn ? (
            <Route exact path={this.props.path} component={this.props.component} />
        ) : (
            <Redirect to='/login' />
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute)