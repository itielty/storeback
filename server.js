const expres = require("express"),
    app = expres(),
    cors = require("cors"),
    PORT = process.env.PORT||5443
    
    require("dotenv").config()
    
app.use(cors())
app.use(expres.json())
require('./DB.js')()
const routerItems = require("./router/RouterItems")
const routerCategory = require("./router/RouterCategory")
routerCategory(app)
routerItems(app)


app.listen(PORT, () => console.log("server is up"))
