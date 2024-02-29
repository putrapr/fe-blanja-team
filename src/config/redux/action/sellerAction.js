import api from "../../api";
export const loginSeller = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });
    const response = await api.post(`/seller/login`, data);
    const seller = response.data.data.token;
    localStorage.setItem("token", seller)
    console.log("response", seller);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        seller,
      },
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.message,
    });
    throw error.message;
  }
};
export const registerSeller = (data) => async (dispatch) => {
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
      payload: error.message,
    });
    throw error.message;
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
export const updateImageSeller = (data) => async (dispatch) => {
  try {
    dispatch({ type : "UPDATE_PROFILE_IMAGE_REQUEST"})
    const response = await api.put(`/seller/updateImage` , data)
    console.log (`customer data`, response.data)
    dispatch({type: "UPDATE_PROFILE_IMAGE_SUCCESS",
 })
 dispatch(myProfileSeller)
  } catch (error) {
    dispatch({
      type: "UPDATE_PROFILE_FAILURE",
      payload : error.response.data.data
    })
  }
}
export const updateProfileSeller = (data) => async (dispatch) => {
  try {
    dispatch({ type : "UPDATE_PROFILE_REQUEST"})
    const response = await api.put(`/seller/update` , data)
    console.log (`customer data`, response.data)
    dispatch({type: "UPDATE_PROFILE_SUCCESS",
 })
 dispatch(myProfileSeller)
  } catch (error) {
    dispatch({
      type: "UPDATE_PROFILE_FAILURE",
      payload : error.response.data.data
    })
  }
}