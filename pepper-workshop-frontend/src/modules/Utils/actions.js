export const CLEAR_QUEUE = "CLEAR_QUEUE";
export const GET_STATUS_REQUEST = "GET_STATUS_REQUEST";
export const GET_STATUS_REQUEST_SUCCESS = "GET_STATUS_REQUEST_SUCCESS";

export const clearQueue = () => ({
  type: CLEAR_QUEUE
});

export const getStatus = () => ({
  type: GET_STATUS_REQUEST
});

export const getStatusRequestSuccess = payload => ({
  type: GET_STATUS_REQUEST_SUCCESS,
  payload: payload
});
