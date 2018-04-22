import React from 'react';
// import { Link } from 'react-router-dom';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import { SignInForm } from '../SignIn/index';
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
      <a class="navbar-logo left" href="/"><img className="logo" alt="Mountain Logo" src= { require('./mountains-logo.png') } /></a>
    </div>
    <ul class="nav navbar-nav navbar-right">

     
  
      <li>
    <a href="account">  <i className="glyphicon glyphicon-user"></i>Account</a>
    </li>

      <SignOutButton />
    </ul>

  
  </div>
</nav>


const NavigationNonAuth = () =>
 
<nav class="navbar navbar-inverse shadow">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-logo left" href="/"><img className="logo" alt="Mountain Logo"  src= { require('./mountains-logo.png') } /></a>
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
