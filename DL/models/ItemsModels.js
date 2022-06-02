const mongoos = require("mongoose")
const ItemSchema = new mongoos.Schema(
    {
        id: {
            type: Number,
            unique: true
        },
        title: {
            type: String
        },
        price: {
            type: Number
        },
        descriptiones: {
            type: String
        },
        category: {
            type: String
        },
        image: {
            type: String
        },
        isActive: {
            type: Boolean,
            default: true
        }
    })
    const ItemModel = mongoos.model("item",ItemSchema)
module.exports= ItemModel