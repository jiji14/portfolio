import React, { useState, useEffect } from 'react';

function Header() {

  return(
    <div className="headerContainer">
      <div className="headerList">
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>RESUME</li>
            <li>WORKS</li>
            <li>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;