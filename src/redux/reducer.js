import { SET_DATA } from "./actionTypes";

const initialState = {
  titles: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        titles: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
