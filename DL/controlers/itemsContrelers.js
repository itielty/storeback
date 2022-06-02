const item = require("../models/ItemsModels")

// item.insertMany(allItems).then(res=> console.log(res)).catch(err=> console.log(err))\
async function create(data){
    const newItem = await item.create(data)
    return newItem
}
async function find(filter={}) {
    const foundArr = await item.find({...filter})
        console.log(foundArr);
    return foundArr
}
async function findByID(id) {
    const founditem = await item.findById(id)
        console.log(founditem);
    return founditem
}
async function deleatone(id) {
    const updateItem = await item.findByIdAndUpdate(id, { isActive: false }, { new: true })
    console.log(updateItem);
    return updateItem
}
async function changeingItem({id,newData}){
    const updateItem = await item.findByIdAndUpdate(id, newData, { new: true })
    console.log(updateItem);
    return updateItem
}
module.exports = {find,findByID,deleatone,changeingItem,create}