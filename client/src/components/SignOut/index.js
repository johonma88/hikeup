import React from 'react';
import { auth } from '../../firebase';

const SignOutButton = () =>
  <ul class="nav navbar-nav navbar-right"
    // type="button"
    onClick={auth.doSignOut}>

    <li><a href="/"><span class="glyphicon glyphicon-log-out"></span>Sign Out</a></li>
  </ul>

export default SignOutButton;
