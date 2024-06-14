import mongoose from "mongoose";

const { Schema } = mongoose;

const MenuItemSchema = new Schema({
    id: String,
    item_name: String,
    price: String,
    image: String,
});

const RestaurantSchema = new Schema({
    image: String,
    menuItems: [MenuItemSchema],
    delivery_time: String,
    rating: String,
    restaurants_name: String,
});

export default mongoose.models.MenuItem ||
    mongoose.model("MenuItem", RestaurantSchema);
