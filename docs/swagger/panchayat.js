/**
 * @swagger
 * /api/panchayat/v1/createPanchayat:
 *   post:
 *     summary: Create a new Panchayat
 *     tags: [Panchayat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - mandalId
 *             properties:
 *               name:
 *                 type: string
 *                 description: The Panchayat name
 *               numberOfHabitations:
 *                 type: integer
 *                 description: Number of habitations in the Panchayat
 *               libraryCess:
 *                 type: string
 *                 description: Library cess amount
 *               waterCess:
 *                 type: string
 *                 description: Water cess amount
 *               lightingCess:
 *                 type: string
 *                 description: Lighting cess amount
 *               drainageCess:
 *                 type: string
 *                 description: Drainage cess amount
 *               sportsCess:
 *                 type: string
 *                 description: Sports cess amount
 *               fireCess:
 *                 type: string
 *                 description: Fire cess amount
 *               mandalId:
 *                 type: string
 *                 description: ID of the mandal
 *     responses:
 *       201:
 *         description: Panchayat created successfully
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
 *                   example: Panchayat created successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "12345"
 *                     name:
 *                       type: string
 *                       example: "Panchayat Name"
 */

/**
 * @swagger
 * /api/panchayat/v1/getPanchayat/{id}:
 *   get:
 *     summary: Get a Panchayat by ID
 *     tags: [Panchayat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Panchayat ID
 *     responses:
 *       200:
 *         description: Panchayat found successfully
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
 *                   example: Panchayat found successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "12345"
 *                     name:
 *                       type: string
 *                       example: "Panchayat Name"
 */

/**
 * @swagger
 * /api/panchayat/v1/putPanchayat/{id}:
 *   put:
 *     summary: Update a Panchayat by ID
 *     tags: [Panchayat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Panchayat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               numberOfHabitations:
 *                 type: integer
 *               libraryCess:
 *                 type: string
 *               waterCess:
 *                 type: string
 *               lightingCess:
 *                 type: string
 *               drainageCess:
 *                 type: string
 *               sportsCess:
 *                 type: string
 *               fireCess:
 *                 type: string
 *               mandalId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Panchayat updated successfully
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
 *                   example: Panchayat updated successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "12345"
 *                     name:
 *                       type: string
 *                       example: "Updated Panchayat Name"
 */

/**
 * @swagger
 * /api/panchayat/v1/deletePanchayat/{id}:
 *   delete:
 *     summary: Delete a Panchayat by ID
 *     tags: [Panchayat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Panchayat ID
 *     responses:
 *       200:
 *         description: Panchayat deleted successfully
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
 *                   example: Panchayat deleted successfully
 */

/**
 * @swagger
 * /api/panchayat/v1/getAllPanchayats:
 *   get:
 *     summary: Get all Panchayats with pagination
 *     tags: [Panchayat]
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
 *         description: Panchayats retrieved successfully
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
 *                   example: Panchayats retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "12345"
 *                       name:
 *                         type: string
 *                         example: "Panchayat Name"
 */
