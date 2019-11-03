export const SET_ERROR = "SET_ERROR";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const setError = error => ({
  type: SET_ERROR,
  payload: error
});
