
const func = require("../BL/BL")

function RouterCategory(app) {

    app.get("/", async (req, res) => {
        const r = await func.allCategory()
        res.send(r)
    })

    app.delete("/catDel/:id", async (req, res) => {
        console.log(req.params.id);
        const r = await func.deletingCategory(req.params.id.trim())
        res.send(r)
    })
    app.post("/newCat",async(req,res)=>{
        const r = await func.addingToCat(req.body)
        res.send(r)
    })
    app.put("/chanegCat/:id", async(req, res) => {
        const r = await func.chanegingCat(req.params.id,req.body)
        res.send(r)
})}


module.exports = RouterCategory