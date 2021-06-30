import axios from "axios";
const baseURL = "http://localhost:8000/api/users";

export const filterUsersByName = (name) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "FILTER_USERS_LIST_REQUEST",
    });
    const { users } = getState();
    const filteredList = users.list.filter((item) => item.name.includes(name));
    dispatch({
      type: "FILTER_USERS_LIST_SUCCESS",
      payload: filteredList,
    });
  } catch (error) {
    dispatch({
      type: "FILTER_USERS_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "USER_EDIT_RESET" });
    dispatch({ type: "USER_CREATE_RESET" });
    dispatch({ type: "USER_DELETE_RESET" });
    dispatch({ type: "USER_DETAILS_RESET" });
    dispatch({ type: "USERS_LIST_REQUEST" });
    const { data } = await axios.get(baseURL);
    dispatch({
      type: "USERS_LIST_SUCCESS",
      payload: data,
    });
    dispatch({
      type: "FILTER_USERS_LIST_SUCCESS",
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

export const createUser = (fd) => async (dispatch) => {
  try {
    dispatch({ type: "USER_CREATE_REQUEST" });
    const { data } = await axios.post(`${baseURL}/register`, fd);
    dispatch({
      type: "USER_CREATE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_CREATE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editUser = (fd) => async (dispatch) => {
  try {
    dispatch({ type: "USER_EDIT_REQUEST" });
    const { data } = await axios.put(`${baseURL}/${fd.get("id")}`, fd);
    dispatch({
      type: "USER_EDIT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_EDIT_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "USER_DETAILS_REQUEST" });
    const { data } = await axios.get(`${baseURL}/${id}`);
    dispatch({
      type: "USER_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_DETAILS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "USER_DELETE_REQUEST" });
    const { data } = await axios.delete(`${baseURL}/${id}`);
    dispatch({
      type: "USER_DELETE_SUCCESS",
      payload: data,
    });
    dispatch({ type: "USER_DETAILS_RESET" });
  } catch (error) {
    dispatch({
      type: "USER_DELETE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
