import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/reducer/addPost";
import "./toDoWrite.scss";

function ToDoWrite() {
  const [id, setId] = useState(Date.now());
  const [title, setTitle] = useState("");
  const [toDoContent, setToDoContent] = useState("");

  const dispatch = useDispatch();
  const titleRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    dispatch(addPost({ id, title, toDoContent }));
    setTitle("");
    setToDoContent("");
    setId(Date.now());
  };

  return (
    <section className="writeWrapper">
      <input
        ref={titleRef}
        onChange={(e) => setTitle(e.target.value)}
        className="title"
        maxLength={12}
        placeholder="Title"
        value={title}
      />
      <textarea
        onChange={(e) => setToDoContent(e.target.value)}
        className="writeBox"
        placeholder="Write a to-do"
        value={toDoContent}
      ></textarea>
      <button onClick={handleSubmit} className="addPost">
        Add
      </button>
    </section>
  );
}

export default ToDoWrite;
