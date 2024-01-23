const initialState = {
  product: {},
  productList: [],
  loading: false,
  error: "",
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALL_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        productList: action.payload,
      };
    case "GET_ALL_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
