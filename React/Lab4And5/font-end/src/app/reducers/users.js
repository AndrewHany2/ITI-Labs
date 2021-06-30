export const userListReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case "USERS_LIST_REQUEST":
      return { loading: true, list: [] };
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
export const filteredUserListReducer = (
  state = { filteredList: [] },
  action
) => {
  switch (action.type) {
    case "FILTER_USERS_LIST_REQUEST":
      return { loading: true, filteredList: [] };
    case "FILTER_USERS_LIST_SUCCESS":
      return {
        loading: false,
        list: action.payload,
      };
    case "FILTER_USERS_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_CREATE_REQUEST":
      return { loading: true };
    case "USER_CREATE_SUCCESS":
      return {
        loading: false,
        success: true,
        user: action.payload,
      };
    case "USER_CREATE_FAIL":
      return { loading: false, error: action.payload };
    case "USER_CREATE_RESET":
      return {};
    default:
      return state;
  }
};
export const userDetailsReducer = (state = { details: {} }, action) => {
  switch (action.type) {
    case "USER_DETAILS_REQUEST":
      return { loading: true };
    case "USER_DETAILS_SUCCESS":
      return {
        loading: false,
        success: true,
        details: action.payload,
      };
    case "USER_DETAILS_FAIL":
      return { loading: false, error: action.payload };
    case "USER_DETAILS_RESET":
      return { details: {} };
    default:
      return state;
  }
};
export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_DELETE_REQUEST":
      return { loading: true };
    case "USER_DELETE_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "USER_DELETE_FAIL":
      return { loading: false, error: action.payload };
    case "USER_DELETE_RESET":
      return {};
    default:
      return state;
  }
};

export const userEditReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_EDIT_REQUEST":
      return { loading: true };
    case "USER_EDIT_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "USER_EDIT_FAIL":
      return { loading: false, error: action.payload };
    case "USER_EDIT_RESET":
      return {};
    default:
      return state;
  }
};
