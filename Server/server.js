const express = require("express");
const db = require("./connect");
// const cors = require('cors')

//import the pizza modal
const Pizza = require("./Modal/Pizza.Modal");
const app = express();

// app.options("*", cors())

//Route
const PizzaRoute = require("./Routes/Pizzas");

// app.use(function(req,res){
//   res.header("Access-Control-Allow-Origin", "*");
// })

app.use("/api/pizzas/", PizzaRoute); //adding route for /api/pizzas/

// app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server running");
  
});
app.get("/data", (req, res) => {
  const data = Pizza.find({}, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

app.listen(5000, (req, res) => {
  console.log("Running");
});
