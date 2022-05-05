const addManualService = require('../service/AddDocumentService');

const addManualController = async (req, res) => {
    const manual = req.body;
    try {
        const data = await addManualService.addManual(manual);
        res.json(data)
    } catch (e) {
        res.json(e)
    }
}

const addArchiveController = async (req, res) => {
    const manual = req.body;
    try {
        const data = await addManualService.addArchive(manual);
        res.json(data)
    } catch (e) {
        res.json(e)
    }
}

const addOnlineController = async (req, res) => {
    const manual = req.body;
    try {
        const data = await addManualService.addOnline(manual);
        res.json(data)
    } catch (e) {
        res.json(e)
    }
}

module.exports = {addManualController, addArchiveController, addOnlineController};
