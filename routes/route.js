const express = require('express');
const router = express.Router();
const coinController = require('../controller/coinController')

//router.get("/cryptocurrency",coinController.getcryptocurrency)
router.get('/cryptocurrency', coinController.getcoin)


module.exports = router;
