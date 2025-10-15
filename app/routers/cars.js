var express = require('express');
var router = express.Router();

var carController = require('../controllers/cars');

router.get('/', carController.getAll);
router.post('/', carController.create);
router.get('/:id', carController.getCar);
router.put('/:id', carController.update);
router.delete('/:id', carController.remove);

module.exports = router;