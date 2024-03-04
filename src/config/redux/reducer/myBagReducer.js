const initialState = {
  myBag: {},
  myBagList: [],
  loading: false,
  error: "",
};
const myBagReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MYBAG_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MYBAG_SUCCESS":
      return {
        ...state,
        loading: false,
        myBag: action.payload,
      };
    case "GET_MYBAG_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ADD_MYBAG_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_MYBAG_SUCCESS":
      return {
        ...state,
        loading: false,
        myBag: action.payload,
      };
    case "ADD_MYBAG_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_BY_CUSTOMER_ID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_BY_CUSTOMER_ID_SUCCESS":
      return {
        ...state,
        loading: false,
        myBagList: action.payload,
      };
    case "GET_BY_CUSTOMER_ID_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case "DELETE_MYBAG_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_MYBAG_SUCCESS":
      return {
        ...state,
        loading: false,
        myBagList: state.myBagList.filter(item => item.id !== action.payload)
        // myBagList: action.payload,
      };
    case "DELETE_MYBAG_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default myBagReducer;
