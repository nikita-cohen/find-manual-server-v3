const mongoose = require('mongoose');

const archiveSchema = new mongoose.Schema({
    "url" : {type : String},
    "title" : {type : String, unique : true}
});
archiveSchema.index({name: 'text', 'title': 'text'});
module.exports = mongoose.model("archiveCollection", archiveSchema, "archiveCollection");
