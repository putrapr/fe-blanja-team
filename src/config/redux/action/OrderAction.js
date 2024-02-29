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

export const GetLastOrderId = () => async (dispatch) => {
  try {
    dispatch({type: "GET_LASTORDER_REQUEST"});
    const response = await api.get('/order/last-id');
    dispatch({
      type: "GET_LASTORDER_SUCCESS",
    });
    return response.data.data.last_id
  } catch (error) {
    dispatch({
      type: "GET_LASTORDER_FAILURE",
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

export const AddOrderHeader = (data) => async (dispatch) => {
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

export const AddOrderItem = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_ORDER_REQUEST",
    });
    let i = 0;
    data.map(async (item) => {
      await api.post("/order-item", item);
      console.log(i++)
    })
    // await api.post("/order", data);
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

// export const addMyBag = (data) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "ADD_MYBAG_REQUEST",
//     });
//     await api.post("/mybag", data);
//     dispatch({
//       type: "ADD_MYBAG_SUCCESS",
//     });
//   } catch (error) {
//     dispatch({
//       type: "ADD_MYBAG_FAILURE",
//       payload: error.response,
//     });
//   }
// };
