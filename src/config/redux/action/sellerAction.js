import api from "../../api";
export const login = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });
    const response = await api.post(`/seller/login`, data);
    const seller = response.data.data;
    localStorage.setItem("token", seller.token);
    console.log("response", seller.token);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        seller,
      },
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response,
    });
  }
};
export const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_REQUEST" });
    const response = await api.post(`/seller/register`, data);
    const seller = response.data.data;
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: seller,
    });
  } catch (error) {
    dispatch({
      type: "REGISTER_FAILURE",
      payload: error.response,
    });
  }
};
export const myProfileSeller = (data) => async (dispatch) => {
  try {
    dispatch({ type: "GET_MY_PROFILE_REQUEST" });
    const response = await api.get(`/seller/single`, data);
    const seller = response.data.data;
    console.log("seller data : ", seller);
    dispatch({
      type: "GET_MY_PROFILE_SUCCESS",
      payload: seller,
    });
  } catch (error) {
    dispatch({
      type: "GET_MY_PROFILE_FAILURE",
      payload: error.response.data.data,
    });
  }
};