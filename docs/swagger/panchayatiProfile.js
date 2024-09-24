/**
 * @swagger
 * /api/panchayatiProfile/v1/createPanchayatiProfile:
 *   post:
 *     summary: Create a new PanchayatiProfile
 *     tags: [PanchayatiProfile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - panchayatId
 *             properties:
 *               area:
 *                 type: string
 *                 description: The PanchayatiProfile area
 *               population:
 *                 type: string
 *                 description: Population count
 *               numberOfHabitations:
 *                 type: string
 *                 description: Number of habitations
 *               houseHolds:
 *                 type: string
 *                 description: Number of households
 *               numberOfEmployees:
 *                 type: string
 *                 description: Number of employees
 *               waterSupplyTanks:
 *                 type: string
 *                 description: Number of water supply tanks
 *               tapConnections:
 *                 type: string
 *                 description: Number of tap connections
 *               roadLength:
 *                 type: number
 *                 description: Length of roads in kilometers
 *               drainageLength:
 *                 type: number
 *                 description: Length of drainage system in kilometers
 *               streetLights:
 *                 type: string
 *                 description: Number of street lights
 *               communityHalls:
 *                 type: string
 *                 description: Number of community halls
 *               userId:
 *                 type: string
 *                 description: ID of the user
 *               panchayatId:
 *                 type: string
 *                 description: ID of the panchayat
 *     responses:
 *       201:
 *         description: PanchayatiProfile created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: PanchayatiProfile created successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "12345"
 *                     area:
 *                       type: string
 *                       example: "Area Name"
 */

/**
 * @swagger
 * /api/panchayatiProfile/v1/getPanchayatiProfileByUserId/{userId}:
 *   get:
 *     summary: Get PanchayatiProfile by User ID
 *     tags: [PanchayatiProfile]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: PanchayatiProfile found successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: PanchayatiProfile found successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "12345"
 *                       area:
 *                         type: string
 *                         example: "Area Name"
 */

/**
 * @swagger
 * /api/panchayatiProfile/v1/getPanchayatiProfile/{id}:
 *   get:
 *     summary: Get a PanchayatiProfile by ID
 *     tags: [PanchayatiProfile]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The PanchayatiProfile ID
 *     responses:
 *       200:
 *         description: PanchayatiProfile found successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: PanchayatiProfile found successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "12345"
 *                     area:
 *                       type: string
 *                       example: "Area Name"
 */

/**
 * @swagger
 * /api/panchayatiProfile/v1/updatePanchayatiProfile/{id}:
 *   put:
 *     summary: Update a PanchayatiProfile by ID
 *     tags: [PanchayatiProfile]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The PanchayatiProfile ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               area:
 *                 type: string
 *               population:
 *                 type: string
 *               numberOfHabitations:
 *                 type: string
 *               houseHolds:
 *                 type: string
 *               numberOfEmployees:
 *                 type: string
 *               waterSupplyTanks:
 *                 type: string
 *               tapConnections:
 *                 type: string
 *               roadLength:
 *                 type: number
 *               drainageLength:
 *                 type: number
 *               streetLights:
 *                 type: string
 *               communityHalls:
 *                 type: string
 *               userId:
 *                 type: string
 *               panchayatId:
 *                 type: string
 *     responses:
 *       200:
 *         description: PanchayatiProfile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: PanchayatiProfile updated successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "12345"
 *                     area:
 *                       type: string
 *                       example: "Updated Area Name"
 */

/**
 * @swagger
 * /api/panchayatiProfile/v1/deletePanchayatiProfile/{id}:
 *   delete:
 *     summary: Delete a PanchayatiProfile by ID
 *     tags: [PanchayatiProfile]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The PanchayatiProfile ID
 *     responses:
 *       200:
 *         description: PanchayatiProfile deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: PanchayatiProfile deleted successfully
 */

/**
 * @swagger
 * /api/panchayatiProfile/v1/getAllPanchayatiProfiles:
 *   get:
 *     summary: Get all PanchayatiProfiles with pagination
 *     tags: [PanchayatiProfile]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: PanchayatiProfiles retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: PanchayatiProfiles retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "12345"
 *                       area:
 *                         type: string
 *                         example: "Area Name"
 */
