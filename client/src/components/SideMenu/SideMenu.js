import React from 'react';
import "./SideMenu.css";


const SideMenu = () =>

  <div class="container-fluid" id="sidemenu">
      <span><a href="/events">HikeUp Events</a></span><br />
      <span><a href="/create-events">Create HikeUp</a></span><br />
      <span><a href="/mtsinfo">Mountains</a></span><br />
      <span><a href="/chatpage">Chat</a></span><br />
  </div>

export default SideMenu;
