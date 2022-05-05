const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo_db:27017/findManual_selected').then()
    .catch(e => {
        console.log(e)
    })
