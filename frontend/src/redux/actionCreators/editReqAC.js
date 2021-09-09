import { EDIT_REQ } from "../types";

export const editReqFetchAC = async (_id, clientState, carrierState, phoneState, commentState, atiState) => {
  console.log(_id, clientState, carrierState, phoneState, commentState, atiState);
  const response = await fetch(`http://localhost:5000/tab/edit/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({clientState, carrierState, phoneState, commentState, atiState }),
  });
  const result = await response.json();
  return result;
};

export const editReqAC = (_id, clientState, carrierState, phoneState, commentState, atiState) => async (dispatch) => {
  const { requests } = await editReqFetchAC(_id, clientState, carrierState, phoneState, commentState, atiState);
  console.log(requests);
    dispatch(
      {
      type: EDIT_REQ,
      payload: requests,
      });
};
