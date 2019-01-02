import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Auth from './components/AuthRoute';
import Login from './screens/Login'
import Register from './screens/Register'
import { checkLoggedIn } from './state/actions/auth'

import { Dimmer, Loader } from 'semantic-ui-react'
import AuthRoute from './components/AuthRoute';

const mapStateToProps = ({auth}) => ({auth})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  checkLoggedIn
}, dispatch)

class App extends Component {
  componentDidMount() {
    this.props.checkLoggedIn()
  }

  render() {
    return (
      <Router classname='App'>
        <div>
          <Dimmer.Dimmable className='loader' blurring dimmed={ this.props.auth.isLoading }>
            {/* <Dimmer active={ this.props.auth.isLoading } inverted>
              <Loader content='Loading' />
            </Dimmer> */}
            <Switch>
              <Route exact path='/' component={ () => this.props.auth.isLoggedIn ? <Redirect to='/home' /> : <Redirect to='/login' />} />
              <Route exact path='/login' component={ Login } />
              {/* <Route exact path='/register' component={ Register } />
              <Route exact path='/home' component={ Home } />
              <Route exact path='/plants' component={ PlantSearch } />
              <AuthRoute path='/boards' component={ BoardsDash } />
              <AuthRoute path='/boards/:id' component={ Board } /> */}
            </Switch>
          </Dimmer.Dimmable>
        </div>
      </Router>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
