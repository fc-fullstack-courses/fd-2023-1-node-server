const express = require('express');
const UserController = require('../controllers/users.controller');
const userRouter = require('./userRouter');

const router = express.Router();

router.use('/users', userRouter);

router.get('/user', UserController.getUserQuery);


module.exports = router;
