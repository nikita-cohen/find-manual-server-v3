const searchService = require('../service/SearchService')

const searchManualController = async (req, res) => {
    const manualName = req.params.name;
    try {
        const onlineManualData = await searchService.searchOnlineManual(manualName);
        const manualData = await searchService.searchManual(manualName);
        const archiveManualData = await searchService.searchArchiveManual(manualName);

        const newDataArray = [...onlineManualData, ...manualData, ...archiveManualData];
        res.json(newDataArray);
    } catch (e) {
        res.json(e)
    }
}

const searchEnterManualController = async (req, res) => {
    const manualName = req.params.name;
    try {
        const onlineManualData = await searchService.searchEnterOnlineManual(manualName);
        const manualData = await searchService.searchEnterManual(manualName);
        const archiveManualData = await searchService.searchEnterArchiveManual(manualName);

        const newDataArray = [...onlineManualData, ...manualData, ...archiveManualData];
        res.json(newDataArray);
    } catch (e) {
        res.json(e)
    }
}

module.exports = {searchManualController, searchEnterManualController}
