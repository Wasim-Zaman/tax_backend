const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class Panchayat {
  static async findById(id) {
    try {
      return await prisma.panchayat.findUnique({
        where: { id: id },
        include: { users: true, mandal: true }, // Include related Users and Mandal
      });
    } catch (error) {
      console.error('Error finding panchayat by id:', error);
      throw error;
    }
  }

  static async create(data) {
    try {
      console.log(`Creating panchayat with data: ${JSON.stringify(data)}`);
      return await prisma.panchayat.create({
        data: {
          name: data.name,
          numberOfHabitations: data.numberOfHabitations,
          libraryCess: data.libraryCess,
          waterCess: data.waterCess,
          lightingCess: data.lightingCess,
          drainageCess: data.drainageCess,
          sportsCess: data.sportsCess,
          fireCess: data.fireCess,
          mandal: {
            connect: {
              id: data.mandalId, // Connect Mandal relation
            },
          },
        },
        include: { users: true, mandal: true },
      });
    } catch (error) {
      console.error('Error creating panchayat:', error);
      throw error;
    }
  }

  static async updateById(id, data) {
    try {
      console.log(`Updating panchayat with ID ${id} and data: ${JSON.stringify(data)}`);
      return await prisma.panchayat.update({
        where: { id: id },
        data: {
          ...data,
          mandal: data.mandalId
            ? {
                connect: { id: data.mandalId }, // Update Mandal relation
              }
            : undefined,
        },
        include: { users: true, mandal: true },
      });
    } catch (error) {
      console.error(`Error updating panchayat with id ${id}:`, error.message);
      throw new Error(`Unable to update panchayat with id ${id}`);
    }
  }

  static async deleteById(id) {
    try {
      console.log(`Deleting panchayat with ID ${id}`);
      return await prisma.panchayat.delete({
        where: { id: id },
      });
    } catch (error) {
      console.error('Error deleting panchayat by id:', error);
      throw error;
    }
  }

  static async getAll() {
    try {
      return await prisma.panchayat.findMany({
        include: { users: true, mandal: true }, // Include related Users and Mandal
      });
    } catch (error) {
      console.error('Error finding all panchayats:', error);
      throw error;
    }
  }

  static async get(page = 1, limit = 10, query = '') {
    try {
      const skip = (page - 1) * limit;

      const where = query
        ? {
            OR: [{ name: { contains: query } }],
          }
        : {};

      const panchayats = await prisma.panchayat.findMany({
        skip,
        take: limit,
        where,
        include: { users: true, mandal: true },
      });

      const totalPanchayats = await prisma.panchayat.count({ where });

      const totalPages = Math.ceil(totalPanchayats / limit);

      return {
        data: panchayats,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: totalPanchayats,
          itemsPerPage: limit,
        },
      };
    } catch (error) {
      console.error('Error getting panchayats with pagination and search:', error);
      throw error;
    }
  }
}

module.exports = Panchayat;
