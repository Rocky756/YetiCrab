import { GET_REQUESTS, ADD_REQ, DELETE_REQ, EDIT_REQ, SORT_DATE_NEW, SORT_DATE_OLD, SORT_NUM_NEW, SORT_NUM_OLD, SEARCH } from "../types";

export const reducer = (state, action) => {
  let requests = [];
  switch (action.type) {
    case GET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
      };
    case ADD_REQ:
      return {
        ...state, 
        requests: action.payload,
      }
    case DELETE_REQ:
      requests = state.requests.filter((req) => req._id !== action.payload);
      return {
        ...state,
        requests,
      }
    case EDIT_REQ:
    return {
      ...state, 
      requests: action.payload,
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
