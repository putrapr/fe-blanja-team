import api from "../../api";

export const myAddress = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_MY_ADDRESS_REQUEST",
    });
    const response = await api.get(`/address`, data);
    const address = response.data.data;
    dispatch({
      type: "GET_MY_ADDRESS_SUCCESS",
      payload: address,
    });
  } catch (error) {
    dispatch({
      type: "GET_MY_ADDRESS_FAILURE",
      payload: error.response,
    });
  }
};
export const addAddress = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_ADDRESS_REQUEST",
    });
    const response = await api.post(`/address`, data);
    const address = response.data.data;
    dispatch({
      type: "ADD_ADDRESS_SUCCESS",
      payload: address,
    });
  } catch (error) {
    dispatch({
      type: "ADD_ADDRESS_FAILURE",
      payload: error.response,
    });
  }
};
export const deleteAddress = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_ADDRESS_REQUEST",
    });
    const response = await api.delete(`/address/${id}`);
    const address = response.data.data;
    dispatch({
      type: "DELETE_ADDRESS_SUCCESS",
      payload: address,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_ADDRESS_FAILURE",
      payload: error.response,
    });
  }
};
