var express = require('express');
var router = express.Router();
var controller = require('../controllers/cadastroCtrl.js')

/* Routes. */
router.post('/', controller.create);
router.get('/', controller.read);
router.get('/:id', controller.readId);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
