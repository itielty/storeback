const mongoos = require("mongoose")
const CategorySchema = new mongoos.Schema({
    category:{
        type:String
    },
    isActive: {
        type: Boolean,
        default: true
    }
})
const categoryModel = mongoos.model("category",CategorySchema)
module.exports = categoryModel