const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user/signup', userController.signUp);
router.post('/user', userController.create);
router.get('/user/signin', userController.signInForm);
router.post('/user/signin', userController.signIn);
router.get('/user/signout', userController.signOut);

module.exports = router;
