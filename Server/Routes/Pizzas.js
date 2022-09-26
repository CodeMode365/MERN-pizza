const Router = require("express").Router();

const Pizza = require("../Modal/Pizza.Modal");

Router.get("/", async (req, res) => {
  try {
    const Data = await Pizza.find();
    res.send(Data);
  } catch (error) {
    return res.status(400).json({ Message: error });
  }
});

module.exports = Router