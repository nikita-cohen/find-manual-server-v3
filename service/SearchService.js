const manualSchema = require("../module/ManualSchema");
const archiveSchema = require("../module/ArchiveSchema");
const onlineSchema = require("../module/OnlineSchema");

const searchManual = (word) => {
    return new Promise((resolve, reject) => {
        manualSchema.find({$text: {$search: word}},null, {limit: 20},
            async (err, data) => {
                if (err){
                    reject(err)
                } else {
                    resolve(data)
                }
            })
    })
}

const searchOnlineManual = (word) => {
    return new Promise((resolve, reject) => {
        archiveSchema.find({$text: {$search: word}},null, {limit: 20},
            async (err, data) => {
                if (err){
                    reject(err)
                } else {
                    resolve(data)
                }
            })
    })
}

const searchArchiveManual = (word) => {
    return new Promise((resolve, reject) => {
        onlineSchema.find({$text: {$search: word}},null, {limit: 20},
            async (err, data) => {
                if (err){
                    reject(err)
                } else {
                    resolve(data)
                }
            })
    })
}

module.exports = {searchManual, searchOnlineManual, searchArchiveManual}
