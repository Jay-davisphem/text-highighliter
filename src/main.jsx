import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {loadText, loadHighlight} from './data'
import "./index.css";

const highlight = loadHighlight()
if (!localStorage.getItem('highObj')){
  localStorage.setItem('highObj', JSON.stringify(highlight))
}
if(!localStorage.getItem('recordList')){
  localStorage.setItem('recordList', JSON.stringify(loadText(8)))
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
