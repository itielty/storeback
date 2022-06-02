
const func = require("../BL/BL")

function RouterItems(app) {

    app.get("/items/:cat", async (req,res)=>{
        const r = await func.redAllItems(req.query.cat)
        res.send(r)
    })
    app.get("/item/:id", async (req,res)=>{
        const r = await func.oneItem(req.query.id)
        res.send(r)  
    })
    app.delete("/item",async (req,res)=>{
        const r = await func.deleting(req.body)
        res.send(r)
    })
    app.put("/itemchange",async (req,res)=>{
        const r = await func.chanegingItems(req.body)
        res.send(r)
    })
    app.post("/newItem",async(req,res)=>{
        const r = await func.addingToItems(req.body)
        res.send(r)
    }) 
}

module.exports = RouterItems