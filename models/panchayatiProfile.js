const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class PanchayatiProfile {
  // Find PanchayatiProfile by ID
  static async findById(id) {
    try {
      return await prisma.panchayatiProfile.findUnique({
        where: { id: id },
        include: { user: true, panchayat: true },
      });
    } catch (error) {
      console.error('Error finding PanchayatiProfile by id:', error);
      throw error;
    }
  }

  // Find by user id
  static async findByUserId(userId) {
    try {
      return await prisma.panchayatiProfile.findMany({
        where: { userId: userId },
        include: { user: true, panchayat: true },
      });
    } catch (error) {
      console.error('Error finding PanchayatiProfile by userId:', error);
      throw error;
    }
  }

  // Create PanchayatiProfile
  static async create(data) {
    try {
      console.log(`Creating PanchayatiProfile with data: ${JSON.stringify(data)}`);
      return await prisma.panchayatiProfile.create({
        data: {
          area: data.area,
          population: data.population,
          numberOfHabitations: data.numberOfHabitations,
          houseHolds: data.houseHolds,
          numberOfEmployees: data.numberOfEmployees,
          waterSupplyTanks: data.waterSupplyTanks,
          tapConnections: data.tapConnections,
          roadLength: data.roadLength,
          drainageLength: data.drainageLength,
          streetLights: data.streetLights,
          communityHalls: data.communityHalls,
          sweepers: data.sweepers,
          tricycles: data.tricycles,
          tractors: data.tractors,
          vans: data.vans,
          foggingMachines: data.foggingMachines,
          cheruvulu: data.cheruvulu,
          coconutTrees: data.coconutTrees,
          assessmentNumber: data.assessmentNumber,
          sanitationMaterials: data.sanitationMaterials,
          panchayatiShops: data.panchayatiShops,
          neighbouringPropertyNorth: data.neighbouringPropertyNorth, // New field
          inputHelperText: data.inputHelperText, // New field
          otherAssets: data.otherAssets,
          numberOfPrimarySchools: data.numberOfPrimarySchools, // New field
          numberOfHighSchools: data.numberOfHighSchools, // New field
          numberOfAnganwadiCenters: data.numberOfAnganwadiCenters, // New field
          numberOfVillageClinics: data.numberOfVillageClinics, // New field
          user: {
            connect: { id: data.userId },
          },
          panchayat: {
            connect: { id: data.panchayatId },
          },
        },
        include: { user: true, panchayat: true },
      });
    } catch (error) {
      console.error('Error creating PanchayatiProfile:', error);
      throw error;
    }
  }

  // Update PanchayatiProfile by ID
  static async updateById(id, data) {
    try {
      console.log(`Updating PanchayatiProfile with ID ${id} and data: ${JSON.stringify(data)}`);
      return await prisma.panchayatiProfile.update({
        where: { id: id },
        data: {
          ...data,
          user: data.userId
            ? {
                connect: { id: data.userId },
              }
            : undefined,
          panchayat: data.panchayatId
            ? {
                connect: { id: data.panchayatId },
              }
            : undefined,
        },
        include: { user: true, panchayat: true },
      });
    } catch (error) {
      console.error(`Error updating PanchayatiProfile with id ${id}:`, error.message);
      throw new Error(`Unable to update PanchayatiProfile with id ${id}`);
    }
  }

  // Delete PanchayatiProfile by ID
  static async deleteById(id) {
    try {
      console.log(`Deleting PanchayatiProfile with ID ${id}`);
      return await prisma.panchayatiProfile.delete({
        where: { id: id },
      });
    } catch (error) {
      console.error('Error deleting PanchayatiProfile by id:', error);
      throw error;
    }
  }

  // Get all PanchayatiProfiles
  static async getAll() {
    try {
      return await prisma.panchayatiProfile.findMany({
        include: { user: true, panchayat: true },
      });
    } catch (error) {
      console.error('Error finding all PanchayatiProfiles:', error);
      throw error;
    }
  }

  // Paginated search with query
  static async get(page = 1, limit = 10, query = '') {
    try {
      const skip = (page - 1) * limit;

      const where = query
        ? {
            OR: [{ area: { contains: query } }],
          }
        : {};

      const panchayatiProfiles = await prisma.panchayatiProfile.findMany({
        skip,
        take: limit,
        where,
        include: { user: true, panchayat: true },
      });

      const totalPanchayatiProfiles = await prisma.panchayatiProfile.count({ where });

      const totalPages = Math.ceil(totalPanchayatiProfiles / limit);

      return {
        data: panchayatiProfiles,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: totalPanchayatiProfiles,
          itemsPerPage: limit,
        },
      };
    } catch (error) {
      console.error('Error getting PanchayatiProfiles with pagination and search:', error);
      throw error;
    }
  }
}

module.exports = PanchayatiProfile;
