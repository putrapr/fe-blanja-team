const initialState = {
    category: {},
    categoryList: [],
    loading: false,
    error: "",
  };

  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_CATEGORY_REQUEST":
            return{
                ...state,
                loading: true,
            };
        case "GET_ALL_CATEGORY_SUCCESS":
            return{
                ...state,
                loading: false,
                categoryList: action.payload.categoryList,
                category: action.payload.category,
            };
        case "GET_ALL_CATEGORY_FAILURE":
            return{
                ...state,
                loading: false,
                error: action.payload
            };
            default:
                return state;
    }
  }

  export default categoryReducer