const URL= process.env.URL
const mongoose = require("mongoose")
module.exports = 
async () => {
    try {
        await mongoose.connect(URL)
        console.log("working");
    } catch (error) {
          console.log(error);
        }
    }
    
    
