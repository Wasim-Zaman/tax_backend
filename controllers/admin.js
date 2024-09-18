const Admin = require("../models/admin");
const AppError = require("../utils/error");
const response = require("../utils/response");
const JWT = require("../utils/jwt");
const Bcrypt = require("../utils/bcrypt");
const { appLogger } = require("../config/logger");

exports.createAdmin = async (req, res, next) => {
  const EMAIL = process.env.ADMIN_EMAIL;
  const PASSWORD = process.env.ADMIN_PASSWORD;

  try {
    appLogger.info(`Attempting to create admin with email: ${EMAIL}`);
    const admin = await Admin.findByEmail(EMAIL);
    if (!admin) {
      const hashedPassword = await Bcrypt.createPassword(PASSWORD);
      await Admin.createAdmin({
        email: EMAIL,
        password: hashedPassword,
      });
      appLogger.info(`Admin created with email: ${EMAIL}`);
    } else {
      appLogger.info(`Admin already exists with email: ${EMAIL}`);
    }
    next();
  } catch (error) {
    appLogger.error(`Error in createAdmin: ${error.message}`, {
      stack: error.stack,
    });
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError("Email and password are required", 400);
    }

    const admin = await Admin.findByEmail(email);
    if (!admin) {
      throw new AppError("No admin found with entered email", 401);
    }

    const isPasswordValid = await Bcrypt.comparePassword(
      password,
      admin.password
    );
    if (!isPasswordValid) {
      throw new AppError("Invalid password entered", 401);
    }

    // Create a token (for simplicity, we're not doing this here)
    const token = JWT.createToken(admin);

    appLogger.info(`Admin logged in with email: ${email}`);

    res.status(200).json(
      response(200, true, "Login successful", {
        admin: {
          id: admin.id,
          email: admin.email,
        },
        token,
      })
    );
  } catch (error) {
    appLogger.error(`Error in login: ${error.message}`, { stack: error.stack });
    next(error);
  }
};
