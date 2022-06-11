import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {loadData} from './data'
import "./index.css";

if(!localStorage.getItem('recordList')){
  console.log('touched')
  localStorage.setItem('recordList', JSON.stringify(loadData(6)))
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
