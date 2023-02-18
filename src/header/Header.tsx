import React, { useState } from "react";
import "./Header.scss";

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

function Header({ setCurrentPage }: HeaderProps) {
  const getTime = () => {
    let currentTime = new Date();
    let hours = ("0" + currentTime.getHours()).slice(-2);
    let minutes = ("0" + currentTime.getMinutes()).slice(-2);
    let today = [hours + ":" + minutes];
    return today;
  };

  const [time, setTime] = useState<string[]>(getTime);
  const [selector, setSelector] = useState(false);
  const [selctInprogress, setSelctInprogress] = useState(false);
  const [selctDone, setSelctDone] = useState(false);
  const selectorHandler = () => {
    setSelector(!selector);
  };

  setInterval(() => setTime(getTime), 1000);

  const selctInprogressHandler = () => {
    setSelctInprogress(!selctInprogress);
    setSelector(false);
  };

  const selctDoneHandler = () => {
    setSelctDone(!selctDone);
    setSelector(false);
  };

  return (
    <header className="header">
      <div className="currentTime">
        <span className="timer">{time.toString()}</span>
      </div>
      <div>
        <h1 className="appName" onClick={() => setCurrentPage("main")}>
          To Do App
        </h1>
      </div>
      <div className="currentState">
        {selctInprogress || selctDone ? (
          <img alt="done" className="done" src="../asset/image/done.png" />
        ) : (
          <img
            alt="selector"
            onClick={selectorHandler}
            src="../asset/image/more.png"
            className="dotsBtn"
          />
        )}

        {selector ? (
          <ul className="dropBox">
            <li>
              <span onClick={selctInprogressHandler}>Inprogress</span>
            </li>
            <li>
              <span onClick={selctDoneHandler}>Done</span>
            </li>
            <li>
              <span>Background</span>
            </li>
          </ul>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
