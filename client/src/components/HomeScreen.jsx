import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizzas from "../assets/PizzaData";
import { getPizzas } from "../Redux/Actions/Operations";
import Pizza from "./Pizza";
const HomeScreen = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizzas());
  }, []);

  return (
    <>
      <div className="row  mx-5  ">
        {Pizzas.map((pizza) => {
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
