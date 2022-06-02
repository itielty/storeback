const category = require("../models/categoryModels")
const cat = [{category: "electronics"},{category: "women's clothing"},{category: "jewelery"},{category: "men's clothing"}]
// category.insertMany(cat)
async function creat(data){
    const newCat = await category.create(data)
    return newCat
}
async function find() {
    const founditem = await category.find()
        console.log(founditem);
    return founditem
}

async function deleatone(id) {
    const updateCategory = await category.findByIdAndUpdate(id, { isActive: false }, { new: true })
    console.log(updateCategory);
    return updateCategory
}

async function changeingCat(id,newData){
    const updateCategory = await item.findByIdAndUpdate(id, newData, { new: true })
    console.log(updateCategory);
    return updateCategory
}
module.exports = {find,deleatone,changeingCat,creat}