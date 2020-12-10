var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.get('/', flightsCtrl.index)
router.get('/:id', flightsCtrl.show)
router.delete('/:id', flightsCtrl.delete)
router.post('/:id/destinations', flightsCtrl.addToDestinations);


module.exports = router;
