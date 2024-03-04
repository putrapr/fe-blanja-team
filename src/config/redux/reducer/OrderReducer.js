const initialState = {
  order: {},
  loading: false,
  error: "",
};
const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case "GET_ORDER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "ADD_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "ADD_ORDER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default OrderReducer;
