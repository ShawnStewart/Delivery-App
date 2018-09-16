const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },

  phone: {
    type: Number,
    required: true
  },
  minimum: {
    type: Number,
    required: true
  },
  rating: Number,
  menuItems: [
    {
      type: ObjectId,
      ref: "menuitems"
    }
  ]
});

module.exports = Restaurant = mongoose.model("restaurants", RestaurantSchema);
