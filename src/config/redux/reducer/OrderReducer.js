const initialState = {
  add_order:{},
  add_order_item:{},
  order: {},
  id_product: [],
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

    case "GET_LASTORDER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_LASTORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case "GET_LASTORDER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    

    case "SET_ORDER":
      return {
        ...state,
        loading: false,
        add_order: action.payload,
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
        // ORDER: action.payload,
      };
    case "ADD_ORDER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // case "GET_BY_CUSTOMER_ID_REQUEST":
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case "GET_BY_CUSTOMER_ID_SUCCESS":
    //   return {
    //     ...state,
    //     loading: false,
    //     myBagList: action.payload,
    //   };
    // case "GET_BY_CUSTOMER_ID_FAILURE":
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};

export default OrderReducer;
