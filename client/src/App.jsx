import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import HomeScreen from "./components/HomeScreen";
// import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomeScreen/>}/>
          {/* <Route path="/login" exact element={<Login/>}/> */}
          <Route path="/register" exact element={<Register/>}/>
          <Route path="/cart" exact element={<Cart/>}/>
       
       
        {/* <Route path="*" element={<h2>Error Page</h2>}/> */}
      </Routes>
      </Router>
    </>
  );
};

export default App;
