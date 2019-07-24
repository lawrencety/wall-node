const express = require('express');
const router = express.Router();
const wallController = require('../controllers/wallController')

router.get('/wall/new', wallController.new);
router.post('/wall/create', wallController.create);
router.get('/wall/:id', wallController.show);
router.get('/wall', wallController.index);

module.exports = router;
