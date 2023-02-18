import React, { useState } from "react";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from "react-spring";
import "./style/reset.scss";
import "./App.scss";
import Header from "./header/Header";
import ToDoWrite from "./component/toDoWrite/toDoWrite";
import Plus from "./component/footerIcon/plus";
import ToDoBox from "./component/toDoBox/toDoBox";
import TrashCan from "./component/footerIcon/trashCan";
import Done from "./component/footerIcon/done";
import InProgress from "./component/footerIcon/inProgress";

function App() {
  const [write, setWrite] = useState(false);
  const [inProgressPage, setInProgressPage] = useState(false);
  const [donePage, setDonePage] = useState(false);
  const [trashCan, setTrashCan] = useState(false);
  const [plusPage, setPlusPage] = useState([1]);
  const componentPos = useSpring({ x: 0, y: 0 });
  const styleDnD = {
    x: componentPos.x,
    y: componentPos.y,
  };

  const bindComponentPos = useDrag((params) => {
    componentPos.x.set(params.offset[0]);
    componentPos.y.set(params.offset[1]);
    const dragEnd = () => {
      params.offset[0] = 0;
      params.offset[1] = 0;
    };
    return dragEnd();
  });

  const onDragEnd = () => {
    // if (over) {
    //   console.log("꽈강");
    // }
    componentPos.x.set(0);
    componentPos.y.set(0);
  };

  const writeHandler = () => {
    if (!inProgressPage && !donePage && !trashCan) {
      setWrite(!write);
    }
  };

  const InprogressPageHandler = () => {
    if (!donePage && !trashCan && !write) {
      setInProgressPage(!inProgressPage);
    }
  };

  const DonePageHandler = () => {
    if (!inProgressPage && !trashCan && !write) {
      setDonePage(!donePage);
    }
  };

  const trashCanHandler = () => {
    if (!write) {
      setTrashCan(!trashCan);
    }
  };

  return (
    <div className="container">
      <main className="mainWrapper">
        <Header />
        {write ? (
          <ToDoWrite />
        ) : (
          <section className="contentBox">
            {inProgressPage === true ? (
              <ul className="contentBoxGrid">
                {plusPage &&
                  plusPage.map((e) => (
                    <li>
                      <animated.div
                        {...bindComponentPos()}
                        style={styleDnD}
                        onMouseUp={onDragEnd}
                      >
                        <ToDoBox />
                      </animated.div>
                    </li>
                  ))}
              </ul>
            ) : (
              <div>일단은 기본페이지</div>
            )}
            {donePage === true ? (
              <ul className="contentBoxGrid">
                {donePage &&
                  plusPage.map((e) => (
                    <li>
                      <animated.div
                        {...bindComponentPos()}
                        style={styleDnD}
                        onMouseUp={onDragEnd}
                      >
                        <ToDoBox />
                      </animated.div>
                    </li>
                  ))}
              </ul>
            ) : (
              <div>일단은 기본페이지</div>
            )}
          </section>
        )}

        <footer className="footerWrapper">
          <div className="footer">
            <div
              style={write ? { opacity: "0.5" } : { opacity: "1" }}
              onClick={writeHandler}
            >
              <Plus />
            </div>
            <div
              style={inProgressPage ? { opacity: "0.5" } : { opacity: "1" }}
              onClick={InprogressPageHandler}
            >
              <InProgress />
            </div>
            <div
              style={donePage ? { opacity: "0.5" } : { opacity: "1" }}
              onClick={DonePageHandler}
            >
              <Done />
            </div>
            <div
              style={trashCan ? { opacity: "0.5" } : { opacity: "1" }}
              onClick={trashCanHandler}
            >
              <TrashCan />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
