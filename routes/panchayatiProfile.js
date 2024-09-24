const express = require('express');
const controller = require('../controllers/panchayatiProfile');

const isAuth = require('../middleware/isAuth');

const router = express.Router();

// Version 1 routes for PanchayatiProfile
router.post('/v1/createPanchayatiProfile', isAuth, controller.createPanchayatiProfile);
router.get('/v1/getPanchayatiProfile/:id', controller.getPanchayatiProfileById);
router.put('/v1/updatePanchayatiProfile/:id', controller.updatePanchayatiProfileById);
router.delete('/v1/deletePanchayatiProfile/:id', controller.deletePanchayatiProfileById);
router.get('/v1/getAllPanchayatiProfiles', controller.getPanchayatiProfiles);
router.get('/v1/getPanchayatiProfileByUserId', isAuth, controller.getPanchayatiProfileByUserId);

module.exports = router;
