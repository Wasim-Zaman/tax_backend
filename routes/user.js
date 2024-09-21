const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

// Version 1 routes
router.post('/v1/register', userController.register);
router.post('/v1/login', userController.login);
router.get('/v1/getUser/:id', userController.getUserById);
router.put('/v1/updateUser/:id', userController.updateUserById);
router.delete('/v1/deleteUser/:id', userController.deleteUserById);
router.get('/v1/getAllUsers', userController.getUsers);

module.exports = router;
