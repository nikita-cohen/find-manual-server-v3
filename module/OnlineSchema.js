const mongoose = require('mongoose');

const onlineSchema = new mongoose.Schema({
    "url" : {type : String},
    "title" : {type : String, unique : true}
});

onlineSchema.index({name: 'text', 'title': 'text'});
module.exports = mongoose.model("onlineManuals", onlineSchema, "onlineManuals");
