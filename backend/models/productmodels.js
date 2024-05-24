const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
	name: String,
	tittle: String,
    price:Number,
    image:String,
})

module.exports = mongoose.model("Product", productSchema)