import api from "../../api";

export const Orders = () => async (dispatch) => {
  try {
    dispatch({type: "GET_ORDER_REQUEST"});
    const response = await api.get('/order/customer');
    const order = response.data.data;
    dispatch({
      type: "GET_ORDER_SUCCESS",
      payload: order,
    });
  } catch (error) {
    dispatch({
      type: "GET_ORDER_FAILURE",
      payload: error.message,
    });
  }
};

export const SetOrder = (data) => async (dispatch) => {
  dispatch({
    type: "SET_ORDER",
    payload: data
  });
};

export const AddOrder = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_ORDER_REQUEST",
    });
    await api.post("/order", data);
    dispatch({
      type: "ADD_ORDER_SUCCESS",
    });
  } catch (error) {
    dispatch({
      type: "ADD_ORDER_FAILURE",
      payload: error.message,
    });
  }
};

