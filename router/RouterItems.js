
const func = require("../BL/BL")

function RouterItems(app) {

    app.get("/items/:cat", async (req,res)=>{
        const r = await func.redAllItems(req.params.cat)
        res.send(r)
    })
    app.get("/item/:id", async (req,res)=>{
        const r = await func.oneItem(req.params.id)
        res.send(r)  
    })
    app.delete("/item/:id",async (req,res)=>{
        const r = await func.deletingItem(req.params.id)
        res.send(r)
    })
    app.put("/itemchange/",async (req,res)=>{
        const r = await func.chanegingItems(req.params.id,req.body)//TODO
        res.send(r)
    })
    app.post("/newItem/",async(req,res)=>{
        const r = await func.addingToItems(req.body)//TODO
        res.send(r)
    }) 
}

module.exports = RouterItems