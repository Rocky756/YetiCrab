import { ADD_REQ } from "../types";

export const addReqFetchAC = async (clientState, carrierState, phoneState, commentState, atiState) => {
  console.log(clientState, carrierState, phoneState, commentState, atiState);
  const response = await fetch("http://localhost:5000/tab/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ clientState, carrierState, phoneState, commentState, atiState }),
  })
    const result = await response.json();
    console.log(result);
    return result;
};

export const addReqAC = (clientState, carrierState, phoneState, commentState, atiState) => async (dispatch) => {
  const { requests } = await addReqFetchAC(clientState, carrierState, phoneState, commentState, atiState);
  console.log(requests);
    dispatch(
      {
      type: ADD_REQ,
      payload: requests,
      });
};
