const express = require('express');
const mandalController = require('../controllers/mandal');

const router = express.Router();

// Version 1 routes
router.post('/v1/createMandal', mandalController.createMandal);
router.get('/v1/getMandal/:id', mandalController.getMandalById);
router.put('/v1/updateMandal/:id', mandalController.updateMandalById);
router.delete('/v1/deleteMandal/:id', mandalController.deleteMandalById);
router.get('/v1/getAllMandals', mandalController.getMandals);

module.exports = router;
