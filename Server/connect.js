var mongoose = require("mongoose");

//connection mongo db with node js using mongoose
mongoose
  .connect("mongodb://localhost:27017/MERN-pizza", { useNewUrlParser: true })
  .then(() => {
    console.log("Connection to server success");
  })
  .catch((error) => {
    console.log("connection error :" + error);
  });
  const db = mongoose.connection;

module.exports = db;
