const IC = require("../DL/controlers/itemsContrelers")
const Cc = require("../DL/controlers/categoryControlers")
async function oneItem(id) {
    const item = await IC.findByID(id)
    console.log(item);
    return item
}
async function redAllItems(cat) {
    const list = await IC.find({category: cat})
    console.log(list);
    return list
}
async function allCategory() {
    const cat = await Cc.find()
    console.log(cat);
    return cat
}
async function deletingItem(id) {
    return await  IC.deleatone(id)
}
async function deletingCategory(id) {
   return await Cc.deleatone(id)
}
async function chanegingItems(data) {
  return await  IC.changeingItem(data)
}
async function chanegingCat(id,data) {
  return await  Cc.changeingCat(id,data)
}
async function addingToCat(data) {
    // const newCat = {
    //     category:{} data
    // }
    await Cc.creat(data)
    return await Cc.find()

}
async function addingToItems(data) {
    const newItem = {
        id:data.id,
        title:data.title,
        price:data.price,
        descriptiones: data.descriptiones,
        category: data.category,
        image: data.image
    }
    await IC.create(newItem)
    return await IC.find()
}
module.exports = { allCategory, redAllItems, oneItem, deletingItem, deletingCategory, chanegingCat, chanegingItems, addingToCat,addingToItems }