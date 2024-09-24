const User = require('../models/user');
const Panchayat = require('../models/panchayat');
const CustomError = require('../utils/error');
const response = require('../utils/response');
const JWT = require('../utils/jwt');
const Bcrypt = require('../utils/bcrypt');

// Register a new user
exports.register = async (req, res, next) => {
  try {
    const { username, password, fullName, fatherName, gender, age, panchayatId } = req.body;

    if (!username || !password) {
      throw new CustomError('Username and password are required', 400);
    }

    // Check if user already exists
    const existingUser = await User.findByUsername(username);
    if (existingUser) {
      throw new CustomError('Username is already taken', 400);
    }

    // Hash the password
    const hashedPassword = await Bcrypt.createPassword(password);

    // Create the new user
    const newUser = await User.create({
      username,
      password: hashedPassword,
      fullName,
      fatherName,
      gender,
      age,
      panchayatId,
    });

    // Add the user to the Panchayat if panchayatId is provided
    if (panchayatId) {
      await Panchayat.updateById(panchayatId, {
        users: {
          connect: { id: newUser.id }, // Connect the newly created user to the Panchayat
        },
      });
    }

    // Create a JWT token for the newly registered user
    const token = JWT.createToken(newUser);

    res.status(201).json(
      response(201, true, 'User registered successfully', {
        user: {
          id: newUser.id,
          username: newUser.username,
        },
        token,
      })
    );
  } catch (error) {
    console.log(`Error in register: ${error.message}`);
    next(error);
  }
};

// Login a user
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new CustomError('Username and password are required', 400);
    }

    // Find user by username
    const user = await User.findByUsername(username);
    if (!user) {
      throw new CustomError('No user found with the entered username', 401);
    }

    // Compare provided password with stored hashed password
    const isPasswordValid = await Bcrypt.comparePassword(password, user.password);
    if (!isPasswordValid) {
      throw new CustomError('Invalid password entered', 401);
    }

    // Create a JWT token for the authenticated user
    const token = JWT.createToken(user);

    res.status(200).json(
      response(200, true, 'Login successful', {
        user: {
          id: user.id,
          username: user.username,
        },
        token,
      })
    );
  } catch (error) {
    console.log(`Error in login: ${error.message}`);
    next(error);
  }
};

// Get user by ID
exports.getUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      throw new CustomError('User not found', 404);
    }
    res.status(200).json(response(200, true, 'User found successfully', user));
  } catch (error) {
    console.log(`Error in getUserById: ${error.message}`);
    next(error);
  }
};

// Get User
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      throw new CustomError('User not found', 404);
    }
    res.status(200).json(response(200, true, 'User found successfully', user));
  } catch (error) {
    console.log(`Error in getUserById: ${error.message}`);
    next(error);
  }
};

// Update a user by ID
exports.updateUserById = async (req, res, next) => {
  const { id } = req.params;
  const { username, password, fullName, fatherName, gender, age, panchayatId } = req.body;

  try {
    // Create an update object and only add the fields that are provided in the request body
    const updateData = {};

    if (username) updateData.username = username;
    if (password) updateData.password = password; // Consider hashing the password before updating
    if (fullName) updateData.fullName = fullName;
    if (fatherName) updateData.fatherName = fatherName;
    if (gender) updateData.gender = gender;
    if (age) updateData.age = age;

    // Handle the relation update for panchayat
    if (panchayatId) {
      updateData.panchayat = {
        connect: { id: panchayatId },
      };
    }

    // If no fields are provided, return an error
    if (Object.keys(updateData).length === 0) {
      throw new CustomError('No fields provided for update', 400);
    }

    // Update the user in the database
    const updatedUser = await User.updateById(id, updateData);

    res.status(200).json(response(200, true, 'User updated successfully', updatedUser));
  } catch (error) {
    console.log(`Error in updateUserById: ${error.message}`);
    next(error);
  }
};

// Delete a user by ID
exports.deleteUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    // Check if the user exists before deleting it
    const user = await User.findById(id);
    if (!user) {
      throw new CustomError('User not found', 404);
    }

    // Delete the user from the database
    // Note: This will also delete any related documents (e.g., panchayats) in other collections
    await User.deleteById(id);

    res.status(200).json(response(200, true, 'User deleted successfully'));
  } catch (error) {
    console.log(`Error in deleteUserById: ${error.message}`);
    next(error);
  }
};

// Get all users with pagination
exports.getUsers = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, query = '' } = req.query;

    const users = await User.get(Number(page), Number(limit), query);

    if (!users.data.length) {
      throw new CustomError('No users found', 404);
    }

    res.status(200).json(response(200, true, 'Users retrieved successfully', users));
  } catch (error) {
    console.log(`Error in getUsers: ${error.message}`);
    next(error);
  }
};
