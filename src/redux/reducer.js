import { States } from "./state";
import { UPDATE_CALCULATIONS, OUTPUT_RESULT, CLEAR_RESULT } from "./actions";
import { getFourDecimals } from "../Utils/string/stringUtils";
const reducer = (state = States, action) => {
  switch (action.type) {
    case UPDATE_CALCULATIONS:
      return {
        ...state,
        calculationResult: state.calculationResult.concat(action.payload),
        displayCalculation: action.payload,
      };

    case OUTPUT_RESULT:
      return {
        ...state,
        calculationResult: state.calculationResult.concat(
          "=" + getOutput(state.calculationResult)
        ),
        displayCalculation: getOutput(state.calculationResult),
      };

    case CLEAR_RESULT:
      return {
        ...state,
        calculationResult: "",
        displayCalculation: "0",
      };
  }
  return state;
};

// const isValidFormula = (formula) => {
//   formulaArray = formula.split(/[+-X/]+/g);

// };

const getOutput = (formula) => {
  let numberArray = formula.split(/[-+X/]+/g).map((ele) => {
    return parseInt(ele);
  });
  let operatorArray = formula.match(/[-+X/]+/g);
  let result = numberArray[0];
  try {
    operatorArray.forEach((operator, index) => {
      switch (operator) {
        case "+":
          result += parseInt(numberArray[index + 1], 10);
          break;
        case "-":
          result -= parseInt(numberArray[index + 1], 10);
          break;
        case "X":
          result *= parseInt(numberArray[index + 1], 10);
          result = getFourDecimals(result);
          break;
        case "/":
          debugger;
          result /= parseInt(numberArray[index + 1], 10);
          result = getFourDecimals(result);
          break;
        default:
      }
    });
  } catch (error) {
    result = "NAN";
  } finally {
    return result;
  }
};

export default reducer;
