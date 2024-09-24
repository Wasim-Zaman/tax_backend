const path = require('path');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const AppError = require('./utils/error');
const swaggerSpec = require('./config/swagger');
const response = require('./utils/response');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const panchayatRoutes = require('./routes/panchayat');
const mandalRoutes = require('./routes/mandal');
const panchayatiProfileRoutes = require('./routes/panchayatiProfile');

// Import loggers from config
const { httpLogger, appLogger } = require('./config/logger');

const app = express();
const PORT = process.env.PORT || 3000;
// Set up rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
});

// Apply the rate limiter to all requests
app.use(limiter);
// Use Helmet!
app.use(helmet());

// Middleware setup
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Add your routes...
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/panchayat', panchayatRoutes);
app.use('/api/mandal', mandalRoutes);
app.use('/api/panchayatiProfile', panchayatiProfileRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Handle 404 errors
app.use((req, res, next) => {
  const error = new AppError(`No route found for ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
  // Use appLogger.error instead of console.log for errors
  appLogger.error(`Error: ${error.message}`, { stack: error.stack });

  let status = 500;
  let message = 'Something went wrong, please try again later or contact support.';
  let data = null;
  let success = false;

  if (error instanceof AppError) {
    status = error.statusCode || 500;
    message = error.message || message;
    data = error.data || null;
  }

  res.status(status).json(response(status, success, message, data));
});

// Start the server
app.listen(PORT, function () {
  // Use appLogger.info instead of console.log for general info
  appLogger.info(`Server is running on port ${PORT}`);
});
