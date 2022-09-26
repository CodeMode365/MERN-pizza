import Axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const response = await Axios.post("/api/users/register", { user });
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (err) {
    dispatch({ type: "USER_REGISTER_FAILED" , payload: err});

  }
};
