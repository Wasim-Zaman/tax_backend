/**
 * @swagger
 * /api/mandal/v1/createMandal:
 *   post:
 *     summary: Create a new Mandal
 *     tags: [Mandal]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: The Mandal name
 *               numberOfGramaPanchayati:
 *                 type: integer
 *                 description: Number of Grama Panchayats in the Mandal
 *     responses:
 *       201:
 *         description: Mandal created successfully
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
 *                   example: Mandal created successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "12345"
 *                     name:
 *                       type: string
 *                       example: "Mandal Name"
 */

/**
 * @swagger
 * /api/mandal/v1/getMandal/{id}:
 *   get:
 *     summary: Get a Mandal by ID
 *     tags: [Mandal]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Mandal ID
 *     responses:
 *       200:
 *         description: Mandal found successfully
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
 *                   example: Mandal found successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "12345"
 *                     name:
 *                       type: string
 *                       example: "Mandal Name"
 */

/**
 * @swagger
 * /api/mandal/v1/updateMandal/{id}:
 *   put:
 *     summary: Update a Mandal by ID
 *     tags: [Mandal]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Mandal ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               numberOfGramaPanchayati:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Mandal updated successfully
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
 *                   example: Mandal updated successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "12345"
 *                     name:
 *                       type: string
 *                       example: "Updated Mandal Name"
 */

/**
 * @swagger
 * /api/mandal/v1/deleteMandal/{id}:
 *   delete:
 *     summary: Delete a Mandal by ID
 *     tags: [Mandal]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Mandal ID
 *     responses:
 *       200:
 *         description: Mandal deleted successfully
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
 *                   example: Mandal deleted successfully
 */

/**
 * @swagger
 * /api/mandal/v1/getAllMandals:
 *   get:
 *     summary: Get all Mandals with pagination
 *     tags: [Mandal]
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
 *         description: Mandals retrieved successfully
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
 *                   example: Mandals retrieved successfully
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
 *                         example: "Mandal Name"
 */
