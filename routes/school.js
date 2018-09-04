const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerSchool');

router.get ('/', controller.get);
router.get('/:id',controller.get);


module.exports = router;
