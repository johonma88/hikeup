import React from 'react';
// import { Link } from 'react-router-dom';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import { SignInForm } from '../SignIn/index';
import {PasswordForgetLink} from "../PasswordForget/index";
import { SignUpLink } from '../SignUp/index';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

import "./index.css";


// import * as routes from '../../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>

<nav class="navbar navbar-inverse shadow">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-logo left" href="/"><img className="logo" src= { require('./mountains-logo.png') } />Hike Up</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="account">Account</a></li>
      <li><a href="events">HikeUp Events</a></li>
      <li><a href="create-events">Create HikeUp</a></li>
      <li><a href="mtsinfo">Mountains</a></li>
      <li><a href="/chatpage">Chat</a></li>
    </ul>
    <SignOutButton />
  </div>
</nav>


const NavigationNonAuth = () =>
 
<nav class="navbar navbar-inverse shadow">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-logo left" href="/"><img className="logo" src= { require('./mountains-logo.png') } /></a>
    </div>
    <ul class="nav navbar-nav">
    </ul>
    <ul class="nav navbar-nav navbar-right">
    <SignInForm  />
    </ul>
    <ul class="nav navbar-nav navbar-right">
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
    </ul>
    <br />
    <ul class="nav navbar-nav navbar-right">
    <Link to={routes.SIGN_UP}>Sign Up</Link>
    </ul>
  </div>
</nav>


export default Navigation;
