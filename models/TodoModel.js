const mongoose = require("mongoose")
 
const todoSchema =  new mongoose.Schema({
    text : {
        type : "string",
        require : true
    }
})

module.exports = mongoose.model('todos',todoSchema);