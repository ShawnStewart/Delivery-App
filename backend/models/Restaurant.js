const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const RestaurantSchema = new Schema({});

module.exports = Restaurant = mongoose.model("restaurants", RestaurantSchema);
