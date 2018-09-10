const express = require('express');
const router = express.Router();
const controller = require('./controllerUser');


router.get('/',controller.index);
router.post ('/', controller.create);
//router.get('/:id',controller.get);

module.exports = router;
