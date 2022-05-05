const mongoose = require('mongoose');

const manualSchema = new mongoose.Schema({
    "brand" : {type : String},
    "category" : {type : String},
    "url" : {type : String},
    "title" : {type : String, unique : true}
});
manualSchema.index({name: 'text', 'title': 'text'});
module.exports = mongoose.model("manuals", manualSchema, "manuals");
