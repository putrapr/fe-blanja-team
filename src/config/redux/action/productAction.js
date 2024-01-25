import api from "../../api";
export const getAllProduct = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_ALL_PRODUCT_REQUEST",
    });
    const response = await api.get(``, data);
    const product = response.data.data;
    dispatch({
      type: "GET_ALL_PRODUCT_SUCCESS",
      payload: {
        productList: product,
      },
    });
  } catch (error) {
    dispatch({
      type: "GET_ALL_PRODUCT_FAILURE",
      payload: error.response,
    });
  }
};
export const getMyProduct = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_MY_PRODUCT_REQUEST" });
    const seller_id = localStorage.getItem("seller_id");
    const response = await api.get(`/product/seller/${seller_id}`);
    const product = response.data.data;
    dispatch({
      type: "GET_MY_PRODUCT_SUCCESS",
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: "GET_MY_PRODUCT_FAILURE",
      payload: error.response,
    });
  }
};
export const getProductById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DETAIL_PRODUCT_BY_ID_REQUEST",
    });
    const response = await api.get(`/${id}`);
    const product = response.data.data;

    dispatch({
      type: "DETAIL_PRODUCT_BY_ID_SUCCESS",
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: "DETAIL_PRODUCT_BY_ID_FAILURE",
      payload: error.response,
    });
  }
};
export const updateProduct = (id, data) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_PRODUCT_REQUEST",
    });
    const response = await api.put(`${id}`, data);
    const product = response.data.data;
    dispatch({
      type: "UPDATE_PRODUCT_SUCCESS",
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_PRODUCT_FAILURE",
      payload: error.response,
    });
  }
};

export const createProduct = (data) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_PRODUCT_REQUEST" });
    const response = await api.post(``, data);
    const product = response.data.data;
    dispatch({ type: "CREATE_PRODUCT_SUCCESS", payload: product });
    return product;
  } catch (error) {
    dispatch({ type: "CREATE_PRODUCT_FAILURE", payload: error.response });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_PRODUCT_REQUEST" });
    const response = await api.delete(`${id}`);
    const product = response.data.data;
    dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: product });
  } catch (error) {
    dispatch({ type: "DELETE_PRODUCT_FAILURE", payload: error.response });
  }
};
