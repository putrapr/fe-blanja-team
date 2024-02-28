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
        productList: action.payload.productList,
      };
    case "GET_ALL_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_NEW_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_NEW_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        productList: action.payload.productList,
      };
    case "GET_NEW_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_MY_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MY_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        productList: action.payload,
      };
    case "GET_MY_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CREATE_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "CREATE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case "CREATE_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "UPDATE_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case "UPDATE_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DELETE_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        productList: action.payload,
      };
    case "DELETE_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_PRODUCT_BY_ID_CATEGORY_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PRODUCT_BY_ID_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        productList: action.payload,
      };
    case "GET_PRODUCT_BY_ID_CATEGORY_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_PRODUCT_BY_ID_SELLER":
      return {
        ...state,
        loading: true,
      };
    case "GET_PRODUCT_BY_ID_SELLER_SUCCESS":
      return {
        ...state,
        loading: false,
        productList: action.payload,
      };
    case "GET_PRODUCT_BY_ID_SELLER_FAILURE":
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
