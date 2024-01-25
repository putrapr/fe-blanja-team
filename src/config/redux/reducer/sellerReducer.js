const initialState = {
  seller: {},
  loading: false,
  error: "",
};
const sellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "REGISTER_SUCCESS":
        return {
          ...state,
          loading: false,
          seller: action.payload,
        };
      case "REGISTER_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case "LOGIN_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          loading: false,
          seller: action.payload.seller,
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    case "GET_MY_PROFILE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MY_PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        seller: action.payload,
      };
    case "GET_MY_PROFILE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


    default:
      return state;
  }
};

export default sellerReducer;
