const initialState = {
  titles: [],
};

function reducer(state = initialState, action) {
  console.log("== action ==", action);
  return state;
}

export default reducer;
