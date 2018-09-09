const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const OrderSchema = new Schema({});

module.exports = Order = mongoose.model("orders", OrderSchema);
