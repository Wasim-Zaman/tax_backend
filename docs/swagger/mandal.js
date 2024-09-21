/**
 * @swagger
 * tags:
 *   name: Mandal
 *   description: Mandal management
 */

/**
 * @swagger
 * /v1/createMandal:
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
 *               - numberOfGramaPanchayati
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the Mandal
 *               numberOfGramaPanchayati:
 *                 type: integer
 *                 description: The number of Grama Panchayats in the Mandal
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
 *                       example: "Sample Mandal"
 *                     numberOfGramaPanchayati:
 *                       type: integer
 *                       example: 5
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Name and numberOfGramaPanchayati are required
 */

/**
 * @swagger
 * /v1/getMandal/{id}:
 *   get:
 *     summary: Get Mandal by ID
 *     tags: [Mandal]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
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
 *                       example: "Sample Mandal"
 *                     numberOfGramaPanchayati:
 *                       type: integer
 *                       example: 5
 *       404:
 *         description: Mandal not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Mandal not found
 */

// ... (similar documentation for updateMandal, deleteMandal, and getAllMandals endpoints)
