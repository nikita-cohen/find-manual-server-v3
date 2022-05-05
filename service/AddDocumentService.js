const manualSchema = require("../module/ManualSchema");
const archiveSchema = require("../module/ArchiveSchema");
const onlineSchema = require("../module/OnlineSchema");

const addManual = (manual) => {
    return new Promise((resolve, reject) => {
        const newManual = new manualSchema({
            "brand" : manual.brand,
            "category" : manual.category,
            "url" : manual.url,
            "title" : manual.title
        })
        newManual.save((err) => {
            if (err) {
                reject(err)
            } else {
                resolve(newManual)
            }
        })
    })
}

const addArchive = (manual) => {
    return new Promise((resolve, reject) => {
        const newManual = new archiveSchema({
            "url" : manual.url,
            "title" : manual.title
        })
        newManual.save((err) => {
            if (err) {
                reject(err)
            } else {
                resolve(newManual)
            }
        })
    })
}

const addOnline = (manual) => {
    return new Promise((resolve, reject) => {
        const newManual = new onlineSchema({
            "url" : manual.url,
            "title" : manual.title
        })
        newManual.save((err) => {
            if (err) {
                reject(err)
            } else {
                resolve(newManual)
            }
        })
    })
}

module.exports = {addManual, addArchive, addOnline};
