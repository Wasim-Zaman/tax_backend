const { PrismaClient } = require("@prisma/client");
const { appLogger } = require("../config/logger"); // Import appLogger

const prisma = new PrismaClient();

class Admin {
  static async findByEmail(email) {
    try {
      const admin = await prisma.admin.findUnique({
        where: { email: email.toString() },
      });
      return admin;
    } catch (error) {
      appLogger.error(`Error finding admin by email: ${email}`, {
        stack: error.stack,
      });
      throw error;
    }
  }

  static async createAdmin(data) {
    try {
      appLogger.info(`Creating admin with data: ${JSON.stringify(data)}`);
      const admin = await prisma.admin.create({
        data: {
          ...data,
          password: data.password, // Use already hashed password
        },
      });
      appLogger.info(`Admin created with data: ${JSON.stringify(admin)}`);
      return admin;
    } catch (error) {
      appLogger.error(`Error creating admin: ${error.message}`, {
        stack: error.stack,
      });
      throw error;
    }
  }
}

module.exports = Admin;
