const  mongoose = require("mongoose");
let schema = mongoose.Schema
let articleschema = new schema({
    id:Number,
    title : String,
    body : String
})

let article = mongoose.model("article",articleschema)

module.exports = article