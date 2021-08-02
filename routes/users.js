const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/getUser/:id', usersController.getUser);
router.post('/login', usersController.login);
router.post('/register', usersController.register);

module.exports = router;