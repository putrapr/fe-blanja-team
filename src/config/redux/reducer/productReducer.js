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
// <<<<<<< master
//     case "GET_MY_PRODUCT_REQUEST":
//       return {
//         ...state,
//         loading: true,
//       };
//     case "GET_MY_PRODUCT_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         productList: action.payload,
//       };
//     case "GET_MY_PRODUCT_FAILURE":
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case "UPDATE_PRODUCT_REQUEST":
//       return {
//         ...state,
//         loading: true,
//       };
//     case "UPDATE_PRODUCT_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         productList: [...state.productList, action.payload],
//       };
//     case "UPDATE_PRODUCT_FAILURE":
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case "DELETE_PRODUCT_REQUEST":
//       return {
//         ...state,
//         loading: true,
//       };
//     case "DELETE_PRODUCT_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         productList: action.payload,
//       };
//     case "DELETE_PRODUCT_FAILURE":
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
// =======
//       case "GET_PRODUCT_REQUEST_ID":
//         return {
//           ...state,
//           loading: true,
//         };
//       case "GET_PRODUCT_SUCCESS_ID":
//         return {
//           ...state,
//           loading: false,
//           productList: action.payload.productList,
//         };
//       case "GET_PRODUCT_FAILURE_ID":
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
// >>>>>>> master

    default:
      return state;
  }
};

export default productReducer;
