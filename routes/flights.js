var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/new', flightsCtrl.new);
router.get('/', flightsCtrl.index);

module.exports = router;
