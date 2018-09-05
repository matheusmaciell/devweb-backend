const express = require('express');
const router = express.Router();
const controller = require('./controllerUser');

router.get ('/', controller.get);
router.get('/:id',controller.get);

module.exports = router;
