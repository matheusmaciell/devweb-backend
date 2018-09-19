const express = require('express');
const router = express.Router();
const controller = require('./controllerClass');


router.get ('/', controller.index);
router.get('/:id',controller.index);

module.exports = router;
