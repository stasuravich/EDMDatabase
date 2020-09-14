import React, {Component} from 'react';
import {getJwt} from './jwt';
import {withRouter} from 'react-router-dom'

class AuthComponent extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      user: undefined
    }
  }

  componentDidMount() {
    const jwt = getJwt();
    if(!jwt) {
      this.props.history.push('/login');
    }
    if(window.location.href === 'http://localhost:3000/login'){
      localStorage.removeItem('cool-jwt');
    }
  }

  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default withRouter(AuthComponent);
