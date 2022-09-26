import axios from "axios";

export const getPizzas = () =>async (dispatch) => {
  dispatch({ type: "GET_PIZZA_REQUEST" });
  try {
    const Response = await axios.get("http://localhost:5000/api/pizzas/");
    // console.log(Response);
    dispatch({ type: "GET_PIZZA_SUCCESS", payload: Response.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZA_FAILED", payload: err });
  }
};

