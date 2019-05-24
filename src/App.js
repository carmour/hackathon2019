import React from "react";
import "./styles/App.css";
import { Link, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <div>THIS IS OUR APP</div> */}
      <div className="margin--left">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
