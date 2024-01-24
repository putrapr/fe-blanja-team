import api from "../../api";
export const login = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });
    const response = await api.post(`/customer/login`, data);
    const customer = response.data.data;
    localStorage.setItem("token", customer.token);
    console.log("response", customer.token);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        customer,
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
    const response = await api.post(`/customer/register`, data);
    const customer = response.data.data;
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: customer,
    });
  } catch (error) {
    dispatch({
      type: "REGISTER_FAILURE",
      payload: error.response,
    });
  }
};
export const myProfile = (data) => async (dispatch) => {
  try {
    dispatch({ type: "GET_MY_PROFILE_REQUEST" });
    const response = await api.get(`/customer/single`, data);
    const customer = response.data.data;
    console.log("customer data : ", customer);
    dispatch({
      type: "GET_MY_PROFILE_SUCCESS",
      payload: customer,
    });
  } catch (error) {
    dispatch({
      type: "GET_MY_PROFILE_FAILURE",
      payload: error.response.data.data,
    });
  }
};
