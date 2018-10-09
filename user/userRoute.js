const express = require('express');
const router = express.Router();
const controller = require('./controllerUser');
const auth = require('../auth/auth.controller');

router.route('/')
    .get(auth.authenticate,controller.index);
router.post('/', controller.create);
router.get('/:user_id',controller.show);
router.put('/:user_id', controller.update);
router.delete('/:user_id', controller.delete);

module.exports = router;
