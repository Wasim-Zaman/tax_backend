const PanchayatiProfile = require('../models/panchayatiProfile');
const CustomError = require('../utils/error');
const response = require('../utils/response');

// Create a new PanchayatiProfile
exports.createPanchayatiProfile = async (req, res, next) => {
  try {
    const {
      area,
      population,
      numberOfHabitations,
      houseHolds,
      numberOfEmployees,
      waterSupplyTanks,
      tapConnections,
      roadLength,
      drainageLength,
      streetLights,
      communityHalls,
      sweepers,
      tricycles,
      tractors,
      vans,
      foggingMachines,
      cheruvulu,
      coconutTrees,
      assessmentNumber,
      sanitationMaterials,
      panchayatiShops,
      otherAssets,
      neighbouringPropertyNorth, // New field
      inputHelperText, // New field
      numberOfPrimarySchools, // New field
      numberOfHighSchools, // New field
      numberOfAnganwadiCenters, // New field
      numberOfVillageClinics, // New field
    } = req.body;

    const newPanchayatiProfile = await PanchayatiProfile.create({
      area,
      population,
      numberOfHabitations,
      houseHolds,
      numberOfEmployees,
      waterSupplyTanks,
      tapConnections,
      roadLength,
      drainageLength,
      streetLights,
      communityHalls,
      sweepers,
      tricycles,
      tractors,
      vans,
      foggingMachines,
      cheruvulu,
      coconutTrees,
      assessmentNumber,
      sanitationMaterials,
      panchayatiShops,
      otherAssets,
      neighbouringPropertyNorth, // New field
      inputHelperText, // New field
      numberOfPrimarySchools, // New field
      numberOfHighSchools, // New field
      numberOfAnganwadiCenters, // New field
      numberOfVillageClinics, // New field
      userId: req.user.id,
      panchayatId: req.user.panchayatId,
    });

    res.status(201).json(response(201, true, 'PanchayatiProfile created successfully', newPanchayatiProfile));
  } catch (error) {
    console.log(`Error in createPanchayatiProfile: ${error.message}`);
    next(error);
  }
};

// Get PanchayatiProfile by User ID
exports.getPanchayatiProfileByUserId = async (req, res, next) => {
  try {
    const panchayatiProfiles = await PanchayatiProfile.findByUserId(req.user.id);

    if (!panchayatiProfiles.length) {
      throw new CustomError('No PanchayatiProfile found for the given userId', 404);
    }

    res.status(200).json(response(200, true, 'PanchayatiProfile found successfully', panchayatiProfiles));
  } catch (error) {
    console.log(`Error in getPanchayatiProfileByUserId: ${error.message}`);
    next(error);
  }
};

// Get PanchayatiProfile by ID
exports.getPanchayatiProfileById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const panchayatiProfile = await PanchayatiProfile.findById(id);
    if (!panchayatiProfile) {
      throw new CustomError('PanchayatiProfile not found', 404);
    }
    res.status(200).json(response(200, true, 'PanchayatiProfile found successfully', panchayatiProfile));
  } catch (error) {
    console.log(`Error in getPanchayatiProfileById: ${error.message}`);
    next(error);
  }
};

// Update a PanchayatiProfile by ID
exports.updatePanchayatiProfileById = async (req, res, next) => {
  const { id } = req.params;
  const {
    area,
    population,
    numberOfHabitations,
    houseHolds,
    numberOfEmployees,
    waterSupplyTanks,
    tapConnections,
    roadLength,
    drainageLength,
    streetLights,
    communityHalls,
    sweepers,
    tricycles,
    tractors,
    vans,
    foggingMachines,
    cheruvulu,
    coconutTrees,
    assessmentNumber,
    sanitationMaterials,
    panchayatiShops,
    otherAssets,
    neighbouringPropertyNorth, // New field
    inputHelperText, // New field
    numberOfPrimarySchools, // New field
    numberOfHighSchools, // New field
    numberOfAnganwadiCenters, // New field
    numberOfVillageClinics, // New field
  } = req.body;

  try {
    const updateData = {};

    if (area) updateData.area = area;
    if (population) updateData.population = population;
    if (numberOfHabitations) updateData.numberOfHabitations = numberOfHabitations;
    if (houseHolds) updateData.houseHolds = houseHolds;
    if (numberOfEmployees) updateData.numberOfEmployees = numberOfEmployees;
    if (waterSupplyTanks) updateData.waterSupplyTanks = waterSupplyTanks;
    if (tapConnections) updateData.tapConnections = tapConnections;
    if (roadLength) updateData.roadLength = roadLength;
    if (drainageLength) updateData.drainageLength = drainageLength;
    if (streetLights) updateData.streetLights = streetLights;
    if (communityHalls) updateData.communityHalls = communityHalls;
    if (sweepers) updateData.sweepers = sweepers;
    if (tricycles) updateData.tricycles = tricycles;
    if (tractors) updateData.tractors = tractors;
    if (vans) updateData.vans = vans;
    if (foggingMachines) updateData.foggingMachines = foggingMachines;
    if (cheruvulu) updateData.cheruvulu = cheruvulu;
    if (coconutTrees) updateData.coconutTrees = coconutTrees;
    if (assessmentNumber) updateData.assessmentNumber = assessmentNumber;
    if (sanitationMaterials) updateData.sanitationMaterials = sanitationMaterials;
    if (panchayatiShops) updateData.panchayatiShops = panchayatiShops;
    if (otherAssets) updateData.otherAssets = otherAssets;
    if (neighbouringPropertyNorth) updateData.neighbouringPropertyNorth = neighbouringPropertyNorth; // New field
    if (inputHelperText) updateData.inputHelperText = inputHelperText; // New field
    if (numberOfPrimarySchools) updateData.numberOfPrimarySchools = numberOfPrimarySchools; // New field
    if (numberOfHighSchools) updateData.numberOfHighSchools = numberOfHighSchools; // New field
    if (numberOfAnganwadiCenters) updateData.numberOfAnganwadiCenters = numberOfAnganwadiCenters; // New field
    if (numberOfVillageClinics) updateData.numberOfVillageClinics = numberOfVillageClinics; // New field

    const updatedPanchayatiProfile = await PanchayatiProfile.updateById(id, updateData);

    res.status(200).json(response(200, true, 'PanchayatiProfile updated successfully', updatedPanchayatiProfile));
  } catch (error) {
    console.log(`Error in updatePanchayatiProfileById: ${error.message}`);
    next(error);
  }
};

// Delete a PanchayatiProfile by ID
exports.deletePanchayatiProfileById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const panchayatiProfile = await PanchayatiProfile.findById(id);
    if (!panchayatiProfile) {
      throw new CustomError('PanchayatiProfile not found', 404);
    }

    await PanchayatiProfile.deleteById(id);

    res.status(200).json(response(200, true, 'PanchayatiProfile deleted successfully'));
  } catch (error) {
    console.log(`Error in deletePanchayatiProfileById: ${error.message}`);
    next(error);
  }
};

// Get all PanchayatiProfiles with pagination
exports.getPanchayatiProfiles = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, query = '' } = req.query;

    const panchayatiProfiles = await PanchayatiProfile.get(Number(page), Number(limit), query);

    if (!panchayatiProfiles.data.length) {
      throw new CustomError('No PanchayatiProfiles found', 404);
    }

    res.status(200).json(response(200, true, 'PanchayatiProfiles retrieved successfully', panchayatiProfiles));
  } catch (error) {
    console.log(`Error in getPanchayatiProfiles: ${error.message}`);
    next(error);
  }
};
