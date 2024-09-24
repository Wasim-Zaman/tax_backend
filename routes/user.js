const express = require('express');

const userController = require('../controllers/user');
const isAuth = require('../middleware/isAuth');
const isAdmin = require('../middleware/isAdmin');

const router = express.Router();

// Version 1 routes
router.post('/v1/register', isAdmin, userController.register);
router.post('/v1/login', userController.login);
router.get('/v1/getUser', isAuth, userController.getUser);
router.get('/v1/getUser/:id', userController.getUserById);
router.put('/v1/updateUser/:id', isAdmin, userController.updateUserById);
router.delete('/v1/deleteUser/:id', isAdmin, userController.deleteUserById);
router.get('/v1/getUsers', userController.getUsers);

module.exports = router;
