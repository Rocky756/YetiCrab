import { DELETE_WORKER } from "../types";

export const deletetWorkerFetchAC = async (_id) => {
  const response = await fetch(`/tab/delete/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const deleteTodoAC = (_id) => async (dispatch) => {
  const { removed } = await deletetWorkerFetchAC(_id);
  if (removed) {
    dispatch({
      type: DELETE_WORKER,
      payload: _id,
    });
  }
};
