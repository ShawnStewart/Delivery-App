const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const CustomerSchema = new Schema({});

module.exports = Customer = mongoose.model("customers", CustomerSchema);
