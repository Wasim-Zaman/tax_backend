const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class User {
  static async findById(id) {
    try {
      return await prisma.user.findUnique({
        where: { id: id },
        include: { panchayat: true }, // Include related Panchayat
      });
    } catch (error) {
      console.error('Error finding user by id:', error);
      throw error;
    }
  }

  static async findByUsername(username) {
    try {
      return await prisma.user.findUnique({
        where: {
          username: username,
        },
      });
    } catch (error) {
      console.error('Error finding user by username:', error);
      throw error;
    }
  }

  static async create(data) {
    try {
      console.log(`Creating user with data: ${JSON.stringify(data)}`);
      return await prisma.user.create({
        data: {
          username: data.username,
          image: data.image,
          password: data.password,
          fullName: data.fullName,
          fatherName: data.fatherName,
          gender: data.gender,
          age: data.age,
          panchayat: {
            connect: {
              id: data.panchayatId, // Connect Panchayat relation
            },
          },
        },
        include: { panchayat: true },
      });
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  static async updateById(id, data) {
    try {
      console.log(`Updating user with ID ${id} and data: ${JSON.stringify(data)}`);

      // Create the update data object
      const updateData = { ...data };

      // Check if panchayatId exists, and if so, handle the relation update
      if (data.panchayatId) {
        updateData.panchayat = {
          connect: { id: data.panchayatId },
        };
        delete updateData.panchayatId; // Remove panchayatId after processing it
      }

      return await prisma.user.update({
        where: { id: id },
        data: updateData,
        include: { panchayat: true }, // Include Panchayat relation in the response
      });
    } catch (error) {
      console.error(`Error updating user with id ${id}:`, error.message);
      throw new Error(`Unable to update user with id ${id}`);
    }
  }

  static async deleteById(id) {
    try {
      console.log(`Deleting user with ID ${id}`);
      return await prisma.user.delete({
        where: { id: id },
      });
    } catch (error) {
      console.error('Error deleting user by id:', error);
      throw error;
    }
  }

  static async getAll() {
    try {
      return await prisma.user.findMany({
        include: { panchayat: true }, // Include related Panchayat
      });
    } catch (error) {
      console.error('Error finding all users:', error);
      throw error;
    }
  }

  static async get(page = 1, limit = 10, query = '') {
    try {
      const skip = (page - 1) * limit;

      const where = query
        ? {
            OR: [{ username: { contains: query } }, { fullName: { contains: query } }],
          }
        : {};

      const users = await prisma.user.findMany({
        skip,
        take: limit,
        where,
        include: { panchayat: true },
      });

      const totalUsers = await prisma.user.count({ where });

      const totalPages = Math.ceil(totalUsers / limit);

      return {
        data: users,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: totalUsers,
          itemsPerPage: limit,
        },
      };
    } catch (error) {
      console.error('Error getting users with pagination and search:', error);
      throw error;
    }
  }
}

module.exports = User;
