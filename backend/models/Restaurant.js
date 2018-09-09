const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const RestaurantSchema = new Schema(
    {
        name:  {type: String, required: true},
        location: {type: String, required: true},
        minimum:{type:Number, required: true}
        rating: Number
        menuItems: [
            type: ObjectId,
            ref: 'menuitems'
        ]
    }
);

module.exports = Restaurant = mongoose.model("restaurants", RestaurantSchema);
