import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./index.css";
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
     
     
      <form class="navbar-form navbar-right" role="form" onSubmit={this.onSubmit} id="signin">

        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input id="email" 
            type="email" 
            class="form-control" 
            name="email" 
            value={email}
            onChange={event => this.setState(updateByPropertyName('email', event.target.value))} 
            placeholder="Email Address"/>                                        
        </div>

            <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                <input id="password" 
                      type="password"
                      class="form-control"
                      name="password"
                      value={password}
                      onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
                      placeholder="Password"/>                                        
            </div>
    
        <button 
                disabled={isInvalid}
                type="submit"
                class="btn btn-success">Login</button>

        
        { error && <p>{error.message}</p> }
        
  
      </form>



      
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm
};
