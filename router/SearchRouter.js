const express = require('express');
const router = express.Router();
const searchController = require("../controller/SearchController")

router.get('/:name', searchController.searchManualController);
router.get('/enter/:name', searchController.searchEnterManualController);
module.exports = router;
