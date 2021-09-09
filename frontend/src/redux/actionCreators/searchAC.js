import { SEARCH } from "../types";

export const searchFetchAC = async (text) => {
  console.log('Зашел в Fetch');
  console.log(text);
  const response = await fetch("http://localhost:5000/tab/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  const result = await response.json();
  return result;
};



export const searchAC = (text) => async (dispatch) => {
  const { requests } = await searchFetchAC(text);
    dispatch(
      {
      type: SEARCH,
      payload: requests,
      });
};
