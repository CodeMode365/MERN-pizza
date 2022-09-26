import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas } from "../Redux/Actions/DbOperations";
import Pizza from "./Pizza";
const HomeScreen = () => {

  const dispatch = useDispatch();

  const pizzaState = useSelector(state=>state.getAllPizzas)
  const {pizzas, error, loading} = pizzaState;
  useEffect(() => {
    dispatch(getPizzas());
  }, []);

  return (
    <>
      <div className="row  mx-5  ">
        {loading?(<h2 className="text-light">Loading...</h2>):error?error:pizzas?.map((pizza) => {
          return (
            <div className=" col-md-6 col-lg-4 col-xl-3" key={pizza.id}>
              <div>
                <Pizza data={pizza} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeScreen;
