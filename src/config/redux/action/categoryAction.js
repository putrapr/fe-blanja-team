import api from "../../api";

export const getAllCategory = (data) => async (dispatch) => {
    try {
        dispatch({type: "GET_ALL_CATEGORY_REQUEST"})
        const response = await api.get(`/category`, data)
        const category = response.data.data;
        console.log("category data ", category);
        dispatch({
            type:  "GET_ALL_CATEGORY_SUCCESS",
            payload: {
                categoryList: category
            }
        })
    } catch (error) {
        dispatch({
            type: "GET_ALL_CATEGORY_FAILURE",
            payload: error.response
        })
    }
}