import { DELETE_REQ } from "../types";

export const deletetReqFetchAC = async (_id) => {
  const response = await fetch(`http://localhost:5000/tab/delete/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const deleteReqAC = (_id) => async (dispatch) => {
  const { removed } = await deletetReqFetchAC(_id);
  if (removed) {
    dispatch({
      type: DELETE_REQ,
      payload: _id,
    });
  }
};
