import React from "react";

import "./MainPanel.css";
import DisplayPanel from "../DisplayPanel/DisplayPanel";
import ControlPanel from "../ControlPanel/ControlPanel";

const MainPanel = () => {
  return (
    <div className="panel">
      <DisplayPanel />
      <ControlPanel />
    </div>
  );
};

export default MainPanel;
