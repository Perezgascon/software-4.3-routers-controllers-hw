const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// GET all users

router.get('/', userController.getAllUsers);

//POST Login

router.post('/login', userController.userLogin);



//POST resgister

router.post('/register', userController.userRegister);


module.exports = router;