import React from "react";
import { useSelector } from "react-redux";
import "./DisplayPanel.css";

const DisplayPanel = () => {
  const calculationResult = useSelector((state) => state.calculationResult);
  const displayCalculation = useSelector((state) => state.displayCalculation);
  return (
    <div>
      <div className="formulaScreen">{calculationResult}</div>
      <div id="display" className="outputScreen">
        {displayCalculation}
      </div>
    </div>
  );
};

export default DisplayPanel;
