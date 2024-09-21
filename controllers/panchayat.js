const Panchayat = require('../models/panchayat');
const CustomError = require('../utils/error');
const generateResponse = require('../utils/response');

// Create a new panchayat
exports.createPanchayat = async (req, res, next) => {
  try {
    const {
      name,
      numberOfHabitations,
      libraryCess,
      waterCess,
      lightingCess,
      drainageCess,
      sportsCess,
      fireCess,
      mandalId,
    } = req.body;

    const newPanchayat = await Panchayat.create({
      name,
      numberOfHabitations,
      libraryCess,
      waterCess,
      lightingCess,
      drainageCess,
      sportsCess,
      fireCess,
      mandalId,
    });

    res.status(201).json(generateResponse(201, true, 'Panchayat created successfully', newPanchayat));
  } catch (error) {
    console.log(`Error in createPanchayat: ${error.message}`);
    next(error);
  }
};

// Get panchayat by ID
exports.getPanchayatById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const panchayat = await Panchayat.findById(id);
    if (!panchayat) {
      throw new CustomError('Panchayat not found', 404);
    }
    res.status(200).json(generateResponse(200, true, 'Panchayat found successfully', panchayat));
  } catch (error) {
    console.log(`Error in getPanchayatById: ${error.message}`);
    next(error);
  }
};

// Update panchayat by ID
exports.updatePanchayatById = async (req, res, next) => {
  const { id } = req.params;
  const {
    name,
    numberOfHabitations,
    libraryCess,
    waterCess,
    lightingCess,
    drainageCess,
    sportsCess,
    fireCess,
    mandalId,
  } = req.body;

  try {
    const updatedPanchayat = await Panchayat.updateById(id, {
      name,
      numberOfHabitations,
      libraryCess,
      waterCess,
      lightingCess,
      drainageCess,
      sportsCess,
      fireCess,
      mandalId,
    });

    res.status(200).json(generateResponse(200, true, 'Panchayat updated successfully', updatedPanchayat));
  } catch (error) {
    console.log(`Error in updatePanchayatById: ${error.message}`);
    next(error);
  }
};

// Delete panchayat by ID
exports.deletePanchayatById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedPanchayat = await Panchayat.deleteById(id);
    if (!deletedPanchayat) {
      throw new CustomError('Panchayat not found', 404);
    }

    res.status(200).json(generateResponse(200, true, 'Panchayat deleted successfully'));
  } catch (error) {
    console.log(`Error in deletePanchayatById: ${error.message}`);
    next(error);
  }
};

// Get all panchayats with pagination
exports.getPanchayats = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, query = '' } = req.query;

    const panchayats = await Panchayat.get(Number(page), Number(limit), query);

    if (!panchayats.data.length) {
      throw new CustomError('No panchayats found', 404);
    }

    res.status(200).json(generateResponse(200, true, 'Panchayats retrieved successfully', panchayats));
  } catch (error) {
    console.log(`Error in getPanchayats: ${error.message}`);
    next(error);
  }
};
