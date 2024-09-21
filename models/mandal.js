const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class Mandal {
  static async findById(id) {
    try {
      return await prisma.mandal.findUnique({
        where: { id: id },
        include: { panchayats: true }, // Include related Panchayats
      });
    } catch (error) {
      console.error('Error finding mandal by id:', error);
      throw error;
    }
  }

  static async create(data) {
    try {
      console.log(`Creating mandal with data: ${JSON.stringify(data)}`);
      return await prisma.mandal.create({
        data: {
          name: data.name,
          numberOfGramaPanchayati: data.numberOfGramaPanchayati,
        },
        include: { panchayats: true },
      });
    } catch (error) {
      console.error('Error creating mandal:', error);
      throw error;
    }
  }

  static async updateById(id, data) {
    try {
      console.log(`Updating mandal with ID ${id} and data: ${JSON.stringify(data)}`);
      return await prisma.mandal.update({
        where: { id: id },
        data: {
          ...data,
        },
        include: { panchayats: true },
      });
    } catch (error) {
      console.error(`Error updating mandal with id ${id}:`, error.message);
      throw new Error(`Unable to update mandal with id ${id}`);
    }
  }

  static async deleteById(id) {
    try {
      console.log(`Deleting mandal with ID ${id}`);
      return await prisma.mandal.delete({
        where: { id: id },
      });
    } catch (error) {
      console.error('Error deleting mandal by id:', error);
      throw error;
    }
  }

  static async getAll() {
    try {
      return await prisma.mandal.findMany({
        include: { panchayats: true }, // Include related Panchayats
      });
    } catch (error) {
      console.error('Error finding all mandals:', error);
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

      const mandals = await prisma.mandal.findMany({
        skip,
        take: limit,
        where,
        include: { panchayats: true },
      });

      const totalMandals = await prisma.mandal.count({ where });

      const totalPages = Math.ceil(totalMandals / limit);

      return {
        data: mandals,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: totalMandals,
          itemsPerPage: limit,
        },
      };
    } catch (error) {
      console.error('Error getting mandals with pagination and search:', error);
      throw error;
    }
  }
}

module.exports = Mandal;
