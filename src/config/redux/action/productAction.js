import api from "../../api";

export const getAllProduct =
  ({ keyword, sort, page, pageSize }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "GET_ALL_PRODUCT_REQUEST",
      });
      const response = await api.get(
        `/product?keyword=${keyword}&sort=${sort}=&page=${page}=&pageSize${pageSize}`
      );
      const product = response.data;
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
export const getMyProductBySellerId = () => async (dispatch) => {
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
      type: "GET_PRODUCT_REQUEST_ID",
    });
    const response = await api.get(`/product/${id}`);
    const product = response.data;
    dispatch({
      type: "GET_PRODUCT_SUCCESS_ID",
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: "GET_PRODUCT_FAILURE_ID",
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

export const createProduct =
  ({ id, data, saveImage }) =>
  async (dispatch) => {
    try {
      dispatch({ type: "CREATE_PRODUCT_REQUEST" });
      const formData = new FormData();
      formData.append("name", data?.name);
      formData.append("price", data?.price);
      formData.append("stock", data?.stock);
      formData.append("condition", data?.condition);
      formData.append("image", saveImage);
      formData.append("description", data?.description);
      formData.append("seller_id", id);

      const response = await api.post(`/product`, data);
      const product = response.data.data;
      dispatch({ type: "CREATE_PRODUCT_SUCCESS", payload: product });
    } catch (error) {
      dispatch({ type: "CREATE_PRODUCT_FAILURE", payload: error.response });
    }
  };

export const getMyProduct = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_MY_PRODUCT_REQUEST" });
    const response = await api.get(``);
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
