import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <ul class="nav navbar-nav navbar-right"
    // type="button"
    onClick={auth.doSignOut}
  >
    {/* <a className="nav-item nav-link" href="/">Sign Out</a> */}
    <li><a href="/"><span class="glyphicon glyphicon-log-out"></span>Sign Out</a></li>
  </ul>

export default SignOutButton;
