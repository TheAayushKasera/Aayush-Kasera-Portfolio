import React from "react";
import Header from "./Header";
import Editor from "./Editor";
import "./App.css";
const AtrangiCodeEditor = () => {
  document.title = "Atrangi Code Editor";
  return (
    <section className="AtrangiCodeEditor">
      <Header />
      <Editor />
    </section>
  );
};

export default AtrangiCodeEditor;
