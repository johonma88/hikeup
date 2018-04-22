import React from 'react';
import "./SideMenu.css";
import ChatRoom from "../../components/ChatRoom";

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import { SignInForm } from '../SignIn/index';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';


const SideMenu = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <SideMenuAuth />
      : <SideMenuNonAuth />
    }
  </AuthUserContext.Consumer>

const SideMenuAuth = () =>

  <div class="container-fluid" id="sidemenu">
      <span><a href="/events">HikeUp Events</a></span><br />
      <span><a href="/create-events">Create HikeUp</a></span><br />
      <span><a href="/mtsinfo">Mountains</a></span><br />
      {/* <span><a href="/chatpage">Chat</a></span><br /> */}
      <br /><br /><br /><br />
      <ChatRoom />
  </div>

const SideMenuNonAuth = () =>

<div class="container-fluid" id="sidemenu">
    {/* <span><a href="/events">HikeUp Events</a></span><br />
    <span><a href="/create-events">Create HikeUp</a></span><br />
    <span><a href="/mtsinfo">Mountains</a></span><br />
    {/* <span><a href="/chatpage">Chat</a></span><br /> */}
    <br /><br /><br /><br />
    <ChatRoom /> */}
</div>

export default SideMenu;
