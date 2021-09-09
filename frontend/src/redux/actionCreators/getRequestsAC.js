import { GET_REQUESTS } from "../types";

export const getRequestsFetchAC = async () => {
  console.log('Зашел в Fetch');
  const response = await fetch("http://localhost:5000/tab/getrequests", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};



export const getRequestsAC = () => async (dispatch) => {
  const { requests } = await getRequestsFetchAC();
    dispatch(
      {
      type: GET_REQUESTS,
      payload: requests,
      });
};


