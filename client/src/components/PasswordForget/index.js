import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import "./index.css";

const PasswordForgetPage = () =>
  <div>

    <div className="center">
     <img  className="pic-pf" src="https://cdn.zmescience.com/wp-content/uploads/2017/05/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg" alt="Mt Everest"/>
    </div>

    <div className="pf center">
      <h1 className="heading-pf">Password Forget Reset</h1>
      <PasswordForgetForm />
    </div>

  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input className="input-pf"
          value={this.state.email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <button className="button-custom" disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <div id="linkForgot">
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </div>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
