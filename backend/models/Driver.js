const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
//Driver

const DriverSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  vehicle: {
    year: { type: Number, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true }
  },
  orders: [
    {
      type: ObjectId,
      ref: "orders"
    }
  ]
});

module.exports = Driver = mongoose.model("drivers", DriverSchema);
