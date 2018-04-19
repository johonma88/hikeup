import React from 'react';
import * as routes from '../../constants/routes';
import "./SideMenu.css";
import ChatRoom from "../../components/ChatRoom";






const SideMenu = () =>


  <div class="container-fluid" id="sidemenu">
   
    
      {/* <li class="active"><a href="events">Home</a></li>
      <li><a href="account">Account</a></li> */}
      <span><a href="/events">HikeUp Events</a></span><br />
      <span><a href="/create-events">Create HikeUp</a></span><br />
      <span><a href="/mtsinfo">Mountains</a></span><br />
      <span><a href="/chatpage">Chat</a></span><br />
      <br /><br /><br /><br />
      <ChatRoom />
 
  </div>







export default SideMenu;
