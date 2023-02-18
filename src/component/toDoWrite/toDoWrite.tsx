import React from "react";
import "./toDoWrite.scss";

function toDoWrite() {
  return (
    <section className="writeWrapper">
      <input className="title" maxLength={12} />
      <textarea className="writeBox"></textarea>
      <button className="addPost">Add</button>
    </section>
  );
}

export default toDoWrite;
