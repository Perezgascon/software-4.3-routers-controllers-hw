const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//POST Login

router.post('/login', userController.userLogin);



//POST resgister


module.exports = router;