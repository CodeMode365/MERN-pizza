import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { ImBin } from "react-icons/im";

const Cart = () => {
  const cartState = useSelector((state) => state.Cart);
  const cartItems = cartState.cartItems;
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-light fw-bolder w-100 text-center">My Cart</h1>
          <h2 className="text-light">{cartItems.length}</h2>
          {cartItems.map((element, index) => {
            return (
              <div
                className="text-light flex-container"
                style={{ position: "relative", width: "650px" }}
                key={index * 500}
              >
                <h1 style={{ color: "#2fe45e" }}>
                  <i>{element.name}</i>
                </h1>
                <h2>
                  Price: {element.quantity} * {element.price} ({" "}
                  <span className="text-info">{element.varient} </span>) ={" "}
                  {element.amount}
                </h2>
                <h3>
                  Quantity :{" "}
                  <AiFillPlusCircle
                    className="text-primary me-2 pointer"
                    onClick={() => {
                      element.quantity += 1;
                    }}
                  />
                  {element.quantity + " "}
                  <AiFillMinusCircle
                    className="text-danger me-2 pointer"
                    onClick={() => {
                      element.quantity -= 1;
                    }}
                  />
                </h3>
                <div  style={{ position: "absolute", top: "-0px", right: "10px" }}>
                  <img
                    src={element.image}
                    alt={element.name}
                    height="100"
                    width="100"
                    className=" "
                   
                  />
                  <ImBin className="text-danger fs-4 pointer ms-3"/>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Cart;
