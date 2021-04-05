import React from "react";
import MainPanel from "./components/MainPanel/MainPanel";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <MainPanel />
      <div className="author">
        <p className="declare">Designed and Coded by</p>
        <a href="https://www.jacktriplesix.com/" target="_blank">
          Jack Wang
        </a>
      </div>
    </div>
  );
};

export default App;
