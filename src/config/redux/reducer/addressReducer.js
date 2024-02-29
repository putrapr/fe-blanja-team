const initialState = {
  address: {},
  addressList: [],
  loading: false,
  error: "",
};
const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRIMARY_ADDRESS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PRIMARY_ADDRESS_SUCCESS":
      return {
        ...state,
        loading: false,
        address: action.payload,
      };
    case "GET_PRIMARY_ADDRESS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_MY_ADDRESS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MY_ADDRESS_SUCCESS":
      return {
        ...state,
        loading: false,
        addressList: action.payload !== "no data" ? action.payload : [],
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
      };
    case "ADD_ADDRESS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "UPDATE_ADDRESS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_ADDRESS_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "UPDATE_ADDRESS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CHANGE_ADDRESS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "CHANGE_ADDRESS_SUCCESS":
      return {
        ...state,
        loading: false,
        address: action.payload,
      };
    case "CHANGE_ADDRESS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "DELETE_ADDRESS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_ADDRESS_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "DELETE_ADDRESS_FAILURE":
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
