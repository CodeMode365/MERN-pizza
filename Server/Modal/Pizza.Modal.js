const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema(
  {
    id: Number,
    name: {
      type: String,
      required: true,
    },
    varients: [],
    prices: {},
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Pizza = mongoose.model("pizza", pizzaSchema);

module.exports = Pizza;
