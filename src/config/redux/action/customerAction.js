import api from "../../api";
export const login = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });
    const response = await api.post(`/customer/login`, data);
    const customer = response.data.data.token;
    console.log("response", customer);
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
