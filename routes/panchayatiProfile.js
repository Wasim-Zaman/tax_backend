const express = require('express');
const panchayatiProfileController = require('../controllers/panchayatiProfile');

const router = express.Router();

// Version 1 routes for PanchayatiProfile
router.post('/v1/createPanchayatiProfile', panchayatiProfileController.createPanchayatiProfile);
router.get('/v1/getPanchayatiProfile/:id', panchayatiProfileController.getPanchayatiProfileById);
router.put('/v1/updatePanchayatiProfile/:id', panchayatiProfileController.updatePanchayatiProfileById);
router.delete('/v1/deletePanchayatiProfile/:id', panchayatiProfileController.deletePanchayatiProfileById);
router.get('/v1/getAllPanchayatiProfiles', panchayatiProfileController.getPanchayatiProfiles);

module.exports = router;
