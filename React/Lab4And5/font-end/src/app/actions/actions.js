import axios from "axios";
const baseURL = "http://localhost:8000/api/users";

export const getUsersByName = (name) => async (dispatch) => {
  let response = null;
  try {
    response = await axios.get(`${baseURL}/profile/:${name}`);
  } catch (error) {
    console.log(error);
  }
  if (response) {
    return {
      type: "USER_DETAILS",
      payload: response.data,
    };
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "USERS_LIST_REQUEST" });
    const { data } = await axios.get(baseURL);
    console.log(data);
    dispatch({
      type: "USERS_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USERS_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postUser = async (fd) => {
  let response = null;

  try {
    response = await axios.post(`${baseURL}/register`, fd);
  } catch (error) {
    console.log(error);
    return {
      type: "USER_ADDED",
      payload: false,
    };
  }
  if (response) {
    return {
      type: "USER_ADDED",
      payload: true,
    };
  }
};
