const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');



router.get('/new', destinationsCtrl.new);
//router.get('/:id', destinationsCtrl.show);
router.post('/', destinationsCtrl.create);
router.delete('/:id', destinationsCtrl.deleteDestination);



module.exports = router