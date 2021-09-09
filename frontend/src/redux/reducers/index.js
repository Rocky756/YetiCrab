import { GET_REQUESTS, ADD_WORKER, DELETE_WORKER, SORT_DATE_NEW, SORT_DATE_OLD, SORT_NUM_NEW, SORT_NUM_OLD, SEARCH } from "../types";

export const reducer = (state, action) => {
  let requests = [];
  switch (action.type) {
    case GET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
      };
    case ADD_WORKER:
      return {
        ...state, 
        workers: action.payload,
      }
    case DELETE_WORKER:
      const workers = state.workers.filter((worker) => worker._id !== action.payload);
      return {
        ...state,
        workers,
      }
    case SORT_NUM_OLD:
      requests = state.requests.sort((a, b) => b.reqnum - a.reqnum);
      return {
        ...state, requests
      }
    case SORT_NUM_NEW:
      requests = state.requests.sort((a, b) => a.reqnum - b.reqnum);
      return {
        ...state, requests
      }
    case SORT_DATE_NEW:
      return {
        ...state,
        requests: action.payload,
      };
    case SORT_DATE_OLD:
      return {
        ...state,
        requests: action.payload,
      };
    case SEARCH:
    return {
      ...state,
      requests: action.payload,
    };
    
    default:
      return state;
  }
};
