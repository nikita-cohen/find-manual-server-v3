const express = require('express');
const router = express.Router();
const manualController = require("../controller/AddDocumentController")

router.post('/', manualController.addManualController);
router.post('/archive', manualController.addArchiveController);
router.post('/online', manualController.addOnlineController);

module.exports = router;
