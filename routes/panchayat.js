const express = require('express');
const panchayatController = require('../controllers/panchayat');

const router = express.Router();

// Version 1 routes
router.post('/v1/createPanchayat', panchayatController.createPanchayat);
router.get('/v1/getPanchayat/:id', panchayatController.getPanchayatById);
router.put('/v1/putPanchayat/:id', panchayatController.updatePanchayatById);
router.delete('/v1/deletePanchayat/:id', panchayatController.deletePanchayatById);
router.get('/v1/getAllPanchayats/', panchayatController.getPanchayats);

module.exports = router;
