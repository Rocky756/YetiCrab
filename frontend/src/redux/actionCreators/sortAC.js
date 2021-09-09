import { SORT_DATE_NEW, SORT_DATE_OLD } from "../types";


export const sortDateNewFetchAC = async () => {
  console.log('Зашел в Fetch');
  const response = await fetch("http://localhost:5000/tab/getrequests/datenew", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};



export const sortDateNewAC = () => async (dispatch) => {
  const { requests } = await sortDateNewFetchAC();
    dispatch(
      {
      type: SORT_DATE_NEW,
      payload: requests,
      });
};

export const sortDateOldFetchAC = async () => {
  console.log('Зашел в Fetch');
  const response = await fetch("http://localhost:5000/tab/getrequests/dateold", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};



export const sortDateOldAC = () => async (dispatch) => {
  const { requests } = await sortDateOldFetchAC();
    dispatch(
      {
      type: SORT_DATE_NEW,
      payload: requests,
      });
};
