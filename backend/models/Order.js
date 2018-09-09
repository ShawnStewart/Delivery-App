const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const OrderSchema = new Schema({
  restaurant: {
    type: ObjectId,
    ref: "restaurants"
  },
  customer: {
    type: ObjectId,
    ref: "customers"
  },
  driver: {
    type: ObjectId,
    ref: "drivers"
  },
  items: [
    {
      item: {
        type: ObjectId,
        ref: "menuitems"
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  subtotal: {
    type: Number,
    required: true
  },
  tip: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  mileage: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = Order = mongoose.model("orders", OrderSchema);
