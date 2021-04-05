import React from "react";
import { useDispatch } from "react-redux";

import {
  UpdateOutputResult,
  clearResult,
  getOutputResult,
} from "../../redux/actions";

import Button from "../Button/Button";
import "./ControlPanel.css";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const updateResult = (event) => {
    dispatch(UpdateOutputResult(event.target.value));
  };
  const clearAllResult = () => {
    dispatch(clearResult());
  };
  const getAllOutputResult = () => {
    dispatch(getOutputResult());
  };
  return (
    <div className="calculator">
      <div className="rows">
        <Button
          className="cleanButton"
          id="clear"
          text="AC"
          onClick={clearAllResult}
        />
        <Button
          className="operationButton"
          id="divide"
          text="/"
          onClick={updateResult}
        />
        <Button
          className="operationButton"
          id="multiply"
          text="X"
          onClick={updateResult}
        />
      </div>
      <div className="rows">
        <Button id="seven" text="7" onClick={updateResult} />
        <Button id="eight" text="8" onClick={updateResult} />
        <Button id="nine" text="9" onClick={updateResult} />
        <Button
          className="operationButton"
          id="subtract"
          text="-"
          onClick={updateResult}
        />
      </div>
      <div className="rows">
        <Button id="four" text="4" onClick={updateResult} />
        <Button id="fix" text="5" onClick={updateResult} />
        <Button id="six" text="6" onClick={updateResult} />
        <Button
          className="operationButton"
          id="add"
          text="+"
          onClick={updateResult}
        />
      </div>
      <div className="rows">
        <div className="leftBottomNumbers">
          <div className="columns">
            <div className="firstColumn">
              <Button id="one" text="1" onClick={updateResult} />
              <Button id="two" text="2" onClick={updateResult} />
              <Button id="three" text="3" onClick={updateResult} />
            </div>
            <div className="secondColumn">
              <Button
                className="zeroButton"
                id="zero"
                text="0"
                onClick={updateResult}
              />
              <Button id="decimal" text="." onClick={updateResult} />
            </div>
          </div>
        </div>
        <div className="equalSign">
          <Button
            className="equalButton"
            id="equals"
            text="="
            onClick={getAllOutputResult}
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
