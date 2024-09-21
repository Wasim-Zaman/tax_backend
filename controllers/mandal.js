const Mandal = require('../models/mandal');
const CustomError = require('../utils/error');
const generateResponse = require('../utils/response');

// Create a new mandal
exports.createMandal = async (req, res, next) => {
  try {
    const { name, numberOfGramaPanchayati } = req.body;

    const newMandal = await Mandal.create({
      name,
      numberOfGramaPanchayati,
    });

    res.status(201).json(generateResponse(201, true, 'Mandal created successfully', newMandal));
  } catch (error) {
    console.log(`Error in createMandal: ${error.message}`);
    next(error);
  }
};

// Get mandal by ID
exports.getMandalById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const mandal = await Mandal.findById(id);
    if (!mandal) {
      throw new CustomError('Mandal not found', 404);
    }
    res.status(200).json(generateResponse(200, true, 'Mandal found successfully', mandal));
  } catch (error) {
    console.log(`Error in getMandalById: ${error.message}`);
    next(error);
  }
};

// Update mandal by ID
exports.updateMandalById = async (req, res, next) => {
  const { id } = req.params;
  const { name, numberOfGramaPanchayati } = req.body;

  try {
    const updatedMandal = await Mandal.updateById(id, {
      name,
      numberOfGramaPanchayati,
    });

    res.status(200).json(generateResponse(200, true, 'Mandal updated successfully', updatedMandal));
  } catch (error) {
    console.log(`Error in updateMandalById: ${error.message}`);
    next(error);
  }
};

// Delete mandal by ID
exports.deleteMandalById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedMandal = await Mandal.deleteById(id);
    if (!deletedMandal) {
      throw new CustomError('Mandal not found', 404);
    }

    res.status(200).json(generateResponse(200, true, 'Mandal deleted successfully'));
  } catch (error) {
    console.log(`Error in deleteMandalById: ${error.message}`);
    next(error);
  }
};

// Get all mandals with pagination
exports.getMandals = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, query = '' } = req.query;

    const mandals = await Mandal.get(Number(page), Number(limit), query);

    if (!mandals.data.length) {
      throw new CustomError('No mandals found', 404);
    }

    res.status(200).json(generateResponse(200, true, 'Mandals retrieved successfully', mandals));
  } catch (error) {
    console.log(`Error in getMandals: ${error.message}`);
    next(error);
  }
};
