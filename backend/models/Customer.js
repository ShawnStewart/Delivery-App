const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const CustomerSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  birthday: Date,
  address: {
    street: String,
    unit: String,
    city: String,
    state: String,
    zip: Number
  },
  card: {
    name: String,
    number: Number,
    expiration: Number //Enter in as 0219 -> meaning 02/19 or Feb 2019
  },
  orders: [
    {
      type: ObjectId,
      ref: "orders"
    }
  ]
});

module.exports = Customer = mongoose.model("customers", CustomerSchema);
