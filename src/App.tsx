import React, { useState } from "react";
import Button from "./components/Button/Button";
import TextArea from "./components/TextArea/TextArea";
import "./App.css";

const App: React.FC = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const handleTextAreaClick = (
    event: React.MouseEvent<HTMLTextAreaElement>
  ) => {
    console.log("Text area clicked!", event);
  };

  return (
    <div className="app-container">
      <h1>My React App</h1>
      <Button
        label="Click Me"
        disabled={false}
        id="myButton"
        onClick={() => {}}
      />
      <TextArea
        value={text}
        onChange={handleTextChange}
        onClick={handleTextAreaClick}
        backgroundColor="#f0f0f0"
        width="300px"
        id="myTextArea"
      />
    </div>
  );
};

export default App;
