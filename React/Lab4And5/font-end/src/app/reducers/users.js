export const userListReducer = (state = { users: [] }, action) => {
  console.log(action);
  switch (action.type) {
    case "USERS_LIST_REQUEST":
      return { loading: true, users: [] };
    case "USERS_LIST_SUCCESS":
      return {
        loading: false,
        list: action.payload,
      };
    case "USERS_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
