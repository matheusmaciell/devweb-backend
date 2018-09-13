const express = require('express');
const router = express.Router();
const controller = require('./controllerSchool');


router.get('/',controller.index);
router.post('/', controller.create);
router.get('/:school_id',controller.show);
router.put('/:school_id', controller.update);
router.delete('/:school_id', controller.delete);

module.exports = router;