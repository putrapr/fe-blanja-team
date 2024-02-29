import axios from "axios";
import api from "../../api";

export const getMyBag = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_MYBAG_REQUEST",
    });
    const response = await api.get(`/mybag`);
    const mybag = response.data;
    dispatch({
      type: "GET_MYBAG_SUCCESS",
      payload: mybag,
    });
  } catch (error) {
    dispatch({
      type: "GET_MYBAG_FAILURE",
      payload: error.response,
    });
  }
};

// export const addMyBag = (data) => async (dispatch) => {
//   try {
//     console.log(data);
//     dispatch({
//       type: "ADD_MYBAG_REQUEST",
//     });
//     // const token = localStorage.getItem("token");
//     const response = await api.post(`/mybag`, data);
//     // const response = await axios.post(
//     //   `${import.meta.env.VITE_API_URL}/mybag`,
//     //   data,
//     //   {
//     //     headers: {
//     //       "Content-Type": "multipart/form-data",
//     //       //   Authorization: `Bearer ${token}`,
//     //     },
//     //   }
//     // );
//     const mybag = response.data.data;

//     dispatch({
//       type: "ADD_MYBAG_SUCCESS",
//       payload: mybag,
//     });
//     //   dispatch(getMyBag());
//   } catch (error) {
//     dispatch({
//       type: "ADD_MYBAG_FAILURE",
//       payload: error.response,
//     });
//   }
// };

export const addMyBag = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_MYBAG_REQUEST",
    });
    await api.post(`/mybag`, data);
    dispatch({
      type: "ADD_MYBAG_SUCCESS",
    });
  } catch (error) {
    dispatch({
      type: "ADD_MYBAG_FAILURE",
      payload: error.response,
    });
  }
};

// const response = await axios.post(
//   `${import.meta.env.VITE_API_URL}/mybag`,
//   data,
//   {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   }
// );
// const mybag = response.data.data;
