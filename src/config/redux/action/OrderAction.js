import api from "../../api";

export const Orders = () => async (dispatch) => {
  try {
    dispatch({type: "GET_ORDER_REQUEST"});
    const response = await api.get(`/order/customer`);
    const order = response.data.data;
    console.log(order)
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

// export const addMyBag = (data) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "ADD_MYBAG_REQUEST",
//     });
//     await api.post(`/mybag`, data);
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

// export const getByCustomerId = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "GET_BY_CUSTOMER_ID_REQUEST",
//     });
//     const response = await api.get(`/mybag/customer`);
//     const mybag = response.data.data;
//     dispatch({
//       type: "GET_BY_CUSTOMER_ID_SUCCESS",
//       payload: mybag,
//     });
//   } catch (error) {
//     dispatch({
//       type: "GET_BY_CUSTOMER_ID_FAILURE",
//       payload: error.response,
//     });
//   }
// };
