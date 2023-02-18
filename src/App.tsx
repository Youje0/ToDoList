import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/store";
import "./style/reset.scss";
import "./App.scss";
import Header from "./header/Header";
import ToDoWrite from "./component/toDoWrite/toDoWrite";
import Plus from "./component/footerIcon/plus";
import MainContent from "./component/mainContent/mainContent";
import TrashCan from "./component/footerIcon/trashCan";
import DoneIcon from "./component/footerIcon/doneIcon";
import InProgressIcon from "./component/footerIcon/inProgressIcon";
import InprogressPage from "./component/mainContent/inprogressPage";
import DonePage from "./component/mainContent/donePage";
import TrashCanPage from "./component/mainContent/trashCanPage";

function App() {
  const [currentPage, setCurrentPage] = useState("main");
  const [write, setWrite] = useState(false);

  const mainPost = useSelector((state: RootState) => state.post);

  const writeHandler = () => {
    setWrite(!write);
    setCurrentPage("main");
  };

  return (
    <div className="container">
      <main className="mainWrapper">
        <Header setCurrentPage={setCurrentPage} />
        {write ? (
          <ToDoWrite />
        ) : (
          <section className="contentBox">
            <ul className="contentBoxGrid">
              {currentPage === "main" &&
                mainPost.posts.map((item) => {
                  const { id, title } = item;
                  return (
                    <li key={id}>
                      <div>
                        <MainContent checker={id} title={title} />
                      </div>
                    </li>
                  );
                })}
              {currentPage === "inprogress" && <InprogressPage />}
              {currentPage === "done" && <DonePage />}
              {currentPage === "trashCan" && <TrashCanPage />}
            </ul>
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
            <div onClick={() => setCurrentPage("inprogress")}>
              <InProgressIcon />
            </div>
            <div onClick={() => setCurrentPage("done")}>
              <DoneIcon />
            </div>
            <div onClick={() => setCurrentPage("trashCan")}>
              <TrashCan />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
