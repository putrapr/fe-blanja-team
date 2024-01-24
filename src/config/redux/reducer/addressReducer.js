const initialState = {
  address: {},
  loading: false,
  error: "",
};
const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MY_ADDRESS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MY_ADDRESS_SUCCESS":
      return {
        ...state,
        loading: false,
        address: action.payload,
      };
    case "GET_MY_ADDRESS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ADD_ADDRESS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_ADDRESS_SUCCESS":
      return {
        ...state,
        loading: false,
        address: action.payload,
      };
    case "ADD_ADDRESS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default addressReducer;
