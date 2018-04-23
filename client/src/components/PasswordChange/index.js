import React, { Component } from 'react';
import "./index.css";

import { auth } from '../../firebase';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
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
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (

      <div className="pswdForm center">
        <form onSubmit={this.onSubmit}>
        <div class="center">
          <input
            value={passwordOne}
            onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
            type="password"
            placeholder="New Password"
          />
          </div>

          <div class="center">
          <input
            value={passwordTwo}
            onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm New Password"
          />
          </div> <br />

          <button 
          disabled={isInvalid} 
          type="submit"
          class="btn btn-success"> Reset My Password</button>

          { error && <p>{error.message}</p> }
        </form>
      </div>

    );
  }
}

export default PasswordChangeForm;