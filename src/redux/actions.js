export const UPDATE_CALCULATIONS = "UPDATE_CALCULATIONS";

export const OUTPUT_RESULT = "OUTPUT_RESULT";

export const CLEAR_RESULT = "CLEAR_RESULT";

export const UpdateOutputResult = (data) => ({
  type: UPDATE_CALCULATIONS,
  payload: data,
});

export const getOutputResult = () => ({
  type: OUTPUT_RESULT,
});

export const clearResult = () => ({
  type: CLEAR_RESULT,
});
