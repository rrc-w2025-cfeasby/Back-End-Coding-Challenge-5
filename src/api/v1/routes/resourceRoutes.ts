import { Router } from "express";
import {
  getResources,
  getResource,
  createResourceHandler,
  updateResourceHandler,
  deleteResourceHandler,
} from "../controllers/resourceController";

const router = Router();

/**
 * @openapi
 * /resources:
 *   get:
 *     summary: Get all resources
 *     description: Returns all educational resources with a count.
 *     tags: [Resources]
 *     responses:
 *       200:
 *         description: Resources retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 count:
 *                   type: number
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       title:
 *                         type: string
 *                       type:
 *                         type: string
 *                         enum: [article, video, tutorial, documentation]
 *                       url:
 *                         type: string
 *                       description:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *   post:
 *     summary: Create a new resource
 *     description: Creates a new educational resource.
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - type
 *               - url
 *             properties:
 *               title:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [article, video, tutorial, documentation]
 *               url:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Resource created successfully
 *       400:
 *         description: Missing required field
 */

/**
 * @openapi
 * /resources/{id}:
 *   get:
 *     summary: Get a single resource
 *     description: Retrieves a resource by its ID.
 *     tags: [Resources]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Resource retrieved successfully
 *       404:
 *         description: Resource not found
 *   put:
 *     summary: Update a resource
 *     description: Updates an existing resource by ID.
 *     tags: [Resources]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [article, video, tutorial, documentation]
 *               url:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resource updated successfully
 *       404:
 *         description: Resource not found
 *   delete:
 *     summary: Delete a resource
 *     description: Deletes a resource by ID.
 *     tags: [Resources]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Resource deleted successfully
 *       404:
 *         description: Resource not found
 */

router.get("/resources", getResources);
router.get("/resources/:id", getResource);
router.post("/resources", createResourceHandler);
router.put("/resources/:id", updateResourceHandler);
router.delete("/resources/:id", deleteResourceHandler);

export default router;