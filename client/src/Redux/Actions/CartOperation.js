import { getStaticContextFromError } from "@remix-run/router";

export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  var cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: quantity,
    price:pizza.prices[varient],
    // price: pizza.prices[varient],
    amount: pizza.prices[varient] * quantity,
    // amount: this.price * quantity,

    // data.prices[Varient] * Quantity
  };
  dispatch({ type: "ADD_TO_CART", payload: cartItem });

  const cartItems = getState().Cart.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
