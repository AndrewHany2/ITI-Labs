export const userDetailsReducer = (state = null, action) => {
  if (action.type === "USER_DETAILS") {
    return action.payload;
  }
  return state;
};
