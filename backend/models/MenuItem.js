const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const MenuItemSchema = new Schema({
  restaurant: {
    type: ObjectId,
    ref: "restaurants"
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
});

module.exports = MenuItem = mongoose.model("menuitems", MenuItemSchema);
