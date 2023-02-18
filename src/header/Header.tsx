import React, { useState } from "react";
import "./Header.scss";

function Header() {
  let currentTime = new Date();
  let hours = ("0" + currentTime.getHours()).slice(-2);
  let minutes = ("0" + currentTime.getMinutes()).slice(-2);
  let today = hours + ":" + minutes;
  const [selector, setSelector] = useState(false);
  const selectorHandler = () => {
    setSelector(!selector);
  };

  console.log(selector);
  return (
    <header className="header">
      <div className="currentTime">
        <span className="timer">{today}</span>
      </div>
      <div>
        <h1 className="appName">To Do</h1>
      </div>
      <div onClick={selectorHandler} className="currentState">
        <img src="../asset/image/more.png" className="dotsBtn" />
      </div>
    </header>
  );
}

export default Header;
