const initialState = {
  myBag: {},
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
  }
};

export default myBagReducer;
